import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditMovieModalComponent } from './edit-movie-modal.component';

describe('EditMovieModalComponent', () => {
  let component: EditMovieModalComponent;
  let fixture: ComponentFixture<EditMovieModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EditMovieModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditMovieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
