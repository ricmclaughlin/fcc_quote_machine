export class MainController {
  constructor (quotes, $location) {
    'ngInject';
    this.quoteSrv = quotes;
    this.quote = {};
    this.quoteTweet = '';
    this.location = $location;
    this.quoteID = $location.search();
    this.activate();
  }

  activate(){
    this.getDisplayQuote();
  }

  getDisplayQuote(){
    this.quote = this.quoteSrv.getRandomQuote();
    this.quoteTweet = this.tweetifyString(this.quote.quoteText);
  }

  tweetifyString(stringToTweetify) {
    return stringToTweetify.replace(/ /g , '%20');
  }
}


//