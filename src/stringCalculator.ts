// src/stringCalculator.ts
export class StringCalculator {
    add(numbers: string): number {
      if (numbers === "") return 0;
  
      let delimiter = /[\n,]+/;
      if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2);
        delimiter = new RegExp(parts[0][2]);
        numbers = parts[1];
      }
  
      const numArray = numbers.split(delimiter).map(Number);
      const negatives = numArray.filter(n => n < 0);
      if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
      }
      return numArray.reduce((a, b) => a + b, 0);
    }
  }