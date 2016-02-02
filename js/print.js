//push up to this array
var portfolio = [];

//constructor function for the portfolio creation

function PortfolioCreation (options) {
  this.name = options.name;
  this.githubUrl = options.githubUrl;
  this.description = options.description;
  this.datePublished = options.datePublished;
}

PortfolioCreation.prototype.toHtml = function () {
  //create new portfolio articele
  var $newPortfolio = $('article.newPortfolioItem').clone();
  //append to the newPortfolio
  $newPortfolio.find('h2').text(this.name);
  $newPortfolio.find('pubdate').atr(this.name);





}
