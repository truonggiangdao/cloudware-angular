import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { formatDateTimeByString } from '@app/common/utils/dateHelper';

const formatNumberTwoDigits = function (num: number) {
  return num < 10 ? ('0' + num) : ('' + num);
};

describe('DateHelper', () => {
  it('should return correct format date', () => {
    const currentDate = new Date();
    expect(formatDateTimeByString(currentDate, 'YYYYMMDD').length).toBe(8);
    expect(formatDateTimeByString(currentDate, 'YYYYMMDD').indexOf(currentDate.getFullYear())).toBe(0);
  });

  it('should return correct date', () => {
    expect(formatDateTimeByString(new Date('2018-01-01'), 'YYYYMMDD')).toBe('20180101');
    const currentDate = new Date();
    const expectedResult = currentDate.getFullYear() +
      formatNumberTwoDigits(currentDate.getMonth() + 1) +
      formatNumberTwoDigits(currentDate.getDate());
    expect(formatDateTimeByString(currentDate, 'YYYYMMDD')).toBe(expectedResult);
  });
});
