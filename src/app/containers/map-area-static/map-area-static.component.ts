import { Component, OnInit, Input, Output, EventEmitter,
  OnChanges, SimpleChanges } from '@angular/core';
import { Floor } from '@app/common/classes/floor/Floor';
import { AppConfig } from '@app/common/classes/AppConfig';
import { ViewportDetails } from '@app/common/classes/ViewportDetails';
import { WorkPlaceDetail } from '@app/common/classes/workPlaceDetail/WorkPlaceDetail';
import { Color } from '@app/common/constants/color';
import { Parameter } from '@app/common/constants/parameter';
import deviceHelper from '@app/common/utils/deviceHelper';

@Component({
  selector: 'app-map-area-static',
  templateUrl: './map-area-static.component.html',
  styleUrls: ['./map-area-static.component.scss']
})
export class MapAreaStaticComponent implements OnInit, OnChanges {

  @Input() map: Floor;
  @Input() workplaces: Array<WorkPlaceDetail>;
  @Input() selectedParameter: string;
  @Input() workplaceReady: boolean;
  @Input() topBarHeight: number;
  @Output() toggleFullScreen = new EventEmitter<boolean>();
  DEFAULT_BUBBLE_SIZE = 25;
  DEFAULT_IMG_RATIO = 0.5;

  showWorkplaceDetail = false;
  detailPanelHeight: number;
  isMapReady = false;
  selectedWorkplace: WorkPlaceDetail;
  imgRatio = this.DEFAULT_IMG_RATIO;
  imgDefaultRatio = this.DEFAULT_IMG_RATIO;
  focusArea: object;

  constructor(
    private appConfig: AppConfig,
    private viewport: ViewportDetails,
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.map || changes.workplaces) {
      // hide detail panel when switch map
      if (this.selectedWorkplace) {
        if (!this.workplaces.find(w => w.id === this.selectedWorkplace.id )) {
          this.selectedWorkplace = null;
        }
      }
      this.checkIfShouldShowDetail();
      // prepare map data
      this.isMapReady = false;
      if (this.map && this.workplaces) {
        this.isMapReady = this.calcDefaultRatio();
      }
    }
  }

  calcDefaultRatio = (): boolean => {
    const singleWorkplace = this.workplaces.find(w => w.width > 0);
    if (singleWorkplace && singleWorkplace.width) {
      this.imgDefaultRatio = this.DEFAULT_BUBBLE_SIZE / singleWorkplace.width;
      if (this.imgRatio === this.DEFAULT_IMG_RATIO) {
        this.imgRatio = this.imgDefaultRatio;
      }
      return true;
    }
    return false;
  }

  onImgLoaded = (imgRenderRatio) => {
    if (this.imgRatio !== imgRenderRatio) {
      this.imgRatio = imgRenderRatio;
    }
  }

  toggleWorkplaceDetail = (workplace, $event: MouseEvent) => {
    $event.stopPropagation();
    if (this.selectedWorkplace && this.selectedWorkplace.id === workplace.id) {
      this.selectedWorkplace = null;
    } else {
      this.selectedWorkplace = workplace;
      this.toggleFullScreen.emit(true);
    }
    this.checkIfShouldShowDetail();
    if (this.showWorkplaceDetail) {
      setTimeout(() => {
        const target: Element = <Element> $event.target;
        if (target && target.getBoundingClientRect) {
          const clientRect = target.getBoundingClientRect();
          if (!deviceHelper.isMobile()) {
            let scrollLeft = clientRect.left;
            let scrollTop = clientRect.top;
            if (window.pageXOffset) {
              scrollLeft += window.pageXOffset;
            }
            if (window.pageYOffset) {
              scrollTop += window.pageYOffset;
            }
            this.focusSelectedWorkplace(
              scrollLeft + (clientRect.width * 0.5),
              scrollTop + (clientRect.height * 0.5)
            );
          } else {
            this.focusSelectedWorkplace(
              clientRect.left + (clientRect.width * 0.5),
              clientRect.top + (clientRect.height * 0.5)
            );
          }
        } else {
          this.focusSelectedWorkplace($event.clientX, $event.clientY);
        }
      }, 100);
    }
  }

  focusSelectedWorkplace = (x, y) => {
    if (this.topBarHeight && this.detailPanelHeight) {
      this.focusArea = {
        x,
        y,
        top: this.topBarHeight,
        bottom: this.viewport.HEIGHT - this.detailPanelHeight
      };
    }
  }

  checkIfShouldShowDetail = () => {
    this.showWorkplaceDetail = Boolean(this.selectedWorkplace && this.selectedWorkplace.id);
  }

  onClickMap = ($event) => {
    $event.stopPropagation();
    // ensure the cursor is not end on the detail panel
    if (!this.selectedWorkplace ||
    (!this.detailPanelHeight && ($event.clientY < this.viewport.HEIGHT)) ||
    (this.detailPanelHeight && ($event.clientY < this.viewport.HEIGHT - this.detailPanelHeight))) {
      if (!this.selectedWorkplace) {
        this.toggleFullScreen.emit();
      }
      this.selectedWorkplace = null;
      this.checkIfShouldShowDetail();
    }
  }

  onClickDetailPanel = ($event) => {
    $event.stopPropagation();
  }

  onDetailPanelRendered = (detailPanelHeight) => {
    if (!this.detailPanelHeight || this.detailPanelHeight < detailPanelHeight) {
      this.detailPanelHeight = detailPanelHeight;
    }
  }

  getMapFullUrl = (url) => {
    return `${this.appConfig.API_URL}/${url}`;
  }

  getWorkplaceStatus = (parameter: string, workplace: WorkPlaceDetail) => {
    let status: string = Color.DARK_GREEN;
    if (parameter && workplace && workplace.hasLocationData) {
      switch (parameter) {
        case Parameter.SOUND:
          status = workplace.sound ? workplace.sound.color : status;
          break;
        case Parameter.LIGHT:
          status = workplace.light.color ? workplace.light.color : status;
          break;
        case Parameter.TEMPERATURE:
          status = workplace.temperature.color ? workplace.temperature.color : status;
          break;
        case Parameter.HUMIDITY:
          status = workplace.humidity.color ? workplace.humidity.color : status;
          break;
        case Parameter.CO2:
          status = workplace.co2.color ? workplace.co2.color : status;
          break;
        default:
          break;
      }
    }
    return status;
  }

}
