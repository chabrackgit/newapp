import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appColor]'
})

export class ColorDirective implements OnInit {

    constructor(private el: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }

    @HostListener('click') click(){
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
    }
}