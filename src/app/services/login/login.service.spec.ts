import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from '@app/services/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '@app/services/http.service';
import { AppConfig } from '@app/common/classes/AppConfig';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, HttpService, AppConfig],
      imports: [HttpClientModule],
    });
  });

  // it('should be created', inject([LoginService], (service: LoginService) => {
  //   serviceservice
  //     .loginCompanyCode('OccuP')
  //     .subscribe((value) => {
  //       expect(value.userid).toBe(707);
  //       expect(value._JWT).toBe('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzA3fQ.oDpuGNNGvVq-ShOVOmvDejwnmD_d5UWCeeMI01OQ5hw');
  //   });
  // }));
});
