import { TestBed, inject } from '@angular/core/testing';

import { WorkPlaceService } from './workPlace.service';
import { WorkPlace } from '@app/common/classes/workPlace/WorkPlace';

describe('WorkPlaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkPlaceService]
    });
  });

  it('should be created', inject([WorkPlaceService], (service: WorkPlaceService) => {

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
    const mapLocations = [
      {
        'id': 235,
        'n': 'Office Lab - 1',
        'm': 36,
        'x': 310,
        'y': 300,
        'office': 61,
        'devices': [
          [
            16,
            480,
            4576
          ],
          [
            16,
            482,
            4578
          ],
          [
            16,
            481,
            4577
          ]
        ]
      },
      {
        'id': 236,
        'n': 'Office Lab - 2',
        'm': 36,
        'x': 310,
        'y': 900,
        'office': 62,
        'devices': [
          [
            16,
            232,
            4328
          ],
          [
            9,
            249,
            2553
          ]
        ]
      },
    {
        'id': 237,
        'n': 'Office Lab - 3',
        'm': 36,
        'x': 1050,
        'y': 500,
        'office': 63,
        'devices': [
          [
            16,
            233,
            4329
          ],
          [
            9,
            251,
            2555
          ]
        ]
      },
      {
        'id': 465,
        'n': 'Office Lab',
        'm': 36,
        'x': 730,
        'y': 600,
        'office': 70,
        'devices': [
          [
            0,
            142,
            142
          ],
          [
            10,
            55,
            2615
          ]
        ]
      }
    ];

    const results = service.getWorkPlaceDetail(mapLocations, rawData);

    expect(results.length).toBe(4);
    expect(results[1].id).toBe(236);
    expect(results[1].hasLocationData).toBe(true);

    expect(results[1].light.status).toBe('Dark');
    expect(results[1].light.color).toBe('RED');
    expect(results[1].light.name).toBe('Light');
    expect(results[1].light.value).toBe(0);

    expect(results[1].sound.status).toBe('');
    expect(results[1].sound.color).toBe('LIGHT_GRAY');
    expect(results[1].sound.name).toBe('Sound');
    expect(results[1].sound.value).toBe(null);

    expect(results[1].temperature.status).toBe('Warm');
    expect(results[1].temperature.color).toBe('RED');
    expect(results[1].temperature.name).toBe('Temperature');
    expect(results[1].temperature.value).toBe(25.5);

    expect(results[1].humidity.status).toBe('Good');
    expect(results[1].humidity.color).toBe('DARK_GREEN');
    expect(results[1].humidity.name).toBe('Humidity');
    expect(results[1].humidity.value).toBe(48);

    expect(results[1].co2.status).toBe('Stuffier');
    expect(results[1].co2.color).toBe('LIGHT_GREEN');
    expect(results[1].co2.name).toBe('CO2');
    expect(results[1].co2.value).toBe(594);

    expect(results[2].hasLocationData).toBe(true);

    expect(results[2].light.status).toBe('Dark');
    expect(results[2].light.color).toBe('RED');
    expect(results[2].light.name).toBe('Light');
    expect(results[2].light.value).toBe(0);

    expect(results[2].sound.status).toBe('');
    expect(results[2].sound.color).toBe('LIGHT_GRAY');
    expect(results[2].sound.name).toBe('Sound');
    expect(results[2].sound.value).toBe(null);

    expect(results[2].temperature.status).toBe('Warm');
    expect(results[2].temperature.color).toBe('RED');
    expect(results[2].temperature.name).toBe('Temperature');
    expect(results[2].temperature.value).toBe(25.4);

    expect(results[2].humidity.status).toBe('Good');
    expect(results[2].humidity.color).toBe('DARK_GREEN');
    expect(results[2].humidity.name).toBe('Humidity');
    expect(results[2].humidity.value).toBe(48);

    expect(results[2].co2.status).toBe('Stuffier');
    expect(results[2].co2.color).toBe('LIGHT_GREEN');
    expect(results[2].co2.name).toBe('CO2');
    expect(results[2].co2.value).toBe(594);

    expect(results[2].id).toBe(237);
    expect(results[2].x).toBe(1050);
    expect(results[2].occupied).toBe(false);
  }));

  it('should return correct type', inject([WorkPlaceService], (service: WorkPlaceService) => {
    const mapId = 36;
    const mapLocations = Array<WorkPlace>();
    mapLocations.push(new WorkPlace(1, 'office 1', 36, 23, 34, 14, [[2, 3, 5]]));
    mapLocations.push(new WorkPlace(2, 'office 2', 34, 22, 34, 13, [[2, 3, 5]]));
    mapLocations.push(new WorkPlace(3, 'office 4', 35, 24, 34, 15, [[2, 3, 5]]));
    mapLocations.push(new WorkPlace(4, 'office 3', 36, 25, 34, 16, [[2, 3, 5]]));
    mapLocations.push(new WorkPlace(5, 'office 5', 34, 26, 34, 17, [[2, 3, 5]]));
    mapLocations.push(new WorkPlace(6, 'office 6', 36, 23, 34, 18, [[2, 3, 5]]));
    const results = service.getMapLocationsByMapID(mapId, mapLocations);
    expect(results.length).toBe(3);
    expect(results[0].id).toBe(1);
    expect(results[1].id).toBe(4);
    expect(results[2].id).toBe(6);
  }));
});
