import { Injectable } from '@angular/core';
import { Cookie } from '@app/services/storage/cookie';
import { MapSelection } from '@app/common/classes/cookie/MapSelection';
import { Parameter } from '@app/common/constants/parameter';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  dropdownCookieKey = 'map_selection';
  parameterCookieKey = 'map_parameter';

  constructor(private cookie: Cookie) { }

  getMapSelection(): MapSelection {
    const dropdownCookieValue: string = this.cookie.get(this.dropdownCookieKey);
    const selection = new MapSelection();
    if (dropdownCookieValue && dropdownCookieValue.indexOf(',') !== -1) {
      const values = dropdownCookieValue.split(',');
      selection.locationId = Number(values[0]);
      selection.floorId = Number(values[1]);
    }
    const parameterCookieValue: string = this.cookie.get(this.parameterCookieKey);
    if (parameterCookieValue) {
      if ([
        String(Parameter.SOUND),
        String(Parameter.LIGHT),
        String(Parameter.TEMPERATURE),
        String(Parameter.HUMIDITY),
        String(Parameter.CO2)
      ].indexOf(parameterCookieValue) !== -1) {
        selection.parameter = parameterCookieValue;
      }
    }
    return selection;
  }

  setMapSelection(selection: MapSelection): boolean {
    let result1, result2 = false;
    if (selection) {
      result1 = result2 = true;
      if (selection.locationId && selection.floorId) {
        result1 = Boolean(
          this.cookie.set(
            this.dropdownCookieKey,
            `${selection.locationId},${selection.floorId}`
          )
        );
      }
      if (selection.parameter) {
        result2 = Boolean(
          this.cookie.set(
            this.parameterCookieKey,
            selection.parameter
          )
        );
      }
    }
    return result1 && result2;
  }

  clearMapSelection(): void {
    this.cookie.delete(this.dropdownCookieKey);
    this.cookie.delete(this.parameterCookieKey);
  }
}
