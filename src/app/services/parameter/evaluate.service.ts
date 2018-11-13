import { Injectable } from '@angular/core';
import { Parameter } from '@app/common/constants/parameter';
import { SoundStatus } from '@app/common/constants/soundStatus';
import { ParameterEvaluation } from '@app/common/classes/parameter/ParameterEvaluation';
import { Color } from '@app/common/constants/color';
import { TempStatus } from '@app/common/constants/tempStats';
import { HumidityStatus } from '@app/common/constants/humidityStatus';
import { Co2Status } from '@app/common/constants/co2Status';
import { LightStatus } from '@app/common/constants/lightStatus';
import { CommonStatus } from '@app/common/constants/commonStatus';

export const evaluateParameterByType = (type, value: number): ParameterEvaluation => {
  let evaluationResult = new ParameterEvaluation();
  if (value ===  null) {
    evaluationResult.color = Color.LIGHT_GRAY;
    evaluationResult.status = CommonStatus.INVALID;
  } else {
    switch (type) {
      case Parameter.SOUND:
        evaluationResult = evaluateParameterSound(value);
        break;
      case Parameter.LIGHT:
        evaluationResult = evaluateParameterLigth(value);
        break;
      case Parameter.TEMPERATURE:
        evaluationResult = evaluateParameterTemperature(value);
        break;
      case Parameter.HUMIDITY:
        evaluationResult = evaluateParameterHumidity(value);
        break;
      case Parameter.CO2:
        evaluationResult = evaluateParameterCO2(value);
        break;
    }
  }
  return evaluationResult;
};

/**
 * Get status and color sound
 * @param value number
 * @returns {Object}
 */
export const evaluateParameterSound = (value: number): ParameterEvaluation => {
  const evaluationResult = new ParameterEvaluation();
  if (value < 55) {
    evaluationResult.color = Color.DARK_GREEN;
    evaluationResult.status = SoundStatus.GOOD;
  } else if (value >= 55 && value < 65) {
    evaluationResult.color = Color.LIGHT_GREEN;
    evaluationResult.status = SoundStatus.NOISIER;
  } else if (value >= 65 && value < 75) {
    evaluationResult.color = Color.YELLOW;
    evaluationResult.status = SoundStatus.NOISIER;
  } else if (value >= 75 && value < 80) {
    evaluationResult.color = Color.ORANGE;
    evaluationResult.status = SoundStatus.NOISIER;
  } else {
    evaluationResult.color = Color.RED;
    evaluationResult.status = SoundStatus.NOISY;
  }
  return evaluationResult;
};

/**
 * Get status and color ligth
 * @param value number
 * @returns {Object}
 */
export const evaluateParameterLigth = (value: number): ParameterEvaluation => {
  const evaluationResult = new ParameterEvaluation();
  if (value < 200) {
    evaluationResult.color = Color.RED;
    evaluationResult.status = LightStatus.DARK;
  } else if (value >= 200 && value < 300) {
    evaluationResult.color = Color.ORANGE;
    evaluationResult.status = LightStatus.DARKER;
  } else if (value >= 300 && value < 400) {
    evaluationResult.color = Color.YELLOW;
    evaluationResult.status = LightStatus.DARKER;
  } else if (value >= 400 && value < 500) {
    evaluationResult.color = Color.LIGHT_GREEN;
    evaluationResult.status = LightStatus.DARKER;
  } else if (value >= 500 && value < 1000) {
    evaluationResult.color = Color.DARK_GREEN;
    evaluationResult.status = LightStatus.GOOD;
  } else if (value >= 1000 && value < 2000) {
    evaluationResult.color = Color.LIGHT_GREEN;
    evaluationResult.status = LightStatus.BRIGHTER;
  } else if (value >= 2000 && value < 3500) {
    evaluationResult.color = Color.YELLOW;
    evaluationResult.status = LightStatus.BRIGHTER;
  } else if (value >= 3500 && value < 5000) {
    evaluationResult.color = Color.ORANGE;
    evaluationResult.status = LightStatus.BRIGHTER;
  } else {
    evaluationResult.color = Color.RED;
    evaluationResult.status = LightStatus.BRIGHT;
  }
  return evaluationResult;
};

/**
 * Get status and color temperature
 * @param value number
 * @returns {Object}
 */
