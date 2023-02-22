/**
 * This test suite ensures that the sayNumber function correctly
 *  converts numbers into their corresponding English word representations. The test suite 
 * checks that the function returns the expected output for various input values, 
 * including edge cases like 0 and large numbers with many digits.
 */

const sayNumber = require('../codechallenge')

describe('sayNumber', () => {
    it('should return "zero" when input is 0', () => {
      expect(sayNumber(0)).toBe('Zero.');
    });
  
    it('should return "eleven" when input is 11', () => {
      expect(sayNumber(11)).toBe('Eleven.');
    });
  
    it('should return "forty-three" when input is 43', () => {
      expect(sayNumber(43)).toBe('Forty-three.');
    });
  
    it('should return "one million, forty-three thousand, two hundred and eighty-three" when input is 1043283', () => {
      expect(sayNumber(1043283)).toBe('One million, forty-three thousand, two hundred and eighty-three.');
    });
  
    it('should return "ninety trillion, three hundred and seventy-six billion and one hundred and one thousand and twelve" when input is 90376000010012', () => {
      expect(sayNumber(90376000010012)).toBe('Ninety trillion, three hundred and seventy-six billion and one hundred and one thousand and twelve.');
    });
  });
  