import * as MobileDetect from 'mobile-detect';

/**
 * get device detector instance
 * @return MobileDetect instance
 */
const getDeviceDetector = () => {
  const userAgent = window.navigator.userAgent || window.navigator.vendor;
  return new MobileDetect(userAgent);
};

/**
 * check if current device is mobile (phone/tablet)
 * @return boolean
 */
export const isMobile = () => {
  const detector = getDeviceDetector();
  return Boolean(detector && detector.mobile());
};

/**
 * check if current device is phone
 * @return boolean
 */
export const isPhone = () => {
  const detector = getDeviceDetector();
  return Boolean(detector && detector.phone());
};

/**
 * check if current device is an IPhone
 * @return boolean
 */
export const isIPhone = () => {
  const detector = getDeviceDetector();
  return detector && detector.is('iPhone');
};

/**
 * check if current device is tablet
 * @return boolean
 */
export const isTablet = () => {
  const detector = getDeviceDetector();
  return Boolean(detector && detector.tablet());
};

export default {
  isMobile,
  isPhone,
  isIPhone,
  isTablet,
};
