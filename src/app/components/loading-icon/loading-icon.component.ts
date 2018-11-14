import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.scss']
})
export class LoadingIconComponent implements OnInit, OnChanges {

  iconPath = 'assets/icons/animated-loading-icon.gif';
  @Input() viewportWith: number;
  styles: Object;
  iconRatio = 0.1;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.updateStyle();
  }

  updateStyle = () => {
    if (this.viewportWith) {
      this.styles = {
        width: `${this.iconRatio * this.viewportWith}px`,
        hieght: `${this.iconRatio * this.viewportWith}px`,
      };
    } else {
      this.styles = {
        width: '30px',
        hieght: '30px',
      };
    }
  }

}
