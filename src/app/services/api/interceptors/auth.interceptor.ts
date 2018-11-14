import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '@app/services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenService) {}

  /**
   * Set header request
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedReq = req.clone();
    if (req.headers.get('includetoken')) {
      tokenizedReq = req.clone(
        {
          headers: req.headers.set('x-authorization', this.token.getTokenBearer())
        }
      );
    }
    return next.handle(tokenizedReq);
  }
}
