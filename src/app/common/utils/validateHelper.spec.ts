import { validateEmail, validatePassword } from './validateHelper';

describe('ValidateHelper', () => {
  it('validateEmail should works correctly', () => {
    expect(validateEmail('sample@example.com')).toBe(true);
    expect(validateEmail('sam.ple@example.com')).toBe(true);
    expect(validateEmail('sample@exam.ple.com')).toBe(true);
    expect(validateEmail('sa.mp.le@example.org')).toBe(false);
    expect(validateEmail('sample@example')).toBe(false);
    expect(validateEmail('sample@')).toBe(false);
    expect(validateEmail('sample')).toBe(false);
    expect(validateEmail('sa@mp$le')).toBe(false);
    expect(validateEmail('!@#$%^&*(')).toBe(false);
    expect(validateEmail('')).toBe(false);
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

