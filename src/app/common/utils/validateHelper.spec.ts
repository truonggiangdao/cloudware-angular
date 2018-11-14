import { validateEmail, validatePassword } from './validateHelper';

describe('ValidateHelper', () => {
  it('validateEmail should works correctly', () => {
    expect(validateEmail('OccuP')).toBe(true);
    expect(validateEmail('OccuP12')).toBe(false);
    expect(validateEmail('OccuP1')).toBe(false);
    expect(validateEmail('OccuP12342314')).toBe(false);
    expect(validateEmail('12')).toBe(false);
    expect(validateEmail('123')).toBe(false);
    expect(validateEmail('Occ1')).toBe(false);
    expect(validateEmail('Occu#')).toBe(false);
    expect(validateEmail('Occ#uP')).toBe(false);
    expect(validateEmail('OccuP@')).toBe(false);
    expect(validateEmail('Occ12')).toBe(true);
  });

  it('validatePassword should works correctly', () => {
    expect(validatePassword('OccuP')).toBe(true);
    expect(validatePassword('OccuP12')).toBe(false);
    expect(validatePassword('OccuP1')).toBe(false);
    expect(validatePassword('OccuP12342314')).toBe(false);
    expect(validatePassword('12')).toBe(false);
    expect(validatePassword('123')).toBe(false);
    expect(validatePassword('Occ1')).toBe(false);
    expect(validatePassword('Occu#')).toBe(false);
    expect(validatePassword('Occ#uP')).toBe(false);
    expect(validatePassword('OccuP@')).toBe(false);
    expect(validatePassword('Occ12')).toBe(true);
  });
});

