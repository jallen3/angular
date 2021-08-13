import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  
  @HostBinding('class.open') isOpen = false;
  //Closes Menu when any place on the page is clicked
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  //Close menu only when the button is clicked
  // @HostListener('click') toggleOpen(){
  //   this.isOpen = !this.isOpen;
  // }

  constructor(private elRef: ElementRef) { }

}
