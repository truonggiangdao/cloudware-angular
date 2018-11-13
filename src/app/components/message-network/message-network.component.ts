import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message-network',
  templateUrl: './message-network.component.html',
  styleUrls: ['./message-network.component.scss']
})
export class MessageNetworkComponent implements OnInit, OnChanges {

  @Input() messageNetwork = 'No Internet Connection';
  @Input() top: number;
  styles: Object;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.updateStyle();
  }

  updateStyle = () => {
    if (this.top) {
      this.styles = {
        top: `${this.top}px`,
      };
    } else {
      this.styles = {
        top: `0`,
      };
    }
  }

}
