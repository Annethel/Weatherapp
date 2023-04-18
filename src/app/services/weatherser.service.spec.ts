import { TestBed } from '@angular/core/testing';

import { WeatherserService } from './weatherser.service';

describe('WeatherserService', () => {
  let service: WeatherserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
