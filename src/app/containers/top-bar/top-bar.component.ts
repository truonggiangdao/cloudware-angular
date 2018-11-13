import { Component, OnInit, Input, Output,
  EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Floor } from '@app/common/classes/floor/Floor';
import { FloorService } from '@app/services/mainScreen/floor.service';
import { DropdownOption } from '@app/common/classes/location/DropdownOption';
import { ParameterIconStatus } from '@app/common/classes/comfortIcon/ParameterIconStatus';
import { MapSelection } from '@app/common/classes/cookie/MapSelection';
import { MapService } from '@app/services/mainScreen/map.service';
import { AppConfig } from '@app/common/classes/AppConfig';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, OnChanges {

  @Input() locations: Array<DropdownOption>;
  @Input() floors: Array<Floor>;
  @Input() topBarVisible: boolean;
  @Output() showMorePopup = new EventEmitter<boolean>();
  @Output() changeFloor = new EventEmitter<Floor>();
  @Output() changeParameter = new EventEmitter<string>();
  @Output() rendered = new EventEmitter<number>();

  selectedLocation: DropdownOption;
  locationFloors: Array<Floor>;
  selectedFloor: Floor;
  mapSelection: MapSelection;
  locationFocused: boolean;
  floorFocused: boolean;

  iconActive: ParameterIconStatus = {
    Sound: false,
    Light: false,
    Temperature: false,
    Humidity: false,
    CO2: false,
  };

  defaultParameter: string;
  currActive: string;

  constructor(
    private floorService: FloorService,
    private mapService: MapService,
    private appConfig: AppConfig
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.locations && this.floors && this.floors.length > 0 && this.locations.length > 0) {
      this.defaultParameter = this.appConfig.DEFAULT_PARAMETER;
      this.mapSelection = this.mapService.getMapSelection();
      this.setDefaultLocation();
      this.setDefaultFloor();
      if (this.mapSelection.parameter) {
        this.onSwitchParameter(this.mapSelection.parameter);
      } else {
        this.onSwitchParameter(this.defaultParameter);
      }
    }
    if (changes.topBarVisible) {
      this.toggleDropdowns();
    }
  }

  toggleDropdowns = () => {
    this.locationDropdownFocused();
    this.floorDropdownFocused();
  }

  locationDropdownFocused = () => {
    this.floorFocused = !this.floorFocused;
  }

  floorDropdownFocused = () => {
    this.locationFocused = !this.locationFocused;
  }

  triggerRenderEvent = ($event) => {
    this.rendered.emit($event);
  }

  setDefaultLocation = () => {
    if (this.mapSelection.locationId) {
      this.selectedLocation = this.locations.find(
        location => Number(location.id) === Number(this.mapSelection.locationId)
      );
    }
    if (!this.selectedLocation) {
      this.selectedLocation = this.locations.find(l => Boolean(l.id));
      this.mapSelection.locationId = this.selectedLocation.id;
    }
  }

  setDefaultFloor = () => {
    this.updateFloorsByLocation();
    if (this.mapSelection.floorId) {
      this.onChangeFloor(this.locationFloors.find(
        floor => Number(floor.id) === Number(this.mapSelection.floorId)
      ));
    }
    if (!this.selectedFloor) {
      this.setFloorByLocation();
    }
  }

  setFloorByLocation = () => {
    this.updateFloorsByLocation();
    const newFloor = this.locationFloors.find(f => Boolean(f.id));
    this.onChangeFloor(newFloor);
  }

  updateFloorsByLocation = () => {
    this.locationFloors = this.floorService.getFloorByLocation(this.selectedLocation.id, this.floors);
  }

  rememberLastSelection = () => {
    this.mapService.setMapSelection(this.mapSelection);
  }

  onChangeLocation = (newLocation) => {
    this.selectedLocation = newLocation;
    this.mapSelection.locationId = newLocation.id;
    this.setFloorByLocation();
  }

  onChangeFloor = (newFloor) => {
    if (newFloor && newFloor.id) {
      this.selectedFloor = newFloor;
      this.mapSelection.floorId = this.selectedFloor.id;
      this.rememberLastSelection();
      this.changeFloor.emit(this.selectedFloor);
    }
  }

  onSwitchParameter = (parameter: string) => {
    if (this.iconActive[parameter] !== undefined && !this.iconActive[parameter]) {
      if (this.currActive) {
        this.iconActive[this.currActive] = false;
      }
      this.iconActive[parameter] = true;
      this.currActive = parameter;
      this.mapSelection.parameter = parameter;
      this.rememberLastSelection();
      this.changeParameter.emit(this.currActive);
    }
  }

  showPopup = () => {
    this.showMorePopup.emit();
  }

}
