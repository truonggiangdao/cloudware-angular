import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'nav-icon',
  templateUrl: './nav-icon.component.html',
  styleUrls: ['./nav-icon.component.scss']
})
export class NavIconComponent implements OnInit, OnChanges {

  assetPath = 'assets/icons/';
  ICONS = {
    MORE: 'icon_more.svg',
    MORE_ACTIVE: 'icon_more.svg',
    SOUND: 'icon_sound_inactive.svg',
    SOUND_ACTIVE: 'icon_sound_active.svg',
    LIGHT: 'icon_light_inactive.svg',
    LIGHT_ACTIVE: 'icon_light_active.svg',
    TEMPERATURE: 'icon_temp_inactive.svg',
    TEMPERATURE_ACTIVE: 'icon_temp_active.svg',
    HUMIDITY: 'icon_humidity_inactive.svg',
    HUMIDITY_ACTIVE: 'icon_humidity_active.svg',
    CO2: 'icon_co2_inactive.svg',
    CO2_ACTIVE: 'icon_co2_active.svg',
  };
  @Input() icon: string;
  @Input() active: boolean;
  @Input() clickable: string;
  iconPath: string;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(change: SimpleChanges) {
    this.toggleIconStage(this.icon, this.active);
    if (this.icon && this.ICONS[this.icon]) {
      this.preloadIcon(this.getIconPath(this.ICONS[this.icon]));
      if (this.ICONS[`${this.icon}_ACTIVE`]) {
        this.preloadIcon(this.getIconPath(this.ICONS[`${this.icon}_ACTIVE`]));
      }
    }
  }

  toggleIconStage = (icon, isActive) => {
    let path = '';
    if (this.ICONS[icon] && isActive) {
      path = this.ICONS[`${icon}_ACTIVE`];
    } else if (this.ICONS[icon]) {
      path = this.ICONS[icon];
    } else {
      path = this.ICONS.MORE;
    }
    this.iconPath = this.getIconPath(path);
  }

  getIconPath = (icon: string) => {
    return `${this.assetPath}${icon}`;
  }

  preloadIcon = (imgSrc: string) => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {};
    img.onerror = () => {};
  }
}
