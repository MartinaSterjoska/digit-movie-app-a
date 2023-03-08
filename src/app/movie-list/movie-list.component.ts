import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  moviesTitle = 'Movies';
  searchTerm = '';
  movies: Movie[] = [
    { title: 'The Shawshank Redemption', director: 'Frank Darabont', releaseDate: new Date(1994, 9, 22), award: true },
    { title: 'The Godfather', director: 'Francis Ford Coppola', releaseDate: null, award: false },
    { title: 'The Godfather: Part II', director: 'Francis Ford Coppola', releaseDate: new Date(1974, 12, 20), award: false },
    { title: 'The Dark Knight', director: 'Christopher Nolan', releaseDate: new Date(2008, 7, 18), award: false },
    { title: '12 Angry Men', director: 'Sidney Lumet', releaseDate: new Date(1957, 4, 1), award: true },
  ];
  constructor() { }

  ngOnInit() {
  }

  deleteMovie(movie: Movie): void {
    this.movies = this.movies.filter(m => m.title !== movie.title);
  }

  get getFilteredMovies(): Movie[] {
    return this.movies.filter(movie => movie.title.toLocaleLowerCase()
    .includes(this.searchTerm.toLocaleLowerCase()));
  }
}
