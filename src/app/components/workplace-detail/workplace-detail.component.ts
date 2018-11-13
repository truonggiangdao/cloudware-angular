import { Component, OnInit, Input, Output, OnChanges,
  ViewChild, ElementRef, EventEmitter, AfterViewInit, SimpleChanges } from '@angular/core';
import { WorkPlaceDetail } from '@app/common/classes/workPlaceDetail/WorkPlaceDetail';
import { Color } from '@app/common/constants/color';

@Component({
  selector: 'workplace-detail',
  templateUrl: './workplace-detail.component.html',
  styleUrls: ['./workplace-detail.component.scss']
})
export class WorkplaceDetailComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() workplace: WorkPlaceDetail;
  @Output() rendered = new EventEmitter<number>();
  @ViewChild('workplaceDetailrContainer') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    setTimeout(this.triggerRenderedEvent);
  }

  ngAfterViewInit() {
    this.triggerRenderedEvent();
  }

  triggerRenderedEvent = () => {
    this.rendered.emit(this.el.nativeElement.offsetHeight);
  }

  getClass = (parameterData) => {
    let classes = {};
    if (parameterData) {
      classes = {
        'bubble-dark-green': parameterData.color === Color.DARK_GREEN,
        'bubble-light-green': parameterData.color === Color.LIGHT_GREEN,
        'bubble-yellow': parameterData.color === Color.YELLOW,
        'bubble-orange': parameterData.color === Color.ORANGE,
        'bubble-red': parameterData.color === Color.RED,
      };
    }
    return classes;
  }

  getParameterValue = (value, unit) => {
    return `${ value === null ? '' : value + ' ' + unit}`;
  }

}
