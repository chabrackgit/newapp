import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public inputType = "date";
  public submitType = "submit";

  constructor(){
    setTimeout(()=>{
      this.inputType = "number";
    }, 3000);
    
  }

}
