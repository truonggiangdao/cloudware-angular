import { ParameterDetail } from '@app/common/classes/workPlaceDetail/ParameterDetail';
import { WorkPlaceDetailApiData } from '@app/common/classes/workPlaceDetail/WorkPlaceDetailApiData';
import { SensorType } from '@app/common/constants/sensorType';
import { Sensorindice } from '@app/common/classes/workPlaceDetail/Sensorindice';

export class WorkPlaceDetail {
  id: number;
  mapId: number;
  officeId: number;
  name: string;
  hasLocationData: boolean; // if have location device for this id => true
  occupied: boolean; // free: [null/0] => false // occupied: [> 0] => true
  x: number;
  y: number;
  width: number;
  // height: number; // not use for now because shape data from api only have width dimension
  sound: ParameterDetail;
  light: ParameterDetail;
  temperature: ParameterDetail;
  humidity: ParameterDetail;
  co2: ParameterDetail;

  constructor (
    id: number,
    mapId: number,
    officeId: number,
    name: string,
    x: number,
    y: number,
    mapLocationsData: WorkPlaceDetailApiData = null
  ) {
    this.id = id;
    this.mapId = mapId;
    this.officeId = officeId;
    this.name = name;
    this.x = x;
    this.y = y;

    if (mapLocationsData) {
        this.setWorkPlaceData(mapLocationsData);
    }
  }

  /**
  * Get Parammeter detail
  * @param mapLocationsData Object
  * @returns {Object}
  */
  setWorkPlaceData = (mapLocationsData: WorkPlaceDetailApiData) => {
    this.hasLocationData = false;
    this.occupied = false;
    if (mapLocationsData &&
      mapLocationsData.DEVICETYPES &&
      mapLocationsData.DEVICETYPES[0]) {

      const deviceId = mapLocationsData.DEVICETYPES[0];
      const locationData          = mapLocationsData[deviceId].DATA.slice();
      const locationDevices       = mapLocationsData.LOCATIONDEVICES;
      const locationSensorType    = mapLocationsData[deviceId].SENSORINDICES;
      const locationDataReverse   = locationData.slice().reverse();
      let indexSensor             = 0;
      let indexLocation;

      if (locationSensorType) {
        indexSensor     = locationSensorType[SensorType.OccupanceERS];
        indexLocation   = locationSensorType.L;
      }

      if (locationDevices.length > 0) {
        for ( let indexDevices = 0; indexDevices <= locationDevices.length - 1; indexDevices++) {
          if (locationDataReverse) {
            // Check locationDevices in mapLocation id
            if (this.id === locationDevices[indexDevices][0]) {
              const locationDataByIndex = locationDataReverse.find(x => x[indexLocation] === indexDevices);
              // Check free: [null/0] => false // occupied: [> 0] => true
              if (locationDataByIndex[indexSensor] > 0) {
                this.occupied = true;
              }
              this.hasLocationData = true;
              // Function get param sound, light, ...
              this.sound          = this.getParammeterDetail(SensorType.Sound, locationSensorType, locationDataByIndex);
              this.light          = this.getParammeterDetail(SensorType.Light, locationSensorType, locationDataByIndex);
              this.temperature    = this.getParammeterDetail(SensorType.Temperature, locationSensorType, locationDataByIndex);
              this.humidity       = this.getParammeterDetail(SensorType.Humidity, locationSensorType, locationDataByIndex);
              this.co2            = this.getParammeterDetail(SensorType.CO2, locationSensorType, locationDataByIndex);
              break;
            }
          }
        }
      }
    }
    return this;
  }

  /**
  * Get Parammeter detail
  * @param type SensorType
  * @param locationSensorType Object
  * @param locationData Array
  * @returns {Object}
  */
  getParammeterDetail = (type: SensorType, locationSensorType: Sensorindice, locationData: Array<number>): ParameterDetail => {
    let value = 0;
    if (locationSensorType) {
      const indexSensor = locationSensorType[type];
      value = locationData[indexSensor];
    }
    return new ParameterDetail(type, value);
  }

  /**
   * Set parameter data
   */
  setParameterValue = (type, value) => {
    switch (type) {
      // set Sensor Lignt
      case SensorType.Light:
        this.light = new ParameterDetail(type, value);
        break;
      // set Sensor Sound
      case SensorType.Sound:
        this.sound = new ParameterDetail(type, value);
        break;
      // set Sensor Hummidity
      case SensorType.Humidity:
        this.humidity = new ParameterDetail(type, value);
        break;
      // set Sensor CO2
      case SensorType.CO2:
        this.co2 = new ParameterDetail(type, value);
        break;
      // set Sensor Temperature
      case SensorType.Temperature:
        this.temperature = new ParameterDetail(type, value);
        break;
      // set Sensor Occupan
      case SensorType.OccupanceERS:
        this.occupied = value;
        break;
    }
  }

  /**
   * set shape data for workplace
   */
  setShapeData = (shapes: Array<Array<number>>) => {
    if (shapes &&
      shapes.length === 2 &&
      shapes[0].length === 2 &&
      shapes[1].length === 2
    ) {
      this.width = shapes[1][0] - shapes[0][0];
    }
  }

  /**
   * Get sensor data
   */
  getDataOfSensors = (sensorId: Number) => {
    let dataOfSensor;
    switch (sensorId) {
      // Get Sensor Lignt
      case SensorType.Light:
        dataOfSensor = this.light.value;
        break;
      // Get Sensor Sound
      case SensorType.Sound:
        dataOfSensor = this.sound.value;
        break;
      // Get Sensor Hummidity
      case SensorType.Humidity:
        dataOfSensor = this.humidity.value;
        break;
      // Get Sensor CO2
      case SensorType.CO2:
        dataOfSensor = this.co2.value;
        break;
      // Get Sensor Temperature
      case SensorType.Temperature:
        dataOfSensor = this.temperature.value;
        break;
      // Get Sensor OccupanceERS
      case SensorType.OccupanceERS:
        dataOfSensor = this.occupied;
        break;
    }
    return dataOfSensor;
  }
}
