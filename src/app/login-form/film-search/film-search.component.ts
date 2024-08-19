import { Component } from '@angular/core';
import { Film } from '../../models/film';
import { AuthenticationServiceService } from '../../services/authentication-service.service';


@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent {
  searchTerm = '';
  films: Film[] = [];

  sampleFilms: Film[] = [
    {
      title: 'Titanic',
      released: '19 Dec 1997',
      director: 'James Cameron',
      actors: 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates',
      poster: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
      plot: `84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about
           her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley.
          Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic
          on its first and last voyage April 15th, 1912 at 2:20 in the morning.`,
      metaScore: 75
    },
    {
      title: 'Blade Runner',
      released: '25 Jun 1982',
      director: 'Ridley Scott',
      actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
      poster: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      plot: 'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
      metaScore: 89
    },
    {
      title: 'The Shining',
      released: '13 Jun 1980',
      director: 'Stanley Kubrick',
      actors: 'Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers',
      poster: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      plot: 'A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
      metaScore: 93
    },
    {
        title : 'Shaitaan (2024)',
        released: '4 April 2024',
        director: 'Vikas Bahl',
        actors: 'Ajay Devgn, R. Madhavan, Jyothika, Janki Bodiwala, Anngad Raaj',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkTvy4hF9mHi_VAian7MbbJvIMJFyCPMNXA&s',
        plot: 'A psychological horror-thriller where a father battles a sinister figure who has hypnotized and abducted his daughter, intending to sacrifice her along with other victims. The film explores themes of parental love, power, and control, with intense and dark sequences.',
        metaScore: 90
    },

    {
      title : 'Fighter',
      released: '25 January 2024',
      director: 'Siddharth Anand',
      actors: 'Hrithik Roshan, Deepika Padukone, Anil Kapoor',
      poster: 'https://m.media-amazon.com/images/M/MV5BZjkwN2Q5Y2QtMmE2MC00NzlkLTg2NzQtYjVjYjVmNjE2ZTNiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
      plot: 'An action-packed drama featuring Indian Air Force pilots as they navigate personal and professional challenges in India’s first aerial action film. The story emphasizes patriotism, sacrifice, and the struggles of those in service.',
      metaScore: 85
    },
    {
      title : 'Dear Comrade',
        released: '26 July 2019',
        director: 'Bharat Kamma',
        actors: 'Vijay Deverakonda, Rashmika Mandanna, Shruti Ramachandran, Charuhasan',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_jPKmC2XoeMukOoIOHIbSNCB_d_vJG_Flw&s',
        plot: 'A passionate student leader, Bobby, falls in love with Lilly, a state-level cricketer. Their relationship is tested by Bobby  is aggressive nature and Lilly is traumatic experiences, leading them through a journey of love, healing, and redemption.',
        metaScore: 92
    }

  ];

  filteredFilms: Film[] = [];

  searchFilms() {
    console.log('Search term:', this.searchTerm);

    if (this.searchTerm.trim() === '') {
      this.filteredFilms = [];
      console.log('No search term provided, displaying all films.');
    } else {
      this.filteredFilms = this.sampleFilms.filter(film =>
        film.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      console.log('Filtered films:', this.filteredFilms);
    }
  }


  loggedIn = true;

  constructor(private authService: AuthenticationServiceService) {}


  // ngOnInit() {
  //   // Subscribe to the login event to update the loggedIn status
  //   this.authService.loginEvent.subscribe(loggedIn => {
  //     this.loggedIn = loggedIn;
  //   });
  // }

  onLogout() {
    this.authService.logout(); // Call the logout method from the authentication service
  }
}
// filteredFilms: Film[] = this.films;

  // searchFilms() {
  //   console.log('Search term:', this.searchTerm);

  //   if (this.searchTerm.trim() === '') {
  //     this.filteredFilms = this.films;
  //     console.log('No search term provided, displaying all films.');
  //   } else {
  //     this.filteredFilms = this.sampleFilms.filter(film =>
  //       film.title.toLowerCase().includes(this.searchTerm.toLowerCase())
  //     );
  //     console.log('Filtered films:', this.filteredFilms);
  //   }
  // }