export class WorkPlace {
  id: number;
  n: string;
  m: number;
  x: number;
  y: number;
  office: number;
  devices: Array<Array<number>>;

  constructor (id, name, mapId, x, y, office, devices: Array<Array<number>>) {
    this.id = id;
    this.n = name;
    this.m = mapId;
    this.x = x;
    this.y = y;
    this.office = office;
    this.devices = devices;

    return this;
  }
}
