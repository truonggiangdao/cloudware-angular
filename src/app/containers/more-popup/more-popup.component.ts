import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { TokenService } from '@app/services/token.service';
import { Router } from '@angular/router';
import { MorePopupDetail } from '@app/common/classes/morePopup/MorePopupDetail';
import { MoreService } from '@app/services/mainScreen/more.service';
import { MapService } from '@app/services/mainScreen/map.service';
import { ViewportDetails } from '@app/common/classes/ViewportDetails';
import { AppConfig } from '@app/common/classes/AppConfig';

@Component({
  selector: 'app-more-popup',
  templateUrl: './more-popup.component.html',
  styleUrls: ['./more-popup.component.scss']
})
export class MorePopupComponent implements OnInit, OnChanges {

  moreContents: Array<MorePopupDetail>;
  heightStyle = {
    height: '72vh',
  };
  paddingPopup = 60;

  @Input() visible: boolean;
  @Output() close = new EventEmitter<boolean>();
  @ViewChild('popHeader') popHeader: ElementRef;
  @ViewChild('popFooter') popFooter: ElementRef;

  scrollInitialized = false;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private mapService: MapService,
    private moreService: MoreService,
    private viewport: ViewportDetails,
    private appConfig: AppConfig,
  ) { }

  ngOnInit() {
    this.getApiMoreContent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.visible && this.visible && !this.scrollInitialized) {
      setTimeout(() => {
        this.setHeightScroll();
      }, 10);
      this.scrollInitialized = true;
    }
  }

  setHeightScroll = () => {
    const heightDevice = this.viewport.HEIGHT;
    const heightPopHeader = this.popHeader.nativeElement.offsetHeight;
    const heightPopFooter = this.popFooter.nativeElement.offsetHeight;

    this.heightStyle = {...this.heightStyle,
      height: Math.ceil(heightDevice - heightPopHeader - heightPopFooter - this.paddingPopup) + 'px',
    };
  }

  getApiMoreContent = () => {
    this.moreService.getMoreContent().subscribe(responses => {
      this.moreContents = responses.DATA;
    });
  }

  isUrlImage = (value: string) => {
    return /^(https?\:)([\/|.|\w|\s|-])*\.(?:png|PNG|JPG|jpg|JPEG|jpeg)$/.test(value);
  }

  onClose = () => {
    this.close.emit();
  }

  onClickPopup = ($event) => {
    $event.stopPropagation();
  }

  onClickOut = () => {
    this.onClose();
  }

  logout = () => {
    this.tokenService.clearToken();
    this.mapService.clearMapSelection();
    this.appConfig.AUTHENTICATED = false;
    this.goToLogin();
  }

  goToLogin = () => {
    this.router.navigate(['/login']);
  }

}
