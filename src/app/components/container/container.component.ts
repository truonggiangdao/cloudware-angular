import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, HostListener } from '@angular/core';
import deviceHelper from '@app/common/utils/deviceHelper';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnChanges {

  @Input() page: string;
  width = 0;
  @Output() widthChange = new EventEmitter<number>();
  height = 0;
  @Output() heightChange = new EventEmitter<number>();

  COLOR_WHITE = '#fff';
  COLOR_GREY = 'rgb(242, 242, 242)';

  styles: object = {
    'max-width': '100vw',
    'background-color': 'transparent',
  };

  constructor() { }

  ngOnInit() {
    this.updateWidthByDevice();
    this.updateStyleByPage();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.page) {
      this.updateStyleByPage();
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(ev) {
    this.updateWidthByDevice();
    this.updateStyleByPage();
  }

  updateWidthByDevice = () => {
    if (deviceHelper.isMobile()) {
      this.styles['height'] = `${window.innerHeight}px`;
      this.setDimension(window.innerWidth, window.innerHeight);
    } else {
      // const width = document.body.offsetHeight / 16 * 9;
      // this.styles['max-width'] = `${width}px`;
      this.styles['width'] = `360px`;
      this.styles['height'] = `640px`;
      this.setDimension(360, 640);
    }
  }

  setDimension = (w, h) => {
    this.width = w;
    this.widthChange.emit(this.width);
    this.height = h;
    this.heightChange.emit(this.height);
  }

  updateStyleByPage = () => {
    if (this.page === 'login') {
      this.styles = {
        ...this.styles,
        'background-color': `${this.COLOR_WHITE}`,
      };
    } else {
      this.styles = {
        ...this.styles,
        'background-color': `${this.COLOR_GREY}`,
      };
    }
  }
}
