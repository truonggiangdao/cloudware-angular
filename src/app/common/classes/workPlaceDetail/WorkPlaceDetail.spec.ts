import { WorkPlaceDetail } from '@app/common/classes/workPlaceDetail/WorkPlaceDetail';

describe('WorkPlaceDetail', () => {

  const rawData = {
    '9': {
      'SENSORINDICES': {
        '257': 1,
        '2305': 2,
        '2306': 3,
        '20225': 4,
        '20226': 5,
        '22017': 6,
        '26369': 7,
        '27649': 8,
        '27650': 9,
        '28161': 10,
        '28417': 11,
        '28673': 12,
        'S': 0,
        'L': 13
      },
      'DATA': [
        [
          83904,
          0,
          48,
          25.6,
          null,
          null,
          0,
          621,
          null,
          null,
          null,
          null,
          null,
          1
        ],
        [
          84204,
          0,
          48,
          25.5,
          null,
          null,
          0,
          614,
          null,
          null,
          null,
          null,
          null,
          1
        ],
        [
          84504,
          0,
          48,
          25.5,
          null,
          null,
          0,
          594,
          null,
          null,
          null,
          null,
          null,
          1
        ],
        [
          84804,
          0,
          48,
          25.5,
          null,
          null,
          0,
          603,
          null,
          null,
          null,
          null,
          null,
          1
        ],
        [
          85104,
          0,
          48,
          25.5,
          null,
          null,
          0,
          614,
          null,
          null,
          null,
          null,
          null,
          1
        ],
        [
          85404,
          0,
          48,
          25.5,
          null,
          null,
          0,
          623,
          null,
          null,
          null,
          null,
          null,
          1
        ],
        [
          85704,
          0,
          48,
          25.5,
          null,
          null,
          0,
          605,
          null,
          null,
          null,
          null,
          null,
          1
        ],
        [
          86004,
          0,
          48,
          25.5,
          null,
          null,
          0,
          594,
          null,
          null,
          null,
          null,
          null,
          0
        ],
        [
          86304,
          0,
          48,
          25.4,
          null,
          null,
          0,
          594,
          null,
          null,
          null,
          null,
          null,
          1
        ]
      ]
    },
    'DATE': '20180813',
    'LOCATIONDEVICES': [
      [
        236,
        9,
        249
      ],
      [
        237,
        9,
        251
      ]
    ],
    'DEVICETYPES': [
      '9'
    ]
  };

  it('should be created correctly for id 236', () => {
    const workPlaceDetail = new WorkPlaceDetail(236, 36, 61, 'Office Lab - 2', 310, 900, rawData);
    expect(workPlaceDetail.id).toBe(236);
    expect(workPlaceDetail.hasLocationData).toBe(true);

    expect(workPlaceDetail.light.status).toBe('Dark');
    expect(workPlaceDetail.light.color).toBe('RED');
    expect(workPlaceDetail.light.name).toBe('Light');
    expect(workPlaceDetail.light.value).toBe(0);

    expect(workPlaceDetail.sound.status).toBe('');
    expect(workPlaceDetail.sound.color).toBe('LIGHT_GRAY');
    expect(workPlaceDetail.sound.name).toBe('Sound');
    expect(workPlaceDetail.sound.value).toBe(null);

    expect(workPlaceDetail.temperature.status).toBe('Warm');
    expect(workPlaceDetail.temperature.color).toBe('RED');
    expect(workPlaceDetail.temperature.name).toBe('Temperature');
    expect(workPlaceDetail.temperature.value).toBe(25.5);

    expect(workPlaceDetail.humidity.status).toBe('Good');
    expect(workPlaceDetail.humidity.color).toBe('DARK_GREEN');
    expect(workPlaceDetail.humidity.name).toBe('Humidity');
    expect(workPlaceDetail.humidity.value).toBe(48);

    expect(workPlaceDetail.co2.status).toBe('Stuffier');
    expect(workPlaceDetail.co2.color).toBe('LIGHT_GREEN');
    expect(workPlaceDetail.co2.name).toBe('CO2');
    expect(workPlaceDetail.co2.value).toBe(594);
  });

  it('should be created correctly for id 237', () => {
    const workPlaceDetail = new WorkPlaceDetail(237, 36, 24, 'Office Lab - 3', 1050, 500, rawData);
    expect(workPlaceDetail.id).toBe(237);
    expect(workPlaceDetail.hasLocationData).toBe(true);

    expect(workPlaceDetail.light.status).toBe('Dark');
    expect(workPlaceDetail.light.color).toBe('RED');
    expect(workPlaceDetail.light.name).toBe('Light');
    expect(workPlaceDetail.light.value).toBe(0);

    expect(workPlaceDetail.sound.status).toBe('');
    expect(workPlaceDetail.sound.color).toBe('LIGHT_GRAY');
    expect(workPlaceDetail.sound.name).toBe('Sound');
    expect(workPlaceDetail.sound.value).toBe(null);

    expect(workPlaceDetail.temperature.status).toBe('Warm');
    expect(workPlaceDetail.temperature.color).toBe('RED');
    expect(workPlaceDetail.temperature.name).toBe('Temperature');
    expect(workPlaceDetail.temperature.value).toBe(25.4);

    expect(workPlaceDetail.humidity.status).toBe('Good');
    expect(workPlaceDetail.humidity.color).toBe('DARK_GREEN');
    expect(workPlaceDetail.humidity.name).toBe('Humidity');
    expect(workPlaceDetail.humidity.value).toBe(48);

    expect(workPlaceDetail.co2.status).toBe('Stuffier');
    expect(workPlaceDetail.co2.color).toBe('LIGHT_GREEN');
    expect(workPlaceDetail.co2.name).toBe('CO2');
    expect(workPlaceDetail.co2.value).toBe(594);
  });

  it('should be created correctly for id 235', () => {
    const workPlaceDetail = new WorkPlaceDetail(235, 36, 61, 'Office Lab - 4', 1050, 500, rawData);
    expect(workPlaceDetail.id).toBe(235);
    expect(workPlaceDetail.hasLocationData).toBe(false);
    expect(workPlaceDetail.occupied).toBe(false);
  });

});
