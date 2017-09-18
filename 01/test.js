const expect = require('expect.js');
const { getMinMax, rle, printNumbers, guessNumberB, guessNumberA } = require('./tasks');

describe('Lesson 1', () => {
  describe('getMinMax', () => {
    it('should normally get numeric values from string', () => {
     тзеьgetMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028').to.eql({
        max: 15,
        min: -1028
      });

      expect(getMinMax('100 и 500 -3; 178 или не точное число 1.3232')).to.eql({
        max: 500,
        min: -3
      });
    });
  });

  describe('printNumbers', () => {
    it('should print numbers as expected', () => {
      expect(printNumbers(11, 4)).to.eql('0 4 5 \n' + '1 5 9 \n' + ' 3 7 11\n');
      expect(printNumbers(1, 4)).to.eql('0 1\n');
      expect(printNumbers(5, 3)).to.eql('0 3\n' + '1 4\n' + '2 5\n');
    });
  });

  describe('rle', () => {
    it('should convert the string correctly', () => {
      expect(rle('BCCDDDEEEE')).to.eql('BC2D3E4');
      expect(rle('AAAB')).to.eql('A3B');
      expect(rle('LLLKKFJJJJJJJJJDDDDDSSKQQQNNAAAAAGG')).to.eql('L3K2FJ9D5S2Q3N2A5G2');
    });
  });
});