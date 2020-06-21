import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public color= "blue";
  
  public changeColor(color: string): void
  {
      this.color = color;
  }
}
