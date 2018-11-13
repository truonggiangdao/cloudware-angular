/**
 * Check code company
 * Rules: string length = 5 && contains only alphanumeric characters
 * @returns {Boolean}
 */
export const isCompanyCodeLogin = (companyCode: string) => {
  return /^[a-zA-Z0-9]{5}$/.test(companyCode);
};

export default {
  isCompanyCodeLogin,
};
