import { Component, OnInit, AfterViewChecked, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { MainService } from '@app/services/mainScreen/main.service';
import { DropdownOption } from '@app/common/classes/location/DropdownOption';
import { Floor } from '@app/common/classes/floor/Floor';
import { WorkPlace } from '@app/common/classes/workPlace/WorkPlace';
import { WorkPlaceDetailApiData } from '@app/common/classes/workPlaceDetail/WorkPlaceDetailApiData';
import { WorkPlaceDetail } from '@app/common/classes/workPlaceDetail/WorkPlaceDetail';
import { Office } from '@app/common/classes/office/Office';
import { AppConfig } from '@app/common/classes/AppConfig';
import { ViewportDetails } from '@app/common/classes/ViewportDetails';
import { RoutesService } from '@app/services/mainScreen/reRoutes.service';
import { NetworkConnection } from '@app/common/classes/NetworkConnection';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewChecked, OnDestroy {

  isMorePopupShow = false;
  isTopBarVisible = true;
  topBarHeight: number;
  selectedParameter: string;

  mapLocations: Array<WorkPlace>;
  mapLocationData: WorkPlaceDetailApiData;

  mapLocationReRouting: Object;

  allLocations: Array<DropdownOption>;
  selectedLocation: DropdownOption;
  allFloors: Array<Floor>;
  selectedMap: Floor;
  mapOffices: Array<Office>;
  allWorkplaces: Array<WorkPlaceDetail>;
  workplaces: Array<WorkPlaceDetail>;
  isMapReady: boolean;
  isWorkplaceReady: boolean;
  isDataLoaded: boolean;
  refreshDataInterval = null;
  refreshingData = false;
  subscription: Subscription = null;
  stringLoadingDefault = 'loadMapData';

  constructor(
    private mainService: MainService,
    private appConfig: AppConfig,
    private changeDetectorRef: ChangeDetectorRef,
    private viewport: ViewportDetails,
    private reRoutesService: RoutesService,
    private networkConnection: NetworkConnection,
  ) {}

  ngOnInit() {
    this.getAPIData();
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.refreshDataInterval) {
      this.clearInterval();
    }
  }

  checkShowLoadingIcon = () => {
    return (this.appConfig.SHOW_LOADING_ICON && this.appConfig.SHOW_LOADING_ICON.length > 0);
  }

  checkHasNetworkConnection = () => {
    return this.networkConnection.hasNetworkConnection;
  }

  removeItemShowloadingIcon = () => {
    if (this.appConfig.SHOW_LOADING_ICON.indexOf(this.stringLoadingDefault) !== -1) {
      this.appConfig.SHOW_LOADING_ICON.splice(this.appConfig.SHOW_LOADING_ICON.indexOf(this.stringLoadingDefault), 1);
    }
  }

  getAPIData = () => {
    const getLocationRequest = this.mainService.getLocations();
    const getFloorRequest = this.mainService.getFloors();
    const getWorkplaceRequest = this.mainService.getMapLocations();
    this.appConfig.SHOW_LOADING_ICON.push(this.stringLoadingDefault);
    forkJoin([getLocationRequest, getFloorRequest, getWorkplaceRequest])
    .subscribe(responses => {
      // responses[0] is from getLocationRequest
      this.allLocations = responses[0].AREAS;
      // responses[1] is from getFloorRequest
      this.allFloors = responses[1].MAPS;
      // responses[2] is from getWorkplaceRequest
      this.processWorkplaceList(responses[2].MAPLOCATIONS);
      this.isMapReady = true;
      this.isDataLoaded = true;
      this.removeItemShowloadingIcon();
    });
    this.refreshWhenHaveNetwork();
  }

  refreshWhenHaveNetwork = () => {
    const interval = setInterval(() => {
      if (this.checkHasNetworkConnection() &&
        this.checkShowLoadingIcon() &&
        !this.isDataLoaded) {

        clearInterval(interval);
        window.location.href = '/';
      }
    }, this.appConfig.REFRESH_DURATION);
  }

  processWorkplaceList = (workplaces: Array<WorkPlace>) => {
    if (workplaces && workplaces.length > 0) {
      this.allWorkplaces = workplaces.map(w => {
        return new WorkPlaceDetail(w.id, w.m, w.office, w.n, w.x, w.y);
      });
    }
  }

  updateWorkplaceList = () => {
    this.workplaces = this.allWorkplaces.filter(w => w.mapId === this.selectedMap.id).slice();
  }

  loadWorkplaceDetails = (callback: Function) => {
    const workplaceIds = this.workplaces.map(w => w.id).join(',');
    const getMapLocationDataRequest = this.mainService.getMapLocationData(workplaceIds);
    const getMapOfficesRequest = this.mainService.getMapOfficesByMapId(this.selectedMap.id);
    const getMapLocationReRoutingRequest = this.mainService.getMaplocationRoutesByMapId(this.selectedMap.id);

    this.subscription = forkJoin([getMapLocationDataRequest, getMapOfficesRequest, getMapLocationReRoutingRequest])
    .subscribe(responses => {
      // responses[0] is from getMapLocationDataRequest
      // responses[1] is from getMapOfficesRequest
      // responses[2] is from getMapLocationReRoutingRequest
      this.mapOffices = responses[1].offices;
      this.mapWorkplaceData(responses[0], this.mapOffices);
      this.mapLocationReRouting = responses[2].routes;
      // Set workplace reroutes
      this.reRoutesService.generateReRouting(this.mapLocationReRouting, this.workplaces);
      if (callback) {
        callback();
      }
    });
  }

  mapWorkplaceData = (workplaceData: WorkPlaceDetailApiData, offices: Array<Office>) => {
    this.workplaces = this.workplaces.map((wp) => {
      const office = offices.find(o => o.id === wp.officeId);
      if (office) {
        if (office.name && office.name !== wp.name) {
          wp.name = office.name;
        }
        wp.setShapeData(office.shape);
      }
      wp.setWorkPlaceData(workplaceData);
      return wp;
    });
  }

  onChangeParameter = (newParameter) => {
    this.selectedParameter = newParameter;
  }

  onFloorChanged = (newFloor) => {
    if (!newFloor) {
      return;
    }
    if (this.selectedMap && this.selectedMap.id === newFloor.id) {
      return;
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.selectedMap = newFloor;
    this.updateWorkplaceList();
    this.isWorkplaceReady = false;
    this.appConfig.SHOW_LOADING_ICON.push(this.stringLoadingDefault);
    this.loadWorkplaceDetails(() => {
      this.isWorkplaceReady = true;
      this.removeItemShowloadingIcon();
    });
    this.setupRefreshInterval();
  }

  setupRefreshInterval = () => {
    if (!this.appConfig.REFRESH ||
      !this.appConfig.REFRESH_DURATION ||
      this.appConfig.REFRESH_DURATION <= 0) {
      return;
    }
    // clear old interval
    if (this.refreshDataInterval) {
      this.clearInterval();
    }
    this.refreshingData = false;

    // set new interval
    this.refreshDataInterval = setInterval(() => {
      if (!this.appConfig.AUTHENTICATED) {
        this.clearInterval();
        return;
      }
      if (!this.refreshingData || this.appConfig.REFRESH_DURATION >= 10000) {
        this.refreshingData = true;
        this.loadWorkplaceDetails(() => {
          this.isWorkplaceReady = true;
          this.refreshingData = false;
          if (this.checkShowLoadingIcon()) {
            this.removeItemShowloadingIcon();
          }
        });
      }
    }, this.appConfig.REFRESH_DURATION);
  }

  clearInterval = () => {
    clearInterval(this.refreshDataInterval);
    this.refreshDataInterval = null;
  }

  onToggleFullScreen = (shouldShowTopBar) => {
    if (shouldShowTopBar && typeof shouldShowTopBar !== typeof undefined) {
      this.isTopBarVisible = shouldShowTopBar;
    } else {
      this.isTopBarVisible = !this.isTopBarVisible;
    }
  }

  onTopBarRendered = (topBarHeight) => {
    if (!this.topBarHeight || this.topBarHeight < topBarHeight) {
      this.topBarHeight = topBarHeight;
    }
  }
}
