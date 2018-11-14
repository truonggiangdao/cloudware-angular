import * as moment from 'moment';

export const DATE_FORMAT = 'YMMDD';

/**
 * Format datetime
 * @param dateTime Date
 * @param formatString string
 * @returns {String} formatted datetime string. If got error, return an empty string.
 */
export const formatDateTimeByString = (dateTime: Date, formatString: string) => {
  let result: string;
  try {
    result = moment(dateTime).format(formatString);
  } catch (error) {
    result = '';
  }
  return result === 'Invalid date' ? '' : result;
};

/**
 * Get current date string
 * @returns {String} formatted datetime string. If got error, return an empty string.
 */
export const getCurrentDateString = () => {
  return formatDateTimeByString(new Date(), DATE_FORMAT);
};

export default {
  formatDateTimeByString,
  getCurrentDateString,
};
