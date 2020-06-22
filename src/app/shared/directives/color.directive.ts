import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appColor]'
})

export class ColorDirective implements OnInit {

    constructor(private el: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red')
    }
}