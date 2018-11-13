import * as moment from 'moment';

/**
 * Format datetime
 * @param {Date} dateTime
 * @param {String} formatString
 * @returns {String} formatted datetime string. If got error, return an empty string.
 */
export const formatDateTimeByString = (dateTime: Date, formatString: string) => {
  let result;
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
  return formatDateTimeByString(new Date(), 'YMMDD');
};

export default {
  formatDateTimeByString,
  getCurrentDateString,
};
