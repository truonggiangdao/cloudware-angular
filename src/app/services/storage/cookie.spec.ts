import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '@app/services/http.service';
import { Cookie } from '@app/services/storage/cookie';
import { CookieService } from 'ngx-cookie-service';

describe('CookieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cookie, HttpService, CookieService],
      imports: [HttpClientModule],
    });
  });

  it('should be created', inject([Cookie], (cookie: Cookie) => {
    // expect(cookie.set('test', 'test cookie')).toBeTruthy();
    expect(cookie.check('test')).toBe(false);
    expect(cookie.check('jwt_token')).toBe(false);
    expect(cookie.get('test')).toBe('');
    // expect(cookie.delete('test')).toBeTruthy();
  }));
});
