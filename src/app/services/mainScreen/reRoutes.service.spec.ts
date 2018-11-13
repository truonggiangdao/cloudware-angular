import { TestBed, inject } from '@angular/core/testing';

import { RoutesService } from './reRoutes.service';
import { WorkPlaceService } from '@app/services/mainScreen/workPlace.service';

describe('ReRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesService, WorkPlaceService],
    });
  });

  it('should be created workplace re routing for OccuQ', inject([RoutesService, WorkPlaceService],
    (service: RoutesService, workPlaceService: WorkPlaceService) => {
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
                  59067,
                  1,
                  40,
                  20.6,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3499,
                  0,
                  1,
                  7
              ],
              [
                  59107,
                  32,
                  40,
                  20.4,
                  null,
                  null,
                  null,
                  396,
                  null,
                  null,
                  3632,
                  null,
                  0,
                  0
              ],
              [
                  59132,
                  1,
                  40,
                  20.5,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3484,
                  0,
                  1,
                  1
              ],
              [
                  59180,
                  194,
                  40,
                  21.4,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3524,
                  0,
                  2,
                  2
              ],
              [
                  59226,
                  6,
                  41,
                  20.5,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3478,
                  0,
                  1,
                  3
              ],
              [
                  59231,
                  299,
                  42,
                  20,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3507,
                  0,
                  0,
                  4
              ],
              [
                  59235,
                  1,
                  40,
                  20.6,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3527,
                  0,
                  0,
                  5
              ],
              [
                  59303,
                  190,
                  40,
                  21.3,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3496,
                  0,
                  0,
                  6
              ],
              [
                  59367,
                  0,
                  40,
                  20.6,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3499,
                  0,
                  0,
                  7
              ],
              [
                  59407,
                  21,
                  40,
                  20.5,
                  null,
                  null,
                  null,
                  388,
                  null,
                  null,
                  3632,
                  null,
                  0,
                  0
              ],
              [
                  59432,
                  1,
                  40,
                  20.5,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3481,
                  0,
                  1,
                  1
              ]
          ]
      },
      'DATE': '20180930',
      'LOCATIONDEVICES': [
          [
              557,
              24,
              184
          ],
          [
              553,
              24,
              210
          ],
          [
              548,
              24,
              209
          ],
          [
              550,
              24,
              205
          ],
          [
              556,
              24,
              207
          ],
          [
              549,
              24,
              224
          ],
          [
              552,
              24,
              231
          ],
          [
              547,
              24,
              246
          ]
      ],
      'DEVICETYPES': [
          '9'
      ]
    };
    const mapLocations = [
        {
            'id': 547,
            'n': 'Markant #6',
            'abbrev': 'M#6',
            'm': 63,
            'x': 1130,
            'y': 1260,
            'office': 150,
            'devices': [
                [
                    9,
                    4086,
                    40950
                ]
            ]
        },
        {
            'id': 548,
            'n': 'Markant #8',
            'abbrev': 'M#8',
            'm': 63,
            'x': 1490,
            'y': 340,
            'office': -152,
            'devices': [
                [
                    9,
                    4049,
                    40913
                ]
            ]
        },
        {
            'id': 549,
            'n': 'Markant #4',
            'abbrev': 'M#4',
            'm': 63,
            'x': 1010,
            'y': 1270,
            'office': 148,
            'devices': [
                [
                    9,
                    4064,
                    40928
                ]
            ]
        },
        {
            'id': 550,
            'n': 'Markant #2',
            'abbrev': 'M#2',
            'm': 63,
            'x': 925,
            'y': 1240,
            'office': 146,
            'devices': [
                [
                    9,
                    4045,
                    40909
                ]
            ]
        },
        {
            'id': 551,
            'n': 'Markant #1',
            'abbrev': 'M#1',
            'm': 63,
            'x': 850,
            'y': 1165,
            'office': 145,
            'devices': [
                [
                    9,
                    4051,
                    40915
                ]
            ]
        },
        {
            'id': 552,
            'n': 'Markant #10',
            'abbrev': 'M#10',
            'm': 63,
            'x': 2565,
            'y': 665,
            'office': -154,
            'devices': [
                [
                    9,
                    4071,
                    40935
                ]
            ]
        },
        {
            'id': 553,
            'n': 'Markant #5',
            'abbrev': 'M#5',
            'm': 63,
            'x': 1070,
            'y': 1170,
            'office': 149,
            'devices': [
                [
                    9,
                    4050,
                    40914
                ]
            ]
        },
        {
            'id': 554,
            'n': 'Markant #9',
            'abbrev': 'M#9',
            'm': 63,
            'x': 1830,
            'y': 490,
            'office': -153,
            'devices': []
        },
        {
            'id': 555,
            'n': 'Markant #7',
            'abbrev': 'M#7',
            'm': 63,
            'x': 1320,
            'y': 1040,
            'office': -151,
            'devices': []
        },
        {
            'id': 556,
            'n': 'Markant #3',
            'abbrev': 'M#3',
            'm': 63,
            'x': 985,
            'y': 1155,
            'office': 147,
            'devices': [
                [
                    9,
                    4047,
                    40911
                ]
            ]
        },
        {
            'id': 557,
            'n': 'Markant',
            'abbrev': 'M',
            'm': 63,
            'x': 995,
            'y': 1035,
            'office': 155,
            'devices': [
                [
                    9,
                    4024,
                    40888
                ]
            ]
        }
    ];
    const workPlaceDetails = workPlaceService.getWorkPlaceDetail(mapLocations, rawData);

    const dataRouting = {
      '557': {
          '257': [
              547,
              548,
              549,
              550,
              551,
              552,
              553,
              554,
              555,
              556
          ],
          '2305': [
              547,
              548,
              549,
              550,
              551,
              552,
              553,
              554,
              555,
              556
          ],
          '2306': [
              547,
              548,
              549,
              550,
              551,
              552,
              553,
              554,
              555,
              556
          ],
          '26369': [
              547,
              548,
              549,
              550,
              551,
              552,
              553,
              554,
              555,
              556
          ]
      }
    };

    const results = service.generateReRouting(dataRouting, workPlaceDetails);
    expect(results.length).toBe(11);
    expect(results[0].id).toBe(547);
    expect(results[0].occupied).toBe(false);

    expect(results[0].light.status).toBe('Dark');
    expect(results[0].light.color).toBe('RED');
    expect(results[0].light.name).toBe('Light');
    expect(results[0].light.value).toBe(21);

    expect(results[0].sound.status).toBe('');
    expect(results[0].sound.color).toBe('LIGHT_GRAY');
    expect(results[0].sound.name).toBe('Sound');
    expect(results[0].sound.value).toBe(null);

    expect(results[0].temperature.status).toBe('Good');
    expect(results[0].temperature.color).toBe('DARK_GREEN');
    expect(results[0].temperature.name).toBe('Temperature');
    expect(results[0].temperature.value).toBe(20.5);

    expect(results[0].humidity.status).toBe('Good');
    expect(results[0].humidity.color).toBe('DARK_GREEN');
    expect(results[0].humidity.name).toBe('Humidity');
    expect(results[0].humidity.value).toBe(40);

    expect(results[0].co2.status).toBe('Good');
    expect(results[0].co2.color).toBe('DARK_GREEN');
    expect(results[0].co2.name).toBe('CO2');
    expect(results[0].co2.value).toBe(388);


    expect(results[5].id).toBe(552);
    expect(results[5].occupied).toBe(false);

    expect(results[5].light.status).toBe('Dark');
    expect(results[5].light.color).toBe('RED');
    expect(results[5].light.name).toBe('Light');
    expect(results[5].light.value).toBe(21);

    expect(results[5].sound.status).toBe('');
    expect(results[5].sound.color).toBe('LIGHT_GRAY');
    expect(results[5].sound.name).toBe('Sound');
    expect(results[5].sound.value).toBe(null);

    expect(results[5].temperature.status).toBe('Good');
    expect(results[5].temperature.color).toBe('DARK_GREEN');
    expect(results[5].temperature.name).toBe('Temperature');
    expect(results[5].temperature.value).toBe(20.5);

    expect(results[5].humidity.status).toBe('Good');
    expect(results[5].humidity.color).toBe('DARK_GREEN');
    expect(results[5].humidity.name).toBe('Humidity');
    expect(results[5].humidity.value).toBe(40);

    expect(results[5].co2.status).toBe('Good');
    expect(results[5].co2.color).toBe('DARK_GREEN');
    expect(results[5].co2.name).toBe('CO2');
    expect(results[5].co2.value).toBe(388);


    expect(results[10].id).toBe(557);
    expect(results[10].occupied).toBe(false);

    expect(results[10].light.status).toBe('Dark');
    expect(results[10].light.color).toBe('RED');
    expect(results[10].light.name).toBe('Light');
    expect(results[10].light.value).toBe(21);

    expect(results[10].sound.status).toBe('');
    expect(results[10].sound.color).toBe('LIGHT_GRAY');
    expect(results[10].sound.name).toBe('Sound');
    expect(results[10].sound.value).toBe(null);

    expect(results[10].temperature.status).toBe('Good');
    expect(results[10].temperature.color).toBe('DARK_GREEN');
    expect(results[10].temperature.name).toBe('Temperature');
    expect(results[10].temperature.value).toBe(20.5);

    expect(results[10].humidity.status).toBe('Good');
    expect(results[10].humidity.color).toBe('DARK_GREEN');
    expect(results[10].humidity.name).toBe('Humidity');
    expect(results[10].humidity.value).toBe(40);

    expect(results[10].co2.status).toBe('Good');
    expect(results[10].co2.color).toBe('DARK_GREEN');
    expect(results[10].co2.name).toBe('CO2');
    expect(results[10].co2.value).toBe(388);


    expect(results[9].id).toBe(556);
    expect(results[9].occupied).toBe(false);

    expect(results[9].light.status).toBe('Dark');
    expect(results[9].light.color).toBe('RED');
    expect(results[9].light.name).toBe('Light');
    expect(results[9].light.value).toBe(21);

    expect(results[9].sound.status).toBe('');
    expect(results[9].sound.color).toBe('LIGHT_GRAY');
    expect(results[9].sound.name).toBe('Sound');
    expect(results[9].sound.value).toBe(null);

    expect(results[9].temperature.status).toBe('Good');
    expect(results[9].temperature.color).toBe('DARK_GREEN');
    expect(results[9].temperature.name).toBe('Temperature');
    expect(results[9].temperature.value).toBe(20.5);

    expect(results[9].humidity.status).toBe('Good');
    expect(results[9].humidity.color).toBe('DARK_GREEN');
    expect(results[9].humidity.name).toBe('Humidity');
    expect(results[9].humidity.value).toBe(40);

    expect(results[9].co2.status).toBe('Good');
    expect(results[9].co2.color).toBe('DARK_GREEN');
    expect(results[9].co2.name).toBe('CO2');
    expect(results[9].co2.value).toBe(388);
  }));

  it('should be created workplace not re routing', inject([RoutesService, WorkPlaceService],
    (service: RoutesService, workPlaceService: WorkPlaceService) => {
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
                  59067,
                  1,
                  40,
                  20.6,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3499,
                  0,
                  1,
                  7
              ],
              [
                  59107,
                  32,
                  40,
                  20.4,
                  null,
                  null,
                  null,
                  396,
                  null,
                  null,
                  3632,
                  null,
                  0,
                  0
              ],
              [
                  59132,
                  1,
                  40,
                  20.5,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3484,
                  0,
                  1,
                  1
              ],
              [
                  59180,
                  194,
                  40,
                  21.4,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3524,
                  0,
                  2,
                  2
              ],
              [
                  59226,
                  6,
                  41,
                  20.5,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3478,
                  0,
                  1,
                  3
              ],
              [
                  59231,
                  299,
                  42,
                  20,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3507,
                  0,
                  0,
                  4
              ],
              [
                  59235,
                  1,
                  40,
                  20.6,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3527,
                  0,
                  0,
                  5
              ],
              [
                  59303,
                  190,
                  40,
                  21.3,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3496,
                  0,
                  0,
                  6
              ],
              [
                  59367,
                  0,
                  40,
                  20.6,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3499,
                  0,
                  0,
                  7
              ],
              [
                  59407,
                  21,
                  40,
                  20.5,
                  null,
                  null,
                  null,
                  388,
                  null,
                  null,
                  3632,
                  null,
                  0,
                  0
              ],
              [
                  59432,
                  1,
                  40,
                  20.5,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  3481,
                  0,
                  1,
                  1
              ]
          ]
      },
      'DATE': '20180930',
      'LOCATIONDEVICES': [
          [
              557,
              24,
              184
          ],
          [
              553,
              24,
              210
          ],
          [
              548,
              24,
              209
          ],
          [
              550,
              24,
              205
          ],
          [
              556,
              24,
              207
          ],
          [
              549,
              24,
              224
          ],
          [
              552,
              24,
              231
          ],
          [
              547,
              24,
              246
          ]
      ],
      'DEVICETYPES': [
          '9'
      ]
    };
    const mapLocations = [
        {
            'id': 547,
            'n': 'Markant #6',
            'abbrev': 'M#6',
            'm': 63,
            'x': 1130,
            'y': 1260,
            'office': 150,
            'devices': [
                [
                    9,
                    4086,
                    40950
                ]
            ]
        },
        {
            'id': 548,
            'n': 'Markant #8',
            'abbrev': 'M#8',
            'm': 63,
            'x': 1490,
            'y': 340,
            'office': -152,
            'devices': [
                [
                    9,
                    4049,
                    40913
                ]
            ]
        },
        {
            'id': 549,
            'n': 'Markant #4',
            'abbrev': 'M#4',
            'm': 63,
            'x': 1010,
            'y': 1270,
            'office': 148,
            'devices': [
                [
                    9,
                    4064,
                    40928
                ]
            ]
        },
        {
            'id': 550,
            'n': 'Markant #2',
            'abbrev': 'M#2',
            'm': 63,
            'x': 925,
            'y': 1240,
            'office': 146,
            'devices': [
                [
                    9,
                    4045,
                    40909
                ]
            ]
        },
        {
            'id': 551,
            'n': 'Markant #1',
            'abbrev': 'M#1',
            'm': 63,
            'x': 850,
            'y': 1165,
            'office': 145,
            'devices': [
                [
                    9,
                    4051,
                    40915
                ]
            ]
        },
        {
            'id': 552,
            'n': 'Markant #10',
            'abbrev': 'M#10',
            'm': 63,
            'x': 2565,
            'y': 665,
            'office': -154,
            'devices': [
                [
                    9,
                    4071,
                    40935
                ]
            ]
        },
        {
            'id': 553,
            'n': 'Markant #5',
            'abbrev': 'M#5',
            'm': 63,
            'x': 1070,
            'y': 1170,
            'office': 149,
            'devices': [
                [
                    9,
                    4050,
                    40914
                ]
            ]
        },
        {
            'id': 554,
            'n': 'Markant #9',
            'abbrev': 'M#9',
            'm': 63,
            'x': 1830,
            'y': 490,
            'office': -153,
            'devices': []
        },
        {
            'id': 555,
            'n': 'Markant #7',
            'abbrev': 'M#7',
            'm': 63,
            'x': 1320,
            'y': 1040,
            'office': -151,
            'devices': []
        },
        {
            'id': 556,
            'n': 'Markant #3',
            'abbrev': 'M#3',
            'm': 63,
            'x': 985,
            'y': 1155,
            'office': 147,
            'devices': [
                [
                    9,
                    4047,
                    40911
                ]
            ]
        },
        {
            'id': 557,
            'n': 'Markant',
            'abbrev': 'M',
            'm': 63,
            'x': 995,
            'y': 1035,
            'office': 155,
            'devices': [
                [
                    9,
                    4024,
                    40888
                ]
            ]
        }
    ];
    const workPlaceDetails = workPlaceService.getWorkPlaceDetail(mapLocations, rawData);

    const dataRouting = {};

    const results = service.generateReRouting(dataRouting, workPlaceDetails);
    expect(results.length).toBe(11);
    expect(results[0].id).toBe(547);
    expect(results[0].occupied).toBe(false);

    expect(results[0].light.status).toBe('Dark');
    expect(results[0].light.color).toBe('RED');
    expect(results[0].light.name).toBe('Light');
    expect(results[0].light.value).toBe(0);

    expect(results[0].sound.status).toBe('');
    expect(results[0].sound.color).toBe('LIGHT_GRAY');
    expect(results[0].sound.name).toBe('Sound');
    expect(results[0].sound.value).toBe(null);

    expect(results[0].temperature.status).toBe('Good');
    expect(results[0].temperature.color).toBe('DARK_GREEN');
    expect(results[0].temperature.name).toBe('Temperature');
    expect(results[0].temperature.value).toBe(20.6);

    expect(results[0].humidity.status).toBe('Good');
    expect(results[0].humidity.color).toBe('DARK_GREEN');
    expect(results[0].humidity.name).toBe('Humidity');
    expect(results[0].humidity.value).toBe(40);

    expect(results[0].co2.status).toBe('');
    expect(results[0].co2.color).toBe('LIGHT_GRAY');
    expect(results[0].co2.name).toBe('CO2');
    expect(results[0].co2.value).toBe(null);


    expect(results[5].id).toBe(552);
    expect(results[5].occupied).toBe(false);

    expect(results[5].light.status).toBe('Dark');
    expect(results[5].light.color).toBe('RED');
    expect(results[5].light.name).toBe('Light');
    expect(results[5].light.value).toBe(190);

    expect(results[5].sound.status).toBe('');
    expect(results[5].sound.color).toBe('LIGHT_GRAY');
    expect(results[5].sound.name).toBe('Sound');
    expect(results[5].sound.value).toBe(null);

    expect(results[5].temperature.status).toBe('Good');
    expect(results[5].temperature.color).toBe('DARK_GREEN');
    expect(results[5].temperature.name).toBe('Temperature');
    expect(results[5].temperature.value).toBe(21.3);

    expect(results[5].humidity.status).toBe('Good');
    expect(results[5].humidity.color).toBe('DARK_GREEN');
    expect(results[5].humidity.name).toBe('Humidity');
    expect(results[5].humidity.value).toBe(40);

    expect(results[5].co2.status).toBe('');
    expect(results[5].co2.color).toBe('LIGHT_GRAY');
    expect(results[5].co2.name).toBe('CO2');
    expect(results[5].co2.value).toBe(null);


    expect(results[10].id).toBe(557);
    expect(results[10].occupied).toBe(false);

    expect(results[10].light.status).toBe('Dark');
    expect(results[10].light.color).toBe('RED');
    expect(results[10].light.name).toBe('Light');
    expect(results[10].light.value).toBe(21);

    expect(results[10].sound.status).toBe('');
    expect(results[10].sound.color).toBe('LIGHT_GRAY');
    expect(results[10].sound.name).toBe('Sound');
    expect(results[10].sound.value).toBe(null);

    expect(results[10].temperature.status).toBe('Good');
    expect(results[10].temperature.color).toBe('DARK_GREEN');
    expect(results[10].temperature.name).toBe('Temperature');
    expect(results[10].temperature.value).toBe(20.5);

    expect(results[10].humidity.status).toBe('Good');
    expect(results[10].humidity.color).toBe('DARK_GREEN');
    expect(results[10].humidity.name).toBe('Humidity');
    expect(results[10].humidity.value).toBe(40);

    expect(results[10].co2.status).toBe('Good');
    expect(results[10].co2.color).toBe('DARK_GREEN');
    expect(results[10].co2.name).toBe('CO2');
    expect(results[10].co2.value).toBe(388);


    expect(results[9].id).toBe(556);
    expect(results[9].occupied).toBe(false);

    expect(results[9].light.status).toBe('Darker');
    expect(results[9].light.color).toBe('ORANGE');
    expect(results[9].light.name).toBe('Light');
    expect(results[9].light.value).toBe(299);

    expect(results[9].sound.status).toBe('');
    expect(results[9].sound.color).toBe('LIGHT_GRAY');
    expect(results[9].sound.name).toBe('Sound');
    expect(results[9].sound.value).toBe(null);

    expect(results[9].temperature.status).toBe('Good');
    expect(results[9].temperature.color).toBe('DARK_GREEN');
    expect(results[9].temperature.name).toBe('Temperature');
    expect(results[9].temperature.value).toBe(20);

    expect(results[9].humidity.status).toBe('Good');
    expect(results[9].humidity.color).toBe('DARK_GREEN');
    expect(results[9].humidity.name).toBe('Humidity');
    expect(results[9].humidity.value).toBe(42);

    expect(results[9].co2.status).toBe('');
    expect(results[9].co2.color).toBe('LIGHT_GRAY');
    expect(results[9].co2.name).toBe('CO2');
    expect(results[9].co2.value).toBe(null);
  }));

  it('should be created workplace re routing for OccuP', inject([RoutesService, WorkPlaceService],
    (service: RoutesService, workPlaceService: WorkPlaceService) => {
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
                    40660,
                    126,
                    38,
                    22.1,
                    49.5,
                    52.4,
                    0,
                    662,
                    279,
                    1007,
                    null,
                    null,
                    null,
                    1
                ],
                [
                    40670,
                    267,
                    37,
                    27.2,
                    98.6,
                    99.5,
                    7,
                    637,
                    357,
                    1290,
                    null,
                    null,
                    null,
                    5
                ],
                [
                    40671,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    3510,
                    0,
                    6,
                    6
                ],
                [
                    40684,
                    744,
                    52,
                    22.2,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    3521,
                    null,
                    0,
                    7
                ],
                [
                    40705,
                    1580,
                    51,
                    22.4,
                    null,
                    null,
                    null,
                    614,
                    null,
                    null,
                    3620,
                    null,
                    2,
                    8
                ],
                [
                    40715,
                    108,
                    53,
                    22.2,
                    null,
                    null,
                    null,
                    582,
                    null,
                    null,
                    3648,
                    null,
                    0,
                    9
                ],
                [
                    40717,
                    418,
                    40,
                    25.2,
                    null,
                    null,
                    5,
                    561,
                    null,
                    null,
                    null,
                    null,
                    null,
                    10
                ],
                [
                    40720,
                    126,
                    38,
                    22.1,
                    49.2,
                    53.4,
                    0,
                    692,
                    278,
                    1005,
                    null,
                    null,
                    null,
                    1
                ],
                [
                    40727,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    1,
                    2,
                    6
                ],
                [
                    40769,
                    null,
                    null,
                    null,
                    42,
                    69,
                    null,
                    null,
                    null,
                    null,
                    3507,
                    null,
                    null,
                    11
                ],
                [
                    40780,
                    126,
                    38,
                    22.1,
                    49.8,
                    60.6,
                    0,
                    664,
                    273,
                    987,
                    null,
                    null,
                    null,
                    1
                ],
                [
                    40786,
                    308,
                    39,
                    22.2,
                    53,
                    64,
                    12,
                    616,
                    0,
                    0,
                    null,
                    null,
                    null,
                    12
                ],
                [
                    40797,
                    166,
                    49,
                    24.4,
                    null,
                    null,
                    20,
                    608,
                    null,
                    null,
                    null,
                    null,
                    null,
                    13
                ],
                [
                    40838,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    3530,
                    2,
                    9,
                    0
                ],
                [
                    40840,
                    126,
                    38,
                    22.1,
                    50,
                    57.8,
                    0,
                    668,
                    271,
                    978,
                    null,
                    null,
                    null,
                    1
                ],
                [
                    40852,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    3457,
                    0,
                    2,
                    2
                ],
                [
                    40862,
                    267,
                    37,
                    27.6,
                    54.9,
                    63,
                    113,
                    648,
                    0,
                    0,
                    null,
                    null,
                    null,
                    3
                ],
                [
                    40900,
                    126,
                    38,
                    22.1,
                    49.3,
                    53.9,
                    0,
                    666,
                    270,
                    976,
                    null,
                    null,
                    null,
                    1
                ],
                [
                    40904,
                    null,
                    null,
                    null,
                    66,
                    99,
                    null,
                    null,
                    null,
                    null,
                    3586,
                    null,
                    null,
                    4
                ],
                [
                    40960,
                    141,
                    38,
                    22.1,
                    50.4,
                    66.7,
                    0,
                    650,
                    270,
                    976,
                    null,
                    null,
                    null,
                    1
                ],
                [
                    40970,
                    283,
                    37,
                    27.2,
                    98.5,
                    99.6,
                    9,
                    632,
                    350,
                    1264,
                    null,
                    null,
                    null,
                    5
                ]
            ]
        },
        'DATE': '20181004',
        'LOCATIONDEVICES': [
            [
                716,
                24,
                208
            ],
            [
                589,
                10,
                35
            ],
            [
                714,
                24,
                253
            ],
            [
                545,
                11,
                1
            ],
            [
                586,
                24,
                116
            ],
            [
                475,
                10,
                15
            ],
            [
                717,
                24,
                206
            ],
            [
                474,
                24,
                255
            ],
            [
                587,
                24,
                140
            ],
            [
                715,
                24,
                254
            ],
            [
                464,
                9,
                245
            ],
            [
                473,
                24,
                114
            ],
            [
                590,
                11,
                14
            ],
            [
                585,
                9,
                246
            ]
        ],
        'DEVICETYPES': [
            '9'
        ]
    };
    const mapLocations = [
        {
            'id': 464,
            'n': 'OV #201',
            'm': 49,
            'x': 2130,
            'y': 540,
            'office': 69,
            'devices': [
                [
                    16,
                    89,
                    4185
                ],
                [
                    9,
                    245,
                    2549
                ],
                [
                    10,
                    21,
                    2581
                ]
            ]
        },
        {
            'id': 473,
            'n': 'OV #202',
            'm': 49,
            'x': 2300,
            'y': 645,
            'office': 0,
            'devices': [
                [
                    16,
                    88,
                    4184
                ],
                [
                    9,
                    3954,
                    40818
                ]
            ]
        },
        {
            'id': 474,
            'n': 'OV #203',
            'm': 49,
            'x': 2580,
            'y': 870,
            'office': 79,
            'devices': [
                [
                    16,
                    231,
                    4327
                ],
                [
                    9,
                    4095,
                    40959
                ]
            ]
        },
        {
            'id': 475,
            'n': 'OV #204',
            'm': 49,
            'x': 2750,
            'y': 1010,
            'office': 80,
            'devices': [
                [
                    16,
                    90,
                    4186
                ],
                [
                    9,
                    271,
                    37135
                ]
            ]
        },
        {
            'id': 545,
            'n': 'OV #205',
            'm': 49,
            'x': 1220,
            'y': 1030,
            'office': 144,
            'devices': [
                [
                    10,
                    9,
                    2569
                ],
                [
                    9,
                    513,
                    37377
                ],
                [
                    16,
                    708,
                    4804
                ]
            ]
        },
        {
            'id': 585,
            'n': 'OV #206',
            'm': 49,
            'x': 1400,
            'y': 1200,
            'office': 156,
            'devices': [
                [
                    9,
                    246,
                    2550
                ],
                [
                    16,
                    709,
                    4805
                ]
            ]
        },
        {
            'id': 586,
            'n': 'OV #207',
            'm': 49,
            'x': 1545,
            'y': 1510,
            'office': 0,
            'devices': [
                [
                    16,
                    511,
                    4607
                ],
                [
                    9,
                    3956,
                    40820
                ]
            ]
        },
        {
            'id': 587,
            'n': 'OV #208',
            'm': 49,
            'x': 1725,
            'y': 1700,
            'office': 0,
            'devices': [
                [
                    16,
                    1,
                    4097
                ],
                [
                    10,
                    13,
                    2573
                ],
                [
                    9,
                    3980,
                    40844
                ]
            ]
        },
        {
            'id': 588,
            'n': 'OV #209',
            'm': 49,
            'x': 2140,
            'y': 970,
            'office': 159,
            'devices': [
                [
                    16,
                    503,
                    4599
                ],
                [
                    9,
                    299,
                    37163
                ]
            ]
        },
        {
            'id': 589,
            'n': 'OV #210',
            'm': 49,
            'x': 2060,
            'y': 1180,
            'office': 160,
            'devices': [
                [
                    16,
                    502,
                    4598
                ],
                [
                    9,
                    291,
                    37155
                ]
            ]
        },
        {
            'id': 590,
            'n': 'OV #211',
            'm': 49,
            'x': 2325,
            'y': 1115,
            'office': 194,
            'devices': [
                [
                    16,
                    226,
                    4322
                ],
                [
                    10,
                    47,
                    2607
                ],
                [
                    9,
                    526,
                    37390
                ]
            ]
        },
        {
            'id': 714,
            'n': 'OV #205a',
            'm': 49,
            'x': 1270,
            'y': 1080,
            'office': 144,
            'devices': [
                [
                    9,
                    4093,
                    40957
                ]
            ]
        },
        {
            'id': 715,
            'n': 'OV #202a',
            'm': 49,
            'x': 2350,
            'y': 695,
            'office': 0,
            'devices': [
                [
                    9,
                    4094,
                    40958
                ]
            ]
        },
        {
            'id': 716,
            'n': 'OV #204a',
            'm': 49,
            'x': 2800,
            'y': 1060,
            'office': 80,
            'devices': [
                [
                    9,
                    4048,
                    40912
                ]
            ]
        },
        {
            'id': 717,
            'n': 'OV #203a',
            'm': 49,
            'x': 2630,
            'y': 920,
            'office': 79,
            'devices': [
                [
                    9,
                    4046,
                    40910
                ]
            ]
        }
    ];
    const workPlaceDetails = workPlaceService.getWorkPlaceDetail(mapLocations, rawData);
    console.log(workPlaceDetails);
    const dataRouting = {
        '473': {
            '20225': [
                464,
                474,
                475,
                590
            ]
        },
        '586': {
            '20225': [
                545,
                585,
                590
            ]
        },
        '587': {
            '26369': [
                545,
                585,
                590
            ]
        },
        '715': {
            '26369': [
                464,
                474,
                475,
                590
            ]
        }
    };

    const results = service.generateReRouting(dataRouting, workPlaceDetails);
    expect(results.length).toBe(15);
    expect(results[0].id).toBe(464);
    expect(results[0].occupied).toBe(true);

    expect(results[0].sound.status).toBe('Good');
    expect(results[0].sound.color).toBe('DARK_GREEN');
    expect(results[0].sound.name).toBe('Sound');
    expect(results[0].sound.value).toBe(42);

    expect(results[0].co2.status).toBe('Stuffier');
    expect(results[0].co2.color).toBe('LIGHT_GREEN');
    expect(results[0].co2.name).toBe('CO2');
    expect(results[0].co2.value).toBe(582);


    expect(results[4].id).toBe(545);
    expect(results[4].occupied).toBe(true);

    expect(results[4].sound.status).toBe('Noisier');
    expect(results[4].sound.color).toBe('YELLOW');
    expect(results[4].sound.name).toBe('Sound');
    expect(results[4].sound.value).toBe(66);

    expect(results[4].co2.status).toBe('Stuffier');
    expect(results[4].co2.color).toBe('LIGHT_GREEN');
    expect(results[4].co2.name).toBe('CO2');
    expect(results[4].co2.value).toBe(614);


    expect(results[10].id).toBe(590);
    expect(results[10].occupied).toBe(true);

    expect(results[10].sound.status).toBe('Good');
    expect(results[10].sound.color).toBe('DARK_GREEN');
    expect(results[10].sound.name).toBe('Sound');
    expect(results[10].sound.value).toBe(42);

    expect(results[10].co2.status).toBe('Stuffier');
    expect(results[10].co2.color).toBe('LIGHT_GREEN');
    expect(results[10].co2.name).toBe('CO2');
    expect(results[10].co2.value).toBe(614);


    expect(results[6].id).toBe(586);
    expect(results[6].occupied).toBe(true);

    expect(results[6].sound.status).toBe('Noisier');
    expect(results[6].sound.color).toBe('YELLOW');
    expect(results[6].sound.name).toBe('Sound');
    expect(results[6].sound.value).toBe(66);

    expect(results[6].co2.status).toBe('');
    expect(results[6].co2.color).toBe('LIGHT_GRAY');
    expect(results[6].co2.name).toBe('CO2');
    expect(results[6].co2.value).toBe(null);
  }));
});
