import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, RouterLink],
})
export class HomePage {
  key: string = '';
  value: string = '';
  output: string = '';

  constructor(private storageService: StorageService) {}

  async setItem() {
    if(this.key === '' || this.value === '') {
      this.output = 'Key and value are required';
      return;
    }
    try {
      await this.storageService.set(this.key, this.value);
      this.output = `Set ${this.key}: ${this.value}`;
    } catch (error) {
      console.error('Error setting item', error);
      this.output = `Error setting item: ${error}`;
    }
  }

  async getItem() {
    if(this.key === '' || this.value === '') {
      this.output = 'Key and value are required';
      return;
    }
    try {
      const value = await this.storageService.get(this.key);
      this.output = `Got ${this.key} as ${value}`;
    } catch (error) {
      console.error('Error getting item', error);
      this.output = `Error getting item: ${error}`;
    }
  }

  async removeItem() {
    if(this.key === '' || this.value === '') {
      this.output = 'Key and value are required';
      return;
    }
    try {
      await this.storageService.remove(this.key);
      this.output = `Removed ${this.key}`;
    } catch (error) {
      console.error('Error removing item', error);
      this.output = `Error removing item: ${error}`;
    }
  }

  async clear() {
    try {
      await this.storageService.clear();
      this.output = 'Cleared storage';
    } catch (error) {
      console.error('Error clearing storage', error);
      this.output = `Error clearing storage: ${error}`;
    }
  }

  async getKeys() {
    if(this.key === '' || this.value === '') {
      this.output = 'Key and value are required';
      return;
    }
    try {
      const keys = await this.storageService.keys();
      this.output = `Keys: ${keys.join(', ')}`;
    } catch (error) {
      console.error('Error getting keys', error);
      this.output = `Error getting keys: ${error}`;
    }
  }

  async getLength() {
    if(this.key === '' || this.value === '') {
      this.output = 'Key and value are required';
      return;
    }
    try {
      const length = await this.storageService.length();
      this.output = `Length: ${length}`;
    } catch (error) {
      console.error('Error getting length', error);
      this.output = `Error getting length: ${error}`;
    }
  }

  async iterateItems() {
    if(this.key === '' || this.value === '') {
      this.output = 'Key and value are required';
      return;
    }
    try {
      let items = '';
      await this.storageService.forEach((value, key, index) => {
        items += `${index}: ${key} = ${value}\n`;
      });
      this.output = `Items:\n${items}`;
    } catch (error) {
      console.error('Error iterating items', error);
      this.output = `Error iterating items: ${error}`;
    }
  }
}