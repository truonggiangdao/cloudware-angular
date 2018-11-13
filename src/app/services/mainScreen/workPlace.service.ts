import { Injectable } from '@angular/core';
import { WorkPlace } from '@app/common/classes/workPlace/WorkPlace';
import { WorkPlaceDetail } from '@app/common/classes/workPlaceDetail/WorkPlaceDetail';
import { WorkPlaceDetailApiData } from '@app/common/classes/workPlaceDetail/WorkPlaceDetailApiData';

@Injectable({
  providedIn: 'root'
})
export class WorkPlaceService {

  constructor() { }

  /**
    * Get all map location by map id
    * @param mapID number
    * @param mapLocations array
    * @returns {Array}
    */
  getMapLocationsByMapID = (mapID: number, mapLocations: Array<WorkPlace>): Array<WorkPlace> => {
    const mapLoacationsbyId: Array<WorkPlace> = [];
    if (mapLocations.length > 0) {
      for (let iMapLocation = 0; iMapLocation <= mapLocations.length - 1; iMapLocation++) {
        if (mapLocations[iMapLocation].m === mapID) {
          mapLoacationsbyId.push(mapLocations[iMapLocation]);
        }
      }
    }
    return mapLoacationsbyId;
  }

  /**
    * Get workPlace detail for UI
    * @param mapLocationsData Object
    * @param mapLocations array
    * @returns {Object}
    */
  getWorkPlaceDetail = (mapLocations: Array<WorkPlace>, mapLocationsData: WorkPlaceDetailApiData): Array<WorkPlaceDetail> => {

    const workPlaceDetail: Array<WorkPlaceDetail> = [];

    if (mapLocations && mapLocations.length > 0) {
      for (let iMapLocation = 0; iMapLocation <= mapLocations.length - 1; iMapLocation++) {
        // Push value to workPlace detail for UI
        workPlaceDetail.push(new WorkPlaceDetail(
          mapLocations[iMapLocation].id,
          mapLocations[iMapLocation].m,
          mapLocations[iMapLocation].office,
          mapLocations[iMapLocation].n,
          mapLocations[iMapLocation].x,
          mapLocations[iMapLocation].y,
          mapLocationsData
        ));
      }
    }
    return workPlaceDetail;
  }
}
