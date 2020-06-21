import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-nouveau',
  template: `
  <p>
    {{ data }}
  </p>
  `
})

export class NouveauComponent implements OnChanges, OnInit, DoCheck {
  @Input('') public data: string;

  constructor() {
    console.log("Constructor: ", this.data);  
  }

  ngOnChanges(simpleChange){
    console.log("ngOnChange");
    console.log("On Changes : ", this.data);
  }

  ngOnInit(){
    console.log("On Init : ", this.data);
  }

  ngDoCheck(){
    console.log("ng Do Check");
  }

  

  // ngOnInit() {
  // }

}
