import { ParameterDetail } from './ParameterDetail';
import { SensorType } from '@app/common/constants/sensorType';
import { Parameter } from '@app/common/constants/parameter';
import { Color } from '@app/common/constants/color';
import { SoundStatus } from '@app/common/constants/soundStatus';
import { LightStatus } from '@app/common/constants/lightStatus';
import { TempStatus } from '@app/common/constants/tempStats';
import { HumidityStatus } from '@app/common/constants/humidityStatus';
import { Co2Status } from '@app/common/constants/co2Status';

describe('ParameterDetail', () => {

  it('should be created correctly for sound', () => {
    const parameterDetailTest = new ParameterDetail(SensorType.Sound, 0);
    expect(parameterDetailTest.name).toBe(Parameter.SOUND);
    expect(parameterDetailTest.value).toBe(0);
    expect(parameterDetailTest.color).toBe(Color.DARK_GREEN);
    expect(parameterDetailTest.status).toBe(SoundStatus.GOOD);
  });

  it('should be created correctly for Ligth', () => {
    const parameterDetailTest = new ParameterDetail(SensorType.Light, 300);
    expect(parameterDetailTest.name).toBe(Parameter.LIGHT);
    expect(parameterDetailTest.value).toBe(300);
    expect(parameterDetailTest.color).toBe(Color.YELLOW);
    expect(parameterDetailTest.status).toBe(LightStatus.DARKER);
  });

  it('should be created  for Temperature', () => {
    const parameterDetailTest = new ParameterDetail(SensorType.Temperature, 0);
    expect(parameterDetailTest.name).toBe(Parameter.TEMPERATURE);
    expect(parameterDetailTest.value).toBe(0);
    expect(parameterDetailTest.color).toBe(Color.RED);
    expect(parameterDetailTest.status).toBe(TempStatus.COLD);
  });

  it('should be created correctly for Humidity', () => {
    const parameterDetailTest = new ParameterDetail(SensorType.Humidity, 20);
    expect(parameterDetailTest.name).toBe(Parameter.HUMIDITY);
    expect(parameterDetailTest.value).toBe(20);
    expect(parameterDetailTest.color).toBe(Color.ORANGE);
    expect(parameterDetailTest.status).toBe(HumidityStatus.DRYER);
  });

  it('should be created correctly for CO2', () => {
    const parameterDetailTest = new ParameterDetail(SensorType.CO2, 0);
    expect(parameterDetailTest.name).toBe(Parameter.CO2);
    expect(parameterDetailTest.value).toBe(0);
    expect(parameterDetailTest.color).toBe(Color.DARK_GREEN);
    expect(parameterDetailTest.status).toBe(Co2Status.GOOD);
  });
});
