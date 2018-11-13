import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { isCompanyCodeLogin } from '@app/common/utils/validateHelper';

describe('ValidateHelper', () => {
  it('should return correct true', () => {
    expect(isCompanyCodeLogin('OccuP')).toBe(true);
    expect(isCompanyCodeLogin('OccuP12')).toBe(false);
    expect(isCompanyCodeLogin('OccuP1')).toBe(false);
    expect(isCompanyCodeLogin('OccuP12342314')).toBe(false);
    expect(isCompanyCodeLogin('12')).toBe(false);
    expect(isCompanyCodeLogin('123')).toBe(false);
    expect(isCompanyCodeLogin('Occ1')).toBe(false);
    expect(isCompanyCodeLogin('Occu#')).toBe(false);
    expect(isCompanyCodeLogin('Occ#uP')).toBe(false);
    expect(isCompanyCodeLogin('OccuP@')).toBe(false);
    expect(isCompanyCodeLogin('Occ12')).toBe(true);
  });
});

