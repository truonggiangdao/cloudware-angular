export class MapSelection {
  locationId: number;
  floorId: number;
  parameter: string;

  constructor(
    locationId: number = null,
    floorId: number = null,
    parameter: string = null
  ) {
    this.locationId = locationId;
    this.floorId = floorId;
    this.parameter = parameter;
  }
}
