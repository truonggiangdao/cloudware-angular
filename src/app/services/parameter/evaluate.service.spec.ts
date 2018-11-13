import { TestBed, inject } from '@angular/core/testing';

import { EvaluateService } from './evaluate.service';
import { Parameter } from '@app/common/constants/parameter';
import { Color } from '@app/common/constants/color';
import { SoundStatus } from '@app/common/constants/soundStatus';
import { LightStatus } from '@app/common/constants/lightStatus';
import { HumidityStatus } from '@app/common/constants/humidityStatus';
import { Co2Status } from '@app/common/constants/co2Status';
import { TempStatus } from '@app/common/constants/tempStats';
import { CommonStatus } from '@app/common/constants/commonStatus';

describe('EvaluateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvaluateService]
    });
  });

  it('should be created', inject([EvaluateService], (service: EvaluateService) => {
    expect(service).toBeTruthy();
  }));

  // Sound
  it('should evaluate sound correctly for Sound-Good', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.SOUND, 0);
    expect(evaluateResult.color).toBe(Color.DARK_GREEN);
    expect(evaluateResult.status).toBe(SoundStatus.GOOD);
    const evaluateResult2 = service.evaluateParameter(Parameter.SOUND, 54);
    expect(evaluateResult2.color).toBe(Color.DARK_GREEN);
    expect(evaluateResult2.status).toBe(SoundStatus.GOOD);
  }));

  it('should evaluate sound correctly for Sound-Noisier-1', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.SOUND, 55);
    expect(evaluateResult.color).toBe(Color.LIGHT_GREEN);
    expect(evaluateResult.status).toBe(SoundStatus.NOISIER);
    const evaluateResult2 = service.evaluateParameter(Parameter.SOUND, 64);
    expect(evaluateResult2.color).toBe(Color.LIGHT_GREEN);
    expect(evaluateResult2.status).toBe(SoundStatus.NOISIER);
  }));

  it('should evaluate sound correctly for Sound-Noisier-2', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.SOUND, 65);
    expect(evaluateResult.color).toBe(Color.YELLOW);
    expect(evaluateResult.status).toBe(SoundStatus.NOISIER);
    const evaluateResult2 = service.evaluateParameter(Parameter.SOUND, 74);
    expect(evaluateResult2.color).toBe(Color.YELLOW);
    expect(evaluateResult2.status).toBe(SoundStatus.NOISIER);
  }));

  it('should evaluate sound correctly for Sound-Noisier-3', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.SOUND, 75);
    expect(evaluateResult.color).toBe(Color.ORANGE);
    expect(evaluateResult.status).toBe(SoundStatus.NOISIER);
    const evaluateResult2 = service.evaluateParameter(Parameter.SOUND, 79);
    expect(evaluateResult2.color).toBe(Color.ORANGE);
    expect(evaluateResult2.status).toBe(SoundStatus.NOISIER);
  }));

  it('should evaluate sound correctly for Sound-Noisy', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.SOUND, 80);
    expect(evaluateResult.color).toBe(Color.RED);
    expect(evaluateResult.status).toBe(SoundStatus.NOISY);
  }));

  // Light
  it('should evaluate light correctly for Light-Good', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.LIGHT, 500);
    expect(evaluateResult.color).toBe(Color.DARK_GREEN);
    expect(evaluateResult.status).toBe(LightStatus.GOOD);
    const evaluateResult2 = service.evaluateParameter(Parameter.LIGHT, 999);
    expect(evaluateResult2.color).toBe(Color.DARK_GREEN);
    expect(evaluateResult2.status).toBe(LightStatus.GOOD);
  }));

  it('should evaluate Light correctly for Light-Dark', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.LIGHT, 0);
    expect(evaluateResult.color).toBe(Color.RED);
    expect(evaluateResult.status).toBe(LightStatus.DARK);
  }));

  it('should evaluate Light correctly for Light-Darker', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.LIGHT, 300);
    expect(evaluateResult.color).toBe(Color.YELLOW);
    expect(evaluateResult.status).toBe(LightStatus.DARKER);
    const evaluateResult2 = service.evaluateParameter(Parameter.LIGHT, 200);
    expect(evaluateResult2.color).toBe(Color.ORANGE);
    expect(evaluateResult2.status).toBe(LightStatus.DARKER);
  }));

  it('should evaluate Light correctly for Light-Brighter', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.LIGHT, 1000);
    expect(evaluateResult.color).toBe(Color.LIGHT_GREEN);
    expect(evaluateResult.status).toBe(LightStatus.BRIGHTER);
    const evaluateResult2 = service.evaluateParameter(Parameter.LIGHT, 4000);
    expect(evaluateResult2.color).toBe(Color.ORANGE);
    expect(evaluateResult2.status).toBe(LightStatus.BRIGHTER);
  }));

  it('should evaluate Light correctly for Light-Bright', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.LIGHT, 5000);
    expect(evaluateResult.color).toBe(Color.RED);
    expect(evaluateResult.status).toBe(LightStatus.BRIGHT);
  }));

  // Temp
  it('should evaluate Temp correctly for Temp-Good', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.TEMPERATURE, 20);
    expect(evaluateResult.color).toBe(Color.DARK_GREEN);
    expect(evaluateResult.status).toBe(TempStatus.GOOD);
    const evaluateResult2 = service.evaluateParameter(Parameter.TEMPERATURE, 21);
    expect(evaluateResult2.color).toBe(Color.DARK_GREEN);
    expect(evaluateResult2.status).toBe(TempStatus.GOOD);
  }));

  it('should evaluate Temp correctly for Temp-Cold', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.TEMPERATURE, 0);
    expect(evaluateResult.color).toBe(Color.RED);
    expect(evaluateResult.status).toBe(TempStatus.COLD);
  }));

  it('should evaluate Temp correctly for Temp-Colder', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.TEMPERATURE, 17);
    expect(evaluateResult.color).toBe(Color.ORANGE);
    expect(evaluateResult.status).toBe(TempStatus.COLDER);
    const evaluateResult2 = service.evaluateParameter(Parameter.TEMPERATURE, 18);
    expect(evaluateResult2.color).toBe(Color.YELLOW);
    expect(evaluateResult2.status).toBe(TempStatus.COLDER);
  }));

  it('should evaluate Temp correctly for Temp-Warmer', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.TEMPERATURE, 22);
    expect(evaluateResult.color).toBe(Color.LIGHT_GREEN);
    expect(evaluateResult.status).toBe(TempStatus.WARMER);
    const evaluateResult2 = service.evaluateParameter(Parameter.TEMPERATURE, 24);
    expect(evaluateResult2.color).toBe(Color.ORANGE);
    expect(evaluateResult2.status).toBe(TempStatus.WARMER);
  }));

  it('should evaluate Temp correctly for Temp-Warm', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.TEMPERATURE, 30);
    expect(evaluateResult.color).toBe(Color.RED);
    expect(evaluateResult.status).toBe(TempStatus.WARM);
  }));

  // Humidity
  it('should evaluate Humidity correctly for Humidity-Good', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.HUMIDITY, 35);
    expect(evaluateResult.color).toBe(Color.DARK_GREEN);
    expect(evaluateResult.status).toBe(HumidityStatus.GOOD);
    const evaluateResult2 = service.evaluateParameter(Parameter.HUMIDITY, 64);
    expect(evaluateResult2.color).toBe(Color.DARK_GREEN);
    expect(evaluateResult2.status).toBe(HumidityStatus.GOOD);
  }));

  it('should evaluate Humidity correctly for Humidity-Dry', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.HUMIDITY, 0);
    expect(evaluateResult.color).toBe(Color.RED);
    expect(evaluateResult.status).toBe(HumidityStatus.DRY);
  }));

  it('should evaluate Humidity correctly for Humidity-Dryer', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.HUMIDITY, 20);
    expect(evaluateResult.color).toBe(Color.ORANGE);
    expect(evaluateResult.status).toBe(HumidityStatus.DRYER);
    const evaluateResult2 = service.evaluateParameter(Parameter.HUMIDITY, 26);
    expect(evaluateResult2.color).toBe(Color.YELLOW);
    expect(evaluateResult2.status).toBe(HumidityStatus.DRYER);
  }));

  it('should evaluate Humidity correctly for Humidity-More humid', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.HUMIDITY, 66);
    expect(evaluateResult.color).toBe(Color.LIGHT_GREEN);
    expect(evaluateResult.status).toBe(HumidityStatus.MORE_HUMID);
    const evaluateResult2 = service.evaluateParameter(Parameter.HUMIDITY, 79);
    expect(evaluateResult2.color).toBe(Color.ORANGE);
    expect(evaluateResult2.status).toBe(HumidityStatus.MORE_HUMID);
  }));

  it('should evaluate Humidity correctly for Humidity-Warm', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.HUMIDITY, 90);
    expect(evaluateResult.color).toBe(Color.RED);
    expect(evaluateResult.status).toBe(HumidityStatus.HUMID);
  }));

  // Co2
  it('should evaluate Co2 correctly for Co2-Good', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.CO2, 0);
    expect(evaluateResult.color).toBe(Color.DARK_GREEN);
    expect(evaluateResult.status).toBe(Co2Status.GOOD);
    const evaluateResult2 = service.evaluateParameter(Parameter.CO2, 499);
    expect(evaluateResult2.color).toBe(Color.DARK_GREEN);
    expect(evaluateResult2.status).toBe(Co2Status.GOOD);
  }));

  it('should evaluate Co2 correctly for Co2-Stuffier', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.CO2, 900);
    expect(evaluateResult.color).toBe(Color.ORANGE);
    expect(evaluateResult.status).toBe(Co2Status.STUFFIER);
    const evaluateResult2 = service.evaluateParameter(Parameter.CO2, 800);
    expect(evaluateResult2.color).toBe(Color.YELLOW);
    expect(evaluateResult2.status).toBe(Co2Status.STUFFIER);
  }));

  it('should evaluate Co2 correctly for Co2-Stuffy', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.CO2, 1100);
    expect(evaluateResult.color).toBe(Color.RED);
    expect(evaluateResult.status).toBe(Co2Status.STUFFY);
  }));

  // Test value is null
  it('should evaluate Light correctly for Light-Invalid value is null', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.LIGHT, null);
    expect(evaluateResult.color).toBe(Color.LIGHT_GRAY);
    expect(evaluateResult.status).toBe(CommonStatus.INVALID);
  }));

  it('should evaluate Co2 correctly for Co2-Invalid value is null', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.CO2, null);
    expect(evaluateResult.color).toBe(Color.LIGHT_GRAY);
    expect(evaluateResult.status).toBe(CommonStatus.INVALID);
  }));

  it('should evaluate Humidity correctly for Humidity-Invalid value is null', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.HUMIDITY, null);
    expect(evaluateResult.color).toBe(Color.LIGHT_GRAY);
    expect(evaluateResult.status).toBe(CommonStatus.INVALID);
  }));

  it('should evaluate Temp correctly for Temp-Invalid value is null', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.TEMPERATURE, null);
    expect(evaluateResult.color).toBe(Color.LIGHT_GRAY);
    expect(evaluateResult.status).toBe(CommonStatus.INVALID);
  }));

  it('should evaluate Sound correctly for Sound-Invalid value is null', inject([EvaluateService], (service: EvaluateService) => {
    const evaluateResult = service.evaluateParameter(Parameter.SOUND, null);
    expect(evaluateResult.color).toBe(Color.LIGHT_GRAY);
    expect(evaluateResult.status).toBe(CommonStatus.INVALID);
  }));
});
