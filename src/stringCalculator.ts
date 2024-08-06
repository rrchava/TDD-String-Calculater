// src/stringCalculator.ts
export class StringCalculator {
    add(numbers: string): number {
      if (numbers === "") return 0;
      if (!numbers.includes(",")) return parseInt(numbers);
      const numArray = numbers.split(",").map(Number);
      return numArray.reduce((a, b) => a + b, 0);
    }
  }