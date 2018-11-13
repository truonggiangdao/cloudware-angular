import {
  Component, OnInit,
  OnChanges, SimpleChanges, EventEmitter,
  Input, Output, ElementRef, ViewChild } from '@angular/core';
import { Coordinate } from '@app/common/classes/coordinate/Coordinate';
import { ViewportDetails } from '@app/common/classes/ViewportDetails';
import { preloadImage } from '@app/common/utils/imageHelper';
import { AppConfig } from '@app/common/classes/AppConfig';

@Component({
  selector: 'map-img',
  templateUrl: './map-img.component.html',
  styleUrls: ['./map-img.component.scss']
})
export class MapImgComponent implements OnInit, OnChanges {

  @Input() img: string;
  @Input() width: number;
  @Input() height: number;
  @Input() defaultRatio: number;
  @Input() focusAt: object;

  imgStyle = {
    width: 'auto',
    height: '100vh',
    top: '-10000px',
    left: '-10000px', // to ensure the img does show up on viewport when not finish calc location
    transition: 'none',
  };

  ZOOM_STEP = 0.1;
  DOUBLE_ZOOM_STEP = 0.2;
  MIN_SCALE = 1;
  MAX_SCALE = 1;

  ratio: number;
  imgRendered: boolean;
  isPanning: boolean;
  isPinching: boolean;
  curWidth: number;
  curHeight: number;
  viewportWidth: number;
  viewportHeight: number;
  scale: number;
  lastScale: number;
  theParent: HTMLElement = null;
  theContainer: HTMLElement = null;
  theImg: HTMLElement = null;
  x = 0;
  y = 0;
  lastX = 0;
  lastY = 0;

  @Output() loaded = new EventEmitter<number>();
  @ViewChild('parentContainer') parentEl: ElementRef;
  @ViewChild('imgContainer') containerEl: ElementRef;
  @ViewChild('imgElement') imgEl: ElementRef;

  constructor(private viewport: ViewportDetails, private appConfig: AppConfig) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.img) {
      this.preloadImg();
    }
    if (changes.img || changes.defaultRatio) {
      this.imgRendered = false;
      if (this.defaultRatio && this.img) {
        this.ratio = this.defaultRatio;
        this.initImgSize();
        this.onImgLoaded();
      }
    }
    if (changes.focusAt && this.focusAt && this.focusAt['x']) {
      this.makeAreaVisible(this.focusAt);
    }
  }

  makeAreaVisible = (area: object) => {
    let x = 0, y = 0;
    if (area['y'] < area['top'] + 50) {
      y = (area['top'] + 50) - area['y'];
    }
    if (area['y'] > area['bottom'] - 50) {
      y = area['bottom'] - 50 - area['y'];
    }
    const newPos = this.getWheelPosition(area['x'], area['y']);
    if (newPos.x < 50) {
      x = 50 - newPos.x;
    }
    if (newPos.x > this.viewport.WIDTH - 50) {
      x = this.viewport.WIDTH - 50 - newPos.x;
    }
    if (x !== 0 || y !== 0) {
      this.imgStyle = {...this.imgStyle,
        transition: 'all 0.3s ease-out',
      };
      this.translate(x, y);
      this.updateLastPos();
      setTimeout(() => {
        this.imgStyle = {...this.imgStyle,
          transition: 'none',
        };
      }, 300);
    }
  }

  onImgLoaded = () => {
    this.setupForInteraction();
    this.triggerLoadedEvent();
  }

  preloadImg = () => {
    if (this.img) {
      this.appConfig.SHOW_LOADING_ICON.push(this.img);
      preloadImage(this.img, this.onLoaded, this.onerror);
    }
  }

  onLoaded = () => {
    if (this.appConfig.SHOW_LOADING_ICON.indexOf(this.img) !== -1) {
      this.appConfig.SHOW_LOADING_ICON.splice(this.appConfig.SHOW_LOADING_ICON.indexOf(this.img), 1);
    }
  }

  onerror = () => {
    // this.appConfig.SHOW_LOADING_ICON.splice(this.appConfig.SHOW_LOADING_ICON.indexOf(this.img), 1);
  }

  initImgSize = () => {
    this.scaleImage(this.width * this.ratio, this.height * this.ratio);
  }

  setupForInteraction = () => {
    this.theParent = this.parentEl.nativeElement;
    this.theContainer = this.containerEl.nativeElement;
    this.theImg = this.imgEl.nativeElement;

    if (!this.theImg) {
      return;
    }
    this.disableImgEventHandlers();

    // this.curWidth = this.theImg.offsetWidth;
    // this.curHeight = this.theImg.offsetHeight;
    this.viewportWidth = this.theParent.offsetWidth;
    this.viewportHeight = this.theParent.offsetHeight;
    this.scale = this.ratio;
    this.lastScale = this.ratio;
    this.MIN_SCALE = this.viewportWidth / this.width;

    if (this.curWidth && this.curHeight) {
      this.showImageAtCenter();
    }
  }

  getWheelPosition = (x, y) => {
    const containerPos: DOMRect | ClientRect = this.theParent.getBoundingClientRect();
    return new Coordinate(x - containerPos.left, y - containerPos.top);
  }

  onMouseWheel($event: MouseWheelEvent, isFireFox: boolean = false) {
    $event.preventDefault();
    if ($event.stopImmediatePropagation) {
      $event.stopImmediatePropagation();
    }
    if ($event.stopPropagation) {
      $event.stopPropagation();
    }
    let scale = null;
    if ($event && $event.clientX && $event.clientY) {
      $event.preventDefault();
      $event.stopPropagation();
      if (isFireFox && $event.type === 'DOMMouseScroll') {
        scale = $event.detail < 0 ? (1 + this.ZOOM_STEP) : (1 - this.ZOOM_STEP);
      } else if ($event.wheelDelta !== null) {
        scale = $event.wheelDelta > 0 ? (1 + this.ZOOM_STEP) : (1 - this.ZOOM_STEP);
      }
      if (scale !== null) {
        const newPos = this.getWheelPosition($event.clientX, $event.clientY);
        this.zoomAround(scale, newPos.x, newPos.y);
      }
    }
  }

  showImageAtCenter = () => {
    const newX = ((this.viewportWidth / this.scale) - this.width) / 2;
    const newY = ((this.viewportHeight / this.scale) - this.height) / 2;
    this.moveImage(newX, newY);
    this.updateLastPos();
  }

  calcCurrentRatio = () => {
    if (this.scale !== this.ratio) {
      this.ratio = this.scale;
      this.triggerLoadedEvent();
    }
  }

  triggerLoadedEvent = () => {
    this.loaded.emit(this.ratio);
  }

  onClick = (ev) => {
    if (this.isPanning || this.isPinching) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }

  onPanStart = (ev) => {
    ev.preventDefault();
    if (!this.isPinching) {
      this.isPanning = true;
    }
  }

  onPan = (ev) => {
    if (this.isPanning) {
      this.translate(ev.deltaX, ev.deltaY);
    }
  }

  onPanEnd = () => {
    if (this.isPanning) {
      this.updateLastPos();
      setTimeout(() => {
        this.isPanning = false;
      }, 100);
    }
  }

  disableImgEventHandlers = () => {
    if (!this.theImg) {
      return;
    }
    const events = ['onclick', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover',
      'onmouseup', 'ondblclick', 'onfocus', 'onblur'];

    events.forEach((event) => {
      this.theImg[event] = () => false;
    });
  }

  restrictScale = (scale) => {
    if (scale < this.MIN_SCALE) {
      scale = this.MIN_SCALE;
    } else if (scale > this.MAX_SCALE) {
      scale = this.MAX_SCALE;
    }
    return scale;
  }

  restrictXPos = (pos, viewportDim, imgDim) => {
    if (pos > 0) {
      return 0;
    }
    const minPos = (viewportDim / this.scale) - imgDim;
    if (pos < minPos) {
      return minPos;
    }
    return pos;
  }

  restrictYPos = (pos, viewportDim, imgDim) => {
    const maxPos = (viewportDim / this.scale / 2);
    if (pos > maxPos) {
      return maxPos;
    }
    const minPos = (viewportDim / this.scale / 2) - imgDim;
    if (pos < minPos) {
      return minPos;
    }
    return pos;
  }

  updateLastPos = () => {
    this.lastX = this.x;
    this.lastY = this.y;
  }

  translate = (deltaX, deltaY) => {
    const newX = this.restrictXPos(
      this.lastX + (deltaX / this.scale),
      Math.min(this.viewportWidth, this.width),
      this.width
    );
    const newY = this.restrictYPos(
      this.lastY + (deltaY / this.scale),
      Math.min(this.viewportHeight, this.height),
      this.height
    );
    this.moveImage(newX, newY);
  }

  moveImage = (x, y) => {
    this.x = x;
    this.y = y;
    this.imgStyle = {...this.imgStyle,
      left: Math.ceil(this.x * this.scale) + 'px',
      top: Math.ceil(this.y * this.scale) + 'px',
    };
  }

  scaleImage = (width, height) => {
    this.curWidth = width;
    this.curHeight = height;

    this.imgStyle = {...this.imgStyle,
      width: Math.ceil(this.curWidth) + 'px',
      height: Math.ceil(this.curHeight) + 'px'
    };
  }

  zoom = (scaleBy) => {
    this.scale = this.restrictScale(this.lastScale * scaleBy);
    this.scaleImage(this.width * this.scale, this.height * this.scale);
    // Adjust margins to make sure that we aren't out of bounds
    this.translate(0, 0);
  }

  updateLastScale = () => {
    this.lastScale = this.scale;
  }

  zoomAround = (scaleBy, zoomX, zoomY, doNotUpdateLast = false) => {
    const oriViewPortPosition = this.calcZoomCenter(zoomX, zoomY);
    const oriImgPosition = this.calcImageZoomPosition(zoomX, zoomY);
    this.zoom(scaleBy);
    const newImgPosition = this.calcNewImgPosition(oriViewPortPosition, oriImgPosition);
    this.moveImage(newImgPosition.x, newImgPosition.y);
    this.calcCurrentRatio();

    if (!doNotUpdateLast) {
      this.updateLastScale();
      this.updateLastPos();
    }
  }

  calcZoomCenter = (x, y) => {
    return new Coordinate(
      x / this.viewportWidth,
      y / this.viewportHeight
    );
  }

  calcImageZoomPosition = (x, y) => {
    const currentX = this.x * this.scale;
    const currentY = this.y * this.scale;
    return new Coordinate(
      (x - currentX) / this.curWidth,
      (y - currentY) / this.curHeight
    );
  }

  calcNewImgPosition = (oriViewPortPos: Coordinate, oriImgPos: Coordinate) => {
    const newImgX = this.curWidth * oriImgPos.x;
    const newImgY = this.curHeight * oriImgPos.y;
    const vpX     = this.viewportWidth * oriViewPortPos.x;
    const vpY     = this.viewportHeight * oriViewPortPos.y;

    return new Coordinate(
      (vpX - newImgX) / this.scale,
      (vpY - newImgY) / this.scale
    );
  }

  onPinchStart = () => {
    this.isPinching = true;
  }

  onPinch = (e) => {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (this.isPinching) {
      // this.translate(e.deltaX, e.deltaY);
      this.zoomAround(e.scale, e.center.x, e.center.y, true);
    }
  }

  onPinchEnd = () => {
    // if (this.isPinching) {
      this.updateLastScale();
      this.updateLastPos();
      setTimeout(() => {
        this.isPinching = false;
      }, 100);
    // }
  }

  onGestureStart = () => {
  }

  onGestureChange = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  }

  onGestureEnd = () => {
  }

  onDoubletap = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
  }
}
