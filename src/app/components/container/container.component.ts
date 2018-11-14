import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  width = 0;
  height = 0;
  @Output() widthChange = new EventEmitter<number>();
  @Output() heightChange = new EventEmitter<number>();

  ngOnInit() {
    this.updateWidthByDevice();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(ev) {
    this.updateWidthByDevice();
  }

  updateWidthByDevice = () => {
    this.setDimension(window.innerWidth, window.innerHeight);
  }

  setDimension = (w, h) => {
    this.width = w;
    this.widthChange.emit(this.width);
    this.height = h;
    this.heightChange.emit(this.height);
  }
}
