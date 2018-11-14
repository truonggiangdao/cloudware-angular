import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // show loading icon
    // toggleLoading(req.url, true);

    return next.handle(req).pipe(
      tap(),
      finalize(() => {
        // hide loading icon
        // toggleLoading(req.url, false);
      })
    );
  }
}
