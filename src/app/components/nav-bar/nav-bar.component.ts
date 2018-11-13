import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {

  @Output() rendered = new EventEmitter<number>();
  @ViewChild('navbarContainer') el: ElementRef;

  constructor(
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.rendered.emit(this.el.nativeElement.offsetHeight);
  }

}
