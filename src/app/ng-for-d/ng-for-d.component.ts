import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-d',
  templateUrl: './ng-for-d.component.html',
  styleUrl: './ng-for-d.component.css'
})
export class NgForDComponent {
  // Sample data
  books = [
    { title: 'AAA', author: 'BBB' },
    { title: '1984', author: 'X' },
    { title: 'CCC', author: 'D' },
    { title: 'EEE', author: 'Y' }
  ];

  // Condition to display the list
  showBooks = true;

}
