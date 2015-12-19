This project is the second of many projects I'll be doing as part of the  Free Code Camp front end...

The use cases are pretty straight forward... 
As a user, I can click a button to show me a new random quote.
As a user, I can press a button to tweet out a quote.

It is very cool that FCC lets you use what ever tools you want to create these projects. And seeing that there almost no value in creating simple javascript or jQuery apps these days, my versions of these projects are developed with AngularJS 1.4 using professional, real-world tool chain and TDD. In my world project scaffolding, webpack, sass and gulp, which is packaged nicely together in the amazing [gulp-angular](https://github.com/Swiip/generator-gulp-angular) [yeoman](http://yeoman.io/) generator, is critical towards developing something maintainable. This projects uses gulp, nginject, ui.router, [es2015](https://babeljs.io/docs/learn-es2015/), protractor, jasmine, babel, browserify, browsersync, Phantomjs and a bunch more stuff. 

For this project I didn't go full force TDD. I implemented tests for the controller and service but didn't implement any e2e tests. I'll be doing that on future projects. 

Interesting tid-bit I learned on this project:
1. If you try to lighten up up and use Angular 1.4 jqLite instead of regular jQuery and try to add the regular tweet javascript inline using <code>script</code> tags or in it's own .js file, you get a nice Content Security Policy in Chrome. So I implemented a nifty sharing directive from [Jason Watmore](http://jasonwatmore.com/post/2014/08/01/AngularJS-directives-for-social-sharing-buttons-Facebook-Like-GooglePlus-Twitter-and-Pinterest.aspx) that works like a champ... but requires jQuery. 
2. There are lots of APIs around for quotes and they all suck or the cost money or both. The one used by the majority of campers is [forismatic](http://www.forismatic.com/en/) and it doesn't emit proper JSON. So, I embbedded the quotes required for this project in an angular service.
3. The [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages) plugin rocks. Deployment to github gh-pages is ridicously easy using this little guy.

http://www.freecodecamp.com/challenges/zipline-build-a-personal-portfolio-webpage
