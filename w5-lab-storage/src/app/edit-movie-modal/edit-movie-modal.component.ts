import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-movie-modal',
  templateUrl: './edit-movie-modal.component.html',
  styleUrls: ['./edit-movie-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class EditMovieModalComponent implements OnInit {
  @Input() movie: any;
  @Input() index!: number;
  name: string = '';
  year: string = '';
  errorMessage: string = '';

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.name = this.movie.name;
    this.year = this.movie.year;
  }

  async save() {
    if (this.name && this.year) {
      await this.modalController.dismiss({ name: this.name, year: this.year, index: this.index });
    } else {
      this.errorMessage = 'Movie name and release year are required.';
    }
  }

  async close() {
    await this.modalController.dismiss();
  }
}