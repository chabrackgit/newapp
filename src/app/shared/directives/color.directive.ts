import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appColor]'
})

export class ColorDirective implements OnInit {


    @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
    @HostBinding('style.color') color = 'blue';

    constructor(private el: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
    
    }

    @HostListener('click') click(){
        this.backgroundColor = 'black';
    }
}