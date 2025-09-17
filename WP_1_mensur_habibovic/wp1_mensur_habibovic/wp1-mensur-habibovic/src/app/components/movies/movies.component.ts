import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  standalone: true, // 👈 THIS is key
  imports: [CommonModule], // 👈 THIS allows *ngFor and *ngIf to work
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: Movie[] = [];

  constructor() {
    for (let i = 1; i <= 20; i++) {
      this.movies.push(new Movie(
        `Film ${i}`,
        `Opis za film broj ${i}.`,
        `https://placehold.co/300x300/000/fff?text=Slika+${i}`,
        Math.floor(Math.random() * 20 + 5)
      ));
    }
  }

  onSelect(movie: Movie) {
    alert(`Odabrali ste: ${movie.title}`);
  }
}
