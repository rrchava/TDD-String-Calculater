import { StringCalculator } from './stringCalculator';

describe('StringCalculator', () => {
  it('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("")).toBe(0);
  });

  it('should return the number for a single number string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1")).toBe(1);
  });
});