export const evaluateParameterTemperature = (value: number): ParameterEvaluation => {
  const evaluationResult = new ParameterEvaluation();
  if (value < 17) {
    evaluationResult.color = Color.RED;
    evaluationResult.status = TempStatus.COLD;
  } else if (value >= 17 && value < 18) {
    evaluationResult.color = Color.ORANGE;
    evaluationResult.status = TempStatus.COLDER;
  } else if (value >= 18 && value < 19) {
    evaluationResult.color = Color.YELLOW;
    evaluationResult.status = TempStatus.COLDER;
  } else if (value >= 19 && value < 20) {
    evaluationResult.color = Color.LIGHT_GREEN;
    evaluationResult.status = TempStatus.COLDER;
  } else if (value >= 20 && value < 22) {
    evaluationResult.color = Color.DARK_GREEN;
    evaluationResult.status = TempStatus.GOOD;
  } else if (value >= 22 && value < 23) {
    evaluationResult.color = Color.LIGHT_GREEN;
    evaluationResult.status = TempStatus.WARMER;
  } else if (value >= 23 && value < 24) {
    evaluationResult.color = Color.YELLOW;
    evaluationResult.status = TempStatus.WARMER;
  } else if (value >= 24 && value < 25) {
    evaluationResult.color = Color.ORANGE;
    evaluationResult.status = TempStatus.WARMER;
  } else {
    evaluationResult.color = Color.RED;
    evaluationResult.status = TempStatus.WARM;
  }
  return evaluationResult;
};

/**
 * Get status and color humidity
 * @param value number
 * @returns {Object}
 */
export const evaluateParameterHumidity = (value: number): ParameterEvaluation => {
  const evaluationResult = new ParameterEvaluation();
  if (value < 20) {
    evaluationResult.color = Color.RED;
    evaluationResult.status = HumidityStatus.DRY;
  } else if (value >= 20 && value < 25) {
    evaluationResult.color = Color.ORANGE;
    evaluationResult.status = HumidityStatus.DRYER;
  } else if (value >= 25 && value < 30) {
    evaluationResult.color = Color.YELLOW;
    evaluationResult.status = HumidityStatus.DRYER;
  } else if (value >= 30 && value < 35) {
    evaluationResult.color = Color.LIGHT_GREEN;
    evaluationResult.status = HumidityStatus.DRYER;
  } else if (value >= 35 && value < 65) {
    evaluationResult.color = Color.DARK_GREEN;
    evaluationResult.status = HumidityStatus.GOOD;
  } else if (value >= 65 && value < 70) {
    evaluationResult.color = Color.LIGHT_GREEN;
    evaluationResult.status = HumidityStatus.MORE_HUMID;
  } else if (value >= 70 && value < 75) {
    evaluationResult.color = Color.YELLOW;
    evaluationResult.status = HumidityStatus.MORE_HUMID;
  } else if (value >= 75 && value < 80) {
    evaluationResult.color = Color.ORANGE;
    evaluationResult.status = HumidityStatus.MORE_HUMID;
  } else {
    evaluationResult.color = Color.RED;
    evaluationResult.status = HumidityStatus.HUMID;
  }
  return evaluationResult;
};

/**
 * Get status and color co2
 * @param value number
 * @returns {Object}
 */
export const evaluateParameterCO2 = (value: number): ParameterEvaluation => {
  const evaluationResult = new ParameterEvaluation();
  if (value < 500) {
    evaluationResult.color = Color.DARK_GREEN;
    evaluationResult.status = Co2Status.GOOD;
  } else if (value >= 500 && value < 700) {
    evaluationResult.color = Color.LIGHT_GREEN;
    evaluationResult.status = Co2Status.STUFFIER;
  } else if (value >= 700 && value < 850) {
    evaluationResult.color = Color.YELLOW;
    evaluationResult.status = Co2Status.STUFFIER;
  } else if (value >= 850 && value < 1000) {
    evaluationResult.color = Color.ORANGE;
    evaluationResult.status = Co2Status.STUFFIER;
  } else {
    evaluationResult.color = Color.RED;
    evaluationResult.status = Co2Status.STUFFY;
  }
  return evaluationResult;
};

@Injectable({
  providedIn: 'root'
})
export class EvaluateService {

  constructor() { }
  evaluateParameter = evaluateParameterByType;
  evaluateSound = evaluateParameterSound;
  evaluateLigth = evaluateParameterLigth;
  evaluateTemperature = evaluateParameterTemperature;
  evaluateHumidity = evaluateParameterHumidity;
  evaluateCO2 = evaluateParameterCO2;
}
