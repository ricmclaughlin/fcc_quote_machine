export class QuoteService {
  constructor ($filter) {
    'ngInject';
    this.filter = $filter;
    this.quotes = [
      {
        "key": 1,
        "quoteText": "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
        "quoteType": "wisdom",
        "quoteAuthor": "Sai Baba " },
      {
        "key": 2,
        "quoteText": "You can do anything, but not everything.",
        "quoteType": "wisdom",
        "quoteAuthor": "David Allen" },
      {
        "key": 3,
        "quoteText": "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
        "quoteType": "wisdom",
        "quoteAuthor": "Antoine de Saint-Exupéry" },
      {
        "key": 4,
        "quoteText": "The richest man is not he who has the most, but he who needs the least.",
        "quoteType": "wisdom",
        "quoteAuthor": "Unknown Author" },
      {
        "key": 5,
        "quoteText": "You miss 100 percent of the shots you never take.",
        "quoteType": "wisdom",
        "quoteAuthor": "Wayne Gretzky" },
      {
        "key": 6,
        "quoteText": "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
        "quoteType": "wisdom",
        "quoteAuthor": "Ambrose Redmoon" },
      {
        "key": 7,
        "quoteText": "You must be the change you wish to see in the world.",
        "quoteType": "wisdom",
        "quoteAuthor": "Gandhi" },
      {
        "key": 8,
        "quoteText": "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.",
        "quoteType": "wisdom",
        "quoteAuthor": "Lin-Chi"  },
      {
        "key": 9,
        "quoteText": "The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.",
        "quoteType": "wisdom",
        "quoteAuthor": "A. A. Milne"      },
      {
        "key": 10,
        "quoteText": "To the man who only has a hammer, everything he encounters begins to look like a nail.",
        "quoteType": "wisdom",
        "quoteAuthor": "Abraham Maslow"  },
      {
        "key": 11,
        "quoteText": "We are what we repeatedly do; excellence, then, is not an act but a habit.",
        "quoteType": "wisdom",
        "quoteAuthor": "Aristotle"
      },
      {
        "key": 12,
        "quoteText": "A wise man gets more use from his enemies than a fool from his friends.",
        "quoteType": "wisdom",
        "quoteAuthor": "Baltasar Gracian"
      },
      {
        "key": 13,
        "quoteText": "Do not seek to follow in the footsteps of the men of old; seek what they sought.",
        "quoteType": "wisdom",
        "quoteAuthor": "Basho"
      },
      {
        "key": 14,
        "quoteText": "Watch your thoughts; they become words.\nWatch your words; they become actions.\nWatch your actions; they become habits.\nWatch your habits; they become character.\nWatch your character; it becomes your destiny.",
        "quoteType": "wisdom",
        "quoteAuthor": "Lao-Tze"
      },
      {
        "key": 15,
        "quoteText": "Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.",
        "quoteType": "wisdom",
        "quoteAuthor": "Georg Christoph Lichtenberg"
      },
      {
        "key": 16,
        "quoteText": "What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.",
        "quoteType": "wisdom",
        "quoteAuthor": "John Ruskin"
      },
      {
        "key": 17,
        "quoteText": "The real voyage of discovery consists not in seeking new lands but seeing with new eyes.",
        "quoteType": "wisdom",
        "quoteAuthor": "Marcel Proust"
      },
      {
        "key": 18,
        "quoteText": "Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching",
        "quoteType": "wisdom",
        "quoteAuthor": "Unknown Author"
      },
      {
        "key": 19,
        "quoteText": "Try a thing you haven’t done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not.",
        "quoteType": "wisdom",
        "quoteAuthor": "Virgil Garnett Thomson"
      },
      {
        "key": 20,
        "quoteText": "Even if you’re on the right track, you’ll get run over if you just sit there.",
        "quoteType": "wisdom",
        "quoteAuthor": "Will Rogers"},
      {
        "key": 21,
        "quoteText": "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.",
        "quoteType": "wisdom",
        "quoteAuthor": "Zig Ziglar" },
      {
        "key":61,
        "quoteText": "Before I got married I had six theories about bringing up children; now I have six children and no theories.",
        "quoteType": "funny",
        "quoteAuthor": "John Wilmot" },
      {
        "key":22,
        "quoteText": "What the world needs is more geniuses with humility, there are so few of us left.",
        "quoteType": "funny",
        "quoteAuthor": "Oscar Levant" },
      {
        "key":23,
        "quoteText": "Always forgive your enemies; nothing annoys them so much.",
        "quoteType": "funny",
        "quoteAuthor": "Oscar Wilde" },
      {
        "key":24,
        "quoteText": "I’ve gone into hundreds of [fortune-teller’s parlors], and have been told thousands of things, but nobody ever told me I was a policewoman getting ready to arrest her.",
        "quoteType": "funny",
        "quoteAuthor": "New York City detective" },
      {
        "key":25,
        "quoteText": "When you go into court you are putting your fate into the hands of twelve people who weren’t smart enough to get out of jury duty.",
        "quoteType": "funny",
        "quoteAuthor": "Norm Crosby" },
      {
        "key":26,
        "quoteText": "Those who believe in telekinetics, raise my hand.",
        "quoteType": "funny",
        "quoteAuthor": "Kurt Vonnegut" },
      {
        "key":27,
        "quoteText": "Just the fact that some geniuses were laughed at does not imply that all who are laughed at are geniuses. They laughed at Columbus, they laughed at Fulton, they laughed at the Wright brothers. But they also laughed at Bozo the Clown.",
        "quoteType": "funny",
        "quoteAuthor": "Carl Sagan" },
      {
        "key":28,
        "quoteText": "My pessimism extends to the point of even suspecting the sincerity of the pessimists.",
        "quoteType": "funny",
        "quoteAuthor": "Jean Rostand" },
      {
        "key":29,
        "quoteText": "Sometimes I worry about being a success in a mediocre world.",
        "quoteType": "funny",
        "quoteAuthor": "Lily Tomlin" },
      {
        "key":30,
        "quoteText": "I quit therapy because my analyst was trying to help me behind my back.",
        "quoteType": "funny",
        "quoteAuthor": "Richard Lewis" },
      {
        "key":31,
        "quoteText": "We’ve heard that a million monkeys at a million keyboards could produce the complete works of Shakespeare; now, thanks to the Internet, we know that is not true.",
        "quoteType": "funny",
        "quoteAuthor": "Robert Wilensky" },
      {
        "key":32,
        "quoteText": "If there are no stupid questions, then what kind of questions do stupid people ask? Do they get smart just in time to ask questions?",
        "quoteType": "funny",
        "quoteAuthor": "Scott Adams" },
      {
        "key":33,
        "quoteText": "If the lessons of history teach us anything it is that nobody learns the lessons that history teaches us.",
        "quoteType": "funny",
        "quoteAuthor": "Anon" },
      {
        "key":34,
        "quoteText": "When I was a boy I was told that anybody could become President. Now I’m beginning to believe it.",
        "quoteType": "funny",
        "quoteAuthor": "Clarence Darrow" },
      {
        "key":35,
        "quoteText": "Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it.",
        "quoteType": "funny",
        "quoteAuthor": "Cullen Hightower" },
      {
        "key":36,
        "quoteText": "There are many who dare not kill themselves for fear of what the neighbors will say.",
        "quoteType": "funny",
        "quoteAuthor": "Cyril Connolly" },
      {
        "key":37,
        "quoteText": "There’s so much comedy on television. Does that cause comedy in the streets?",
        "quoteType": "funny",
        "quoteAuthor": "Dick Cavett" },
      {
        "key":38,
        "quoteText": "All men are frauds. The only difference between them is that some admit it. I myself deny it.",
        "quoteType": "funny",
        "quoteAuthor": "H. L. Mencken" },
      {
        "key":39,
        "quoteText": "I don’t mind what Congress does, as long as they don’t do it in the streets and frighten the horses.",
        "quoteType": "funny",
        "quoteAuthor": "Victor Hugo" },
      {
        "key":40,
        "quoteText": "I took a speed reading course and read ‘War and Peace’ in twenty minutes. It involves Russia.",
        "quoteType": "funny",
        "quoteAuthor": "Woody Allen" },

      {
        "key":41,
        "quoteText": "The person who reads too much and uses his brain too little will fall into lazy habits of thinking.",
        "quoteType": "intelligent",
        "quoteAuthor": "Albert Einstein" },
      {
        "key":42,
        "quoteText": "Believe those who are seeking the truth. Doubt those who find it.",
        "quoteType": "intelligent",
        "quoteAuthor": "André Gide" },
      {
        "key":43,
        "quoteText": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
        "quoteType": "intelligent",
        "quoteAuthor": "Aristotle" },
      {
        "key":44,
        "quoteText": "I’d rather live with a good question than a bad answer.",
        "quoteType": "intelligent",
        "quoteAuthor": "Aryeh Frimer" },
      {
        "key":45,
        "quoteText": "We learn something every day, and lots of times it’s that what we learned the day before was wrong.",
        "quoteType": "intelligent",
        "quoteAuthor": "Bill Vaughan" },
      {
        "key":46,
        "quoteText": "I have made this letter longer than usual because I lack the time to make it shorter.",
        "quoteType": "intelligent",
        "quoteAuthor": "Blaise Pascal" },
      {
        "key":47,
        "quoteText": "Don’t ever wrestle with a pig. You’ll both get dirty, but the pig will enjoy it.",
        "quoteType": "intelligent",
        "quoteAuthor": "Cale Yarborough" },
      {
        "key":48,
        "quoteText": "An inventor is simply a fellow who doesn’t take his education too seriously.",
        "quoteType": "intelligent",
        "quoteAuthor": "Charles F. Kettering" },
      {
        "key":49,
        "quoteText": "Asking a working writer what he thinks about critics is like asking a lamppost how it feels about dogs.",
        "quoteType": "intelligent",
        "quoteAuthor": "Christopher Hampton" },
      {
        "key":50,
        "quoteText": "Better to write for yourself and have no public, than to write for the public and have no self.",
        "quoteType": "intelligent",
        "quoteAuthor": "Cyril Connolly" },
      {
        "key":51,
        "quoteText": "Never be afraid to laugh at yourself, after all, you could be missing out on the joke of the century.",
        "quoteType": "intelligent",
        "quoteAuthor": "Dame Edna Everage" },
      {
        "key":52,
        "quoteText": "I am patient with stupidity but not with those who are proud of it.",
        "quoteType": "intelligent",
        "quoteAuthor": "Edith Sitwell" },
      {
        "key":53,
        "quoteText": "Normal is getting dressed in clothes that you buy for work and driving through traffic in a car that you are still paying for – in order to get to the job you need to pay for the clothes and the car, and the house you leave vacant all day so you can afford to live in it.",
        "quoteType": "intelligent",
        "quoteAuthor": "Ellen Goodman" },
      {
        "key":54,
        "quoteText": "The cure for boredom is curiosity. There is no cure for curiosity.",
        "quoteType": "intelligent",
        "quoteAuthor": "Ellen Parr" },
      {
        "key":55,
        "quoteText": "Advice is what we ask for when we already know the answer but wish we didn’t.",
        "quoteType": "intelligent",
        "quoteAuthor": "Erica Jong" },
      {
        "key":56,
        "quoteText": "Some people like my advice so much that they frame it upon the wall instead of using it.",
        "quoteType": "intelligent",
        "quoteAuthor": "Gordon R. Dickson" },
      {
        "key":57,
        "quoteText": "The trouble with the rat race is that even if you win, you’re still a rat.",
        "quoteType": "intelligent",
        "quoteAuthor": "Lily Tomlin" },
      {
        "key":58,
        "quoteText": "Never ascribe to malice, that which can be explained by incompetence.",
        "quoteType": "intelligent",
        "quoteAuthor": "Napoleon (Hanlon’s Razor)" },
      {
        "key":59,
        "quoteText": "Imagination was given to man to compensate him for what he is not, and a sense of humor was provided to console him for what he is.",
        "quoteType": "intelligent",
        "quoteAuthor": "Oscar Wilde" },
      {
        "key":60,
        "quoteText": "When a person can no longer laugh at himself, it is time for others to laugh at him.",
        "quoteType": "intelligent",
        "quoteAuthor": "Thomas Szasz" }
    ];
  }
  getQuote(keyID) {


    return this.filter('filter') (this.quotes, function(o){
      return o.key === keyID })[0];
  }

  getRandomQuote(){
    let firstQuote = 1;
    let lastQuote = this.quotes.length;
    let keyID = this.getRandomInt(firstQuote, lastQuote);

    return this.getQuote(keyID);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
}
