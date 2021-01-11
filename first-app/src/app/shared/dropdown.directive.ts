import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean;

    constructor(private elRef: ElementRef) {}

    @HostListener('click') mouseclick(eventData: Event){
        this.isOpen = !this.isOpen;
    }
}
