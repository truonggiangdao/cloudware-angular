import { Injectable } from '@angular/core';
import { WorkPlaceDetail } from '@app/common/classes/workPlaceDetail/WorkPlaceDetail';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  constructor() { }

  getReRoutesData = (data: Object, workPlaces: Array<WorkPlaceDetail>) => {
    const rerouteLocationIds = Object.keys(data);
    const outputData = [];

    if (rerouteLocationIds.length > 0 && workPlaces) {
      rerouteLocationIds.forEach(locationId => {
        const currentWorkplace = workPlaces.find(w => w.id === Number(locationId));
        const rerouteSensorIds = Object.keys(data[locationId]);

        rerouteSensorIds.forEach(sensorId => {
          const dataOfSensors = currentWorkplace.getDataOfSensors(Number(sensorId));
          const listLocationDepend = data[locationId][sensorId];

          listLocationDepend.forEach(dLocationId => {
            if (!outputData[dLocationId]) {
              outputData[dLocationId] = [];
            }
            if (!outputData[dLocationId][sensorId]) {
              outputData[dLocationId][sensorId] = dataOfSensors;
            }
          });
        });
      });
    }
    return outputData;
  }

  generateReRouting = (data: Object, workPlaces: Array<WorkPlaceDetail>): Array<WorkPlaceDetail> => {
    const dataReRoutes = this.getReRoutesData(data, workPlaces);
    if (dataReRoutes.length > 0) {
      for (const workPlace of workPlaces) {
        const sensorReRoutes = dataReRoutes[workPlace.id];
        if (sensorReRoutes && sensorReRoutes.length > 0) {
          sensorReRoutes.forEach((value, sensorId) => {
            workPlace.setParameterValue(sensorId, value);
          });
        }
      }
    }
    return workPlaces;
  }
}
