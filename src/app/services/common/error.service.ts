import { Injectable } from '@angular/core';
import { log, LOG_LEVEL } from '@app/common/utils/logHelper';

@Injectable()
export class ErrorService {
  constructor() { }

  handleError = (error: Error) => {
    log(error, LOG_LEVEL.ERROR);
  }

  handleException = (exception: Error) => {
    log(exception, LOG_LEVEL.EXCEPTION);
  }
}
