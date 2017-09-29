const expect = require('expect.js');
const { timer, customBind, sum, anagram, getUnique, getIntersection, isIsomorphic } = require('./tasks');

describe('Lesson 2', () => {
  describe('timer', () => {
    it('should log different numbers', done => {
      const result = [];
      const logger = num => result.push(num);

      timer(logger);
      setTimeout(() => {
        expect(result).to.eql(new Array(10).fill(10).map((_, i)=> i));
        done();
      }, 1000);
    });
  });

  describe('customBind', () => {
    it('should bind arguments and context', () => {
      let lastContext = null;
      let lastParams = null;

      function call(...params) {
        lastContext = this;
        lastParams = params;
      }

      let bindedFunc = customBind(call, null, 1, 3);

      bindedFunc(4);
      expect(lastContext).to.be(null);
      expect(lastParams).to.eql([1, 3, 4]);
      const context = {}

      bindedFunc = customBind(call, context, 'hello', 'work');
      bindedFunc(777);
      expect(lastContext).to.be(context);
      expect(lastParams).to.eql(['hello', 'work', 777]);
    });
  });

  describe('sum', () => {
    it('should compute fibonacci number', () => {
      expect(sum(1)(2)(4)(5)()).to.be(12);
      expect(sum(1)()).to.be(1);
      expect(sum()).to.be(0);
    });
  });

  describe('anagram', () => {
    it('should check are words anagrams of each other', () => {
      expect(anagram('просветитель', 'терпеливость')).to.be.ok();
      expect(anagram('первый', 'терпеливость')).not.to.be.ok();
    });
  });

  describe('getUnique', () => {
    it('should filter uniq values from the array', () => {
      expect(getUnique([1, 2, 4, 2, 3, 1])).to.eql([1, 2, 4, 3]);
      expect(getUnique([1, 1, 1, 1])).to.eql([1]);
    });
  });

  describe('getIntersection', () => {
    it('should return sorted intersection of arrays', () => {
      expect(getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4])).to.eql([1, 3]);
      expect(getIntersection([1, 3, 5, 7, 9, 10], [10, 3, 4])).to.eql([3, 10]);
    });
  });

  describe('isIsomorphic', () => {
    it('should check if only one char is different', () => {
      expect(isIsomorphic('help', 'hell')).to.be.ok();
      expect(isIsomorphic('hold', 'hell')).not.to.be.ok();
      expect(isIsomorphic('help', 'hell yeah')).not.to.be.ok();
    });
  });
});