import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nav-btn',
  templateUrl: './nav-btn.component.html',
  styleUrls: ['./nav-btn.component.scss']
})
export class NavBtnComponent implements OnInit {

  @Input() active: boolean;
  @Output() click = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  // onClick = ($event) => {
  //   if (!this.active) {
  //     this.click.emit();
  //   }
  // }

}
