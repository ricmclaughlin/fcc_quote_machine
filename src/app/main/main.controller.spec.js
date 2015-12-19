describe('The Main Controller', () => {
  let vm;

  beforeEach(angular.mock.module('fccQuoteMachine'));

  beforeEach(inject(($controller, quotes) => {
    spyOn(quotes, 'getRandomQuote').and.callThrough();
    vm = $controller('MainController');
  }));
  
  it('should be registered', () => {
    expect(vm).not.toEqual(null);
  });

  it('should have a single quote', () => {
    expect(vm.quote).toEqual(jasmine.any(Object));
  });
  
  it('should contain getDisplayQuote', () => {
    expect(vm.getDisplayQuote).not.toEqual(null);
  });

  it('should call quotes.getDisplayQuote()', inject(quotes => {
    vm.getDisplayQuote();
    expect(quotes.getRandomQuote).toHaveBeenCalled();
  }));

  it('should have a quoteTweet String', () => {
    expect(vm.quoteTweet).toEqual(jasmine.any(String));
  });


});
