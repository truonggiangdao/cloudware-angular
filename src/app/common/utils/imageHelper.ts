/**
 * preload image
 * @param string imgSrc
 * @param Function onload
 * @param Function onerror
 */
export const preloadImage =  (imgSrc: string, onload, onerror) => {
  const img = new Image();
  img.src = imgSrc;
  if (onload) {
    img.onload = onload;
  }
  if (onerror) {
    img.onerror = onerror;
  }
};

export default {
  preloadImage,
};
