import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NetworkConnection } from '@app/common/classes/NetworkConnection';

@Injectable()
export class NetworkConectionInterceptor implements HttpInterceptor {

  statusCodes = [400, 401, 402, 403, 404, 405, 406, 407, 408, 500, 501, 502, 503, 504, 505, 511];

  constructor(private networkConnection: NetworkConnection) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(() => {
        this.networkConnection.online = true;
      }, (error) => {
        if (!this.statusCodes.find(x => x === Number(error.status))) {
          this.networkConnection.online = false;
        }
      })
    );
  }
}
