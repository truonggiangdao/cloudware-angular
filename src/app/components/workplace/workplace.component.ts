import {
  Component, Input, ViewChild, ElementRef,
  OnInit, OnChanges, AfterViewChecked, SimpleChanges,
} from '@angular/core';
import { Color } from '@app/common/constants/color';
import { Parameter } from '@app/common/constants/parameter';

@Component({
  selector: 'workplace-bubble',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})
export class WorkplaceComponent implements OnInit, OnChanges, AfterViewChecked {

  @Input() x: number;
  @Input() y: number;
  @Input() defaultRatio: number;
  @Input() ratio: number;
  @Input() viewportWidth: number;
  @Input() visible: boolean;
  @Input() occupied: boolean;
  @Input() selected: boolean;
  @Input() parameter: string;
  @Input() status: string;

  @ViewChild('workplaceBubble') workplaceBubbleEl: ElementRef;

  DEFAULT_WIDTH = 25;
  width = 25;
  showBubbleIcon = true;
  containerStyles: Object;
  styles: Object;
  classes: Object;

  constructor() { }

  ngOnInit() {
    this.updateVisual();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateVisual();
  }

  ngAfterViewChecked() {
    this.updateVisual();
  }

  updateVisual = () => {
    this.updateStyle();
    this.updateClass();
    this.updateContainerClass();
  }

  updateStyle = () => {
    if (this.defaultRatio) {
      this.width = this.DEFAULT_WIDTH / this.defaultRatio * this.ratio;
      if (this.width < 10) {
        this.width = 10;
      }
      if (this.width > (this.viewportWidth * 0.15)) {
        this.width = (this.viewportWidth * 0.15);
      }
    } else {
      this.width = this.DEFAULT_WIDTH;
    }
    if (this.occupied) {
      this.width = 0.75 * this.width;
    }
    this.showBubbleIcon = (this.width * 0.4) >= 10;
    this.styles = {
      top: `${this.y * this.ratio}px`,
      left: `${this.x * this.ratio}px`,
      width: `${Math.ceil(this.width)}px`,
    };
  }

  updateClass = () => {
    this.classes = {
      'bubble-dark-green': this.status === Color.DARK_GREEN,
      'bubble-light-green': this.status === Color.LIGHT_GREEN,
      'bubble-yellow': this.status === Color.YELLOW,
      'bubble-orange': this.status === Color.ORANGE,
      'bubble-red': this.status === Color.RED,
      'bubble-sound': this.showBubbleIcon && this.parameter === Parameter.SOUND,
      'bubble-light': this.showBubbleIcon && this.parameter === Parameter.LIGHT,
      'bubble-temp': this.showBubbleIcon && this.parameter === Parameter.TEMPERATURE,
      'bubble-humidity': this.showBubbleIcon && this.parameter === Parameter.HUMIDITY,
      'bubble-co2': this.showBubbleIcon && this.parameter === Parameter.CO2,
    };
  }

  updateContainerClass = () => {
    let bubbleWidth = this.workplaceBubbleEl.nativeElement.offsetWidth;
    bubbleWidth = bubbleWidth ? bubbleWidth : 0;
    const bubbleBorderWidth = Math.ceil(bubbleWidth * 0.06);
    this.containerStyles = {
      top: `-${bubbleBorderWidth}px`,
      left: `-${bubbleBorderWidth}px`,
      width: `calc(100% + ${bubbleBorderWidth * 2}px)`,
      'border-width': `${bubbleBorderWidth}px`,
    };
  }

}
