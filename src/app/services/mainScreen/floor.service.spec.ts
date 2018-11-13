import { TestBed, inject } from '@angular/core/testing';

import { FloorService } from './floor.service';
import { Floor } from '@app/common/classes/floor/Floor';
import { HttpService } from '@app/services/http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppConfig } from '@app/common/classes/AppConfig';

describe('FloorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FloorService, HttpService, HttpClient, HttpHandler, AppConfig]
    });
  });

  it('should be created', inject([FloorService], (service: FloorService) => {
    expect(service).toBeTruthy();
  }));

  it('should return correct type', inject([FloorService], (service: FloorService) => {
    const locationId = 10;
    const floors = Array<Floor>();
    floors.push(new Floor(36, '1', 1, 1, 'Office Lab', 10));
    floors.push(new Floor(2, '2', 1, 1, '', 11));
    floors.push(new Floor(3, '3', 1, 1, '', 10));
    floors.push(new Floor(4, '4', 1, 1, '', 11));
    const results = service.getFloorByLocation(locationId, floors);
    expect(results.length).toBe(2);
    expect(results[0].id).toBe(36);
    expect(results[1].id).toBe(3);
  }));
});
