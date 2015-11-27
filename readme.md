## Initial installation
1. Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
2. Install Sass (in terminal): run `gem install sass` or on mac `sudo gem install sass`
3. Install [NodeJS](https://nodejs.org/)
4. Install Gulp (in terminal): run `npm install -g gulp`

## Installation frontend project
1. In terminal: run `npm install`
2. In terminal: run `gulp`
3. Then go to the browser and paste: "http://localhost:3000/".

## Installation Frontend CSS Regression testing
1. Install [PhantomJS](http://phantomjs.org/)
2. Install [CasperJS](http://casperjs.org/)

## Running Frontend CSS Regression tests
_Be sure that the localhost is running by Gulp (see the installation frontend project section)_
1. Go with the terminal to the "CSS-regression" folder
2. In the terminal: run `casperjs testNavigation.js` (for example). This test it will create screenshots of the main 
navigation for desktop, tablet & mobile view of the localhost & startersitedev envoirment.
3. After running the testNavigation test with Casperjs. In the terminal: run `node compareNavigation.js`. This is to 
check compare the screenshots of the navigation of localhost & startersitedev. In the config of the 
"compareNavigation.js" is a "differencePerc" to set how much difference is acceptable.
