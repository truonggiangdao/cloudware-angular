import { evaluateParameterByType } from '@app/services/parameter/evaluate.service';
import { SensorType } from '@app/common/constants/sensorType';
import { Parameter } from '@app/common/constants/parameter';

export class ParameterDetail {
  name: string;
  sensorType: number;
  value: number;
  status: string;
  color: string;

  constructor (sensorType: number, value: number) {
    this.sensorType = sensorType;
    this.value = value;
    this.name = this.getParameterNameByType(sensorType);
    const evaluateResult = evaluateParameterByType(this.name, this.value);
    this.status = evaluateResult.status;
    this.color = evaluateResult.color;
  }

  /**
  * Get Parammeter Name by type
  * @param type number
  * @returns {string}
  */
  getParameterNameByType = (type) => {
    let parameterName = '';
    switch (type) {
      case SensorType.Sound:
        parameterName = Parameter.SOUND;
        break;
      case SensorType.Light:
        parameterName = Parameter.LIGHT;
        break;
      case SensorType.Temperature:
        parameterName = Parameter.TEMPERATURE;
        break;
      case SensorType.Humidity:
        parameterName = Parameter.HUMIDITY;
        break;
      case SensorType.CO2:
        parameterName = Parameter.CO2;
        break;
    }
    return parameterName;
  }
}
