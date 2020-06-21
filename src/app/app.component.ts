import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    public users: Array< {nom: string}> = [
      {
        nom:"Mohamed"
      },
      {
        nom:"Didine"
      },
      {
        nom:"Hassan"
      }
    ]

}
