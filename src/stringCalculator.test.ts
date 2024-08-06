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

  it('should return the sum of two comma-separated numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2")).toBe(3);
  });

  it('should return the sum of multiple comma-separated numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2,3,4")).toBe(10);
  });

  it('should handle new lines between numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  it('should support different delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//;\n1;2")).toBe(3);
  });
  
});
