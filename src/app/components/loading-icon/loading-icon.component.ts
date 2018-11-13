import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.scss']
})
export class LoadingIconComponent implements OnInit, OnChanges {

  iconPath = 'assets/icons/animated-loading-icon.gif';
  @Input() viewportWith: number;
  styles: Object;
  iconWithHeight = 0.1;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.updateStyle();
  }

  updateStyle = () => {
    if (this.viewportWith) {
      this.styles = {
        width: `${this.iconWithHeight * this.viewportWith}px`,
        hieght: `${this.iconWithHeight * this.viewportWith}px`,
      };
    } else {
      this.styles = {
        width: '30px',
        hieght: '30px',
      };
    }
  }

}
