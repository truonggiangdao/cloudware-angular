import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DropdownOption } from '@app/common/classes/location/DropdownOption';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input() value: DropdownOption;
  @Input() focus: boolean;
  @Input() options: Array<DropdownOption>;
  @Output() change = new EventEmitter<DropdownOption>();
  @Output() focused = new EventEmitter<boolean>();
  @Output() valueChange = new EventEmitter<DropdownOption>();
  isDropdownShow = false;

  constructor() { }

  ngOnInit() {
    if (!this.value && this.options) {
      this.value = this.options[0];
      this.onChange(null);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.focus) {
      this.toggleDropdown(false);
    }
  }

  containerClicked = (event: MouseEvent) => {
    event.stopPropagation();
    this.toggleDropdown();
    this.triggerFocused();
  }

  triggerFocused = () => {
    this.focused.emit(true);
  }

  toggleDropdown = (shouldShow = undefined) => {
    if (this.options && this.options.length > 1) {
      let toShow;
      if (typeof shouldShow !== typeof undefined) {
        toShow = shouldShow;
      } else {
        toShow = !this.isDropdownShow;
      }
      this.isDropdownShow = toShow;
    }
  }

  select = (option, event: MouseEvent) => {
    event.stopPropagation();
    if (!this.value || this.value.id !== option.id) {
      this.value = option;
      this.onChange(option);
    }
    this.toggleDropdown(false);
  }

  onChange = (option) => {
    this.valueChange.emit(option);
    this.change.emit(option);
  }

}
