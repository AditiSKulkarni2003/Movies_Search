import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  price=9.9;
  expirationDate =new Date();

  ngOnInit(){
    this.expirationDate.setDate(this.expirationDate.getDate()+3);
  }

}
