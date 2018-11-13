import { Injectable } from '@angular/core';
import { Floor } from '@app/common/classes/floor/Floor';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  constructor() { }

  /**
    * Get floors by location id
    * @param locationId number
    * @param floors Array<Floor>
    * @returns {Object}
    */
  getFloorByLocation = (locationId: number, floors: Array<Floor>): Array<Floor> => {
    const floorByLocationID: Array<Floor> = [];
    if (floors.length > 0) {
      for (let iFloor = 0; iFloor <= floors.length - 1; iFloor++) {
        if (floors[iFloor].area === locationId) {
          floorByLocationID.push(floors[iFloor]);
        }
      }
    }
    return floorByLocationID;
  }

}
