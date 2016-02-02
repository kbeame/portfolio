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
  var $newPortfolio = $('.newPortfolioItem').clone();
  //append to the newPortfolio
  $newPortfolio.find('h2').text(this.name);
  $newPortfolio.find('time').attr("pubdate", this.datePublished);
  $newPortfolio.find('a#portfolioLink').attr("html", this.githubUrl);
  $newPortfolio.find('.projectDescription').html(this.description);
  // $newPortfolio.removeClass('projectDescription');
  return $newPortfolio;
}

//use the portfolioArray to construct the portfolio items needed
portfolioArray.forEach(function (element) {
  portfolio.push(new PortfolioCreation(element));
});
//append the portfolio array to the article class name newPortfolioItem
portfolio.forEach(function (element) {
  $('.newPortfolioItem').append(element.toHtml());
});
