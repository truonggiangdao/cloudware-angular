import { Injectable } from '@angular/core';
import { HttpService } from '@app/services/http.service';
import { HttpClient } from '@angular/common/http';
import { getCurrentDateString } from '@app/common/utils/dateHelper';
import { UrlService } from '@app/services/url.service';
import { AppConfig } from '@app/common/classes/AppConfig';
import { Location } from '@app/common/classes/location/Location';
import { Maps } from '@app/common/classes/floor/Maps';
import { MapLocations } from '@app/common/classes/workPlace/MapLocations';
import { MapOffices } from '@app/common/classes/office/MapOffices';
import { WorkPlaceDetailApiData } from '@app/common/classes/workPlaceDetail/WorkPlaceDetailApiData';
import { MapLocationRoutes } from '@app/common/classes/routes/MapLocationRoutes';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  http: HttpClient;

  constructor(
    httpService: HttpService,
    private urlService: UrlService,
    private appConfig: AppConfig,
  ) {
    this.http = httpService.getService();
  }

  /**
    * Get all location
    * @returns {Object}
    */
  getLocations () {
    return this.http.get<Location>(this.urlService.getUrl(this.appConfig.LOCATION));
  }

  /**
    * Get all floors
    * @returns {Object}
    */
  getFloors () {
    return this.http.get<Maps>(this.urlService.getUrl(this.appConfig.FLOOR));
  }

  /**
    * Get all floors by id
    * @param param number
    * @returns {Object}
    */
  getFloorByLocationID (param) {
    const url = this.urlService.getUrl(this.appConfig.FLOOR) + '?area=' + param;
    return this.http.get<Maps>(url);
  }

  /**
    * Get all map locations
    * @returns {Object}
    */
  getMapLocations () {
    return this.http.get<MapLocations>(this.urlService.getUrl(this.appConfig.MAP_LOCATION));
  }

  /**
    * Get all map location by map id
    * @param map number
    * @returns {Object}
    */
  getMapLocationsByMapId (map) {
    const url = this.urlService.getUrl(this.appConfig.MAP_LOCATION) + '?map=' + map;
    return this.http.get<MapLocations>(url);
  }

  /**
    * Get all map offices by map id
    * @param mapId number
    * @returns {Object}
    */
  getMapOfficesByMapId (mapId: number) {
    const url = this.urlService.getUrl(this.appConfig.OFFICE) + '?map=' + mapId;
    return this.http.get<MapOffices>(url);
  }

  /**
    * Get all map location routes by map id
    * @param mapId number
    * @returns {Object}
    */
  getMaplocationRoutesByMapId (mapId: number) {
    const url = this.urlService.getUrl(this.appConfig.MAP_LOCATION_ROUTES) + '?map=' + mapId;
    return this.http.get<MapLocationRoutes>(url);
  }

  /**
    * Get all map location data by devicetype, location and date
    * @param location string
    * @returns {Object}
    */
  getMapLocationData(location) {
    const url = this.urlService.getUrl(this.appConfig.MAP_LOCATION_DATA) + '?devicetype=9&locations='
    + location + '&date=' + getCurrentDateString();
    return this.http.get<WorkPlaceDetailApiData>(url);
  }

}
