import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public multiplier(nbr: number): number 
  {
    return nbr*nbr;
  };

}
