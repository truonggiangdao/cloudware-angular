export class Floor {
  id: number;
  name: string;
  width: number;
  height: number;
  url: string;
  area: number;

  constructor (id, name, width, height, url, area) {
    this.id = id;
    this.name = name;
    this.width = width;
    this.height = height;
    this.url = url;
    this.area = area;

    return this;
  }
}
