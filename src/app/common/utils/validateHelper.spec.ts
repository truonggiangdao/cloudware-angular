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
    expect(validatePassword('psswd')).toBe(false);
    expect(validatePassword('passwd')).toBe(true);
    expect(validatePassword('')).toBe(false);
    expect(validatePassword('Passwd12342314')).toBe(true);
    expect(validatePassword('sa@mp$le')).toBe(true);
    expect(validatePassword('!@#$%^&*(')).toBe(true);
  });
});

