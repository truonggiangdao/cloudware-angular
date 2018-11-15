export const LOG_LEVEL = {
  DEFAULT: 'DEFAULT',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  EXCEPTION: 'EXCEPTION',
};

/**
 * Log error, exceptions
 * @param logData data to be logged
 * @param level severity of the log
 */
export const log = (logData: any, level: string = LOG_LEVEL.DEFAULT) => {
  console.log(level, logData);
};

export default {
  log,
};
