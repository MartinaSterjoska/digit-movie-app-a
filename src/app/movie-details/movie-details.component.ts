import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movieObject: Movie;
  @Output() deleteMovie = new EventEmitter<Movie>();
  @Input() hasWonAward: boolean;
  isHovered = false;
  constructor() { }

  ngOnInit() {
    console.log(this.movieObject);
  }

  onClickDeleteButton(): void {
    this.deleteMovie.emit(this.movieObject);
  }

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }
}
