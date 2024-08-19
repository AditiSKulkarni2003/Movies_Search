import { Component, Input } from '@angular/core';
import { Film } from '../../models/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {
  @Input() film! : Film

}
//The exclamation mark (!) is  "definite assignment assertion."
// It tells TypeScript that even though the property isn't initialized in the constructor or
// directly within the class, it will definitely be assigned a value.
