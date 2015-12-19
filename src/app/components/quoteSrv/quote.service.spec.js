describe('service quote', () => {
  beforeEach(angular.mock.module('fccQuoteMachine'));

  it('should be registered', inject(quotes => {
    expect(quotes).not.toEqual(null);
  }));

  describe('getQuotes function', () => {

    it('should exist', inject(quotes => {
      expect(quotes.getQuote).not.toBeNull();
    }));

    it('should return a single quote', inject(quotes => {
      const data1 = quotes.getQuote(1);
      const data2 = quotes.getQuote(3);
      expect(data1).toEqual(jasmine.any(Object));
      expect(data2).toEqual(jasmine.any(Object));
    }));
  });

  describe('getRandomQuote function', () => {

    it('should exist', inject(quotes => {
      expect(quotes.getRandomQuote).not.toBeNull();
    }));

    it('should return a single quote', inject(quotes => {
      const data1 = quotes.getRandomQuote();
      const data2 = quotes.getRandomQuote();
      expect(data1).toEqual(jasmine.any(Object));
      expect(data2).toEqual(jasmine.any(Object));
    }));
  });
});
