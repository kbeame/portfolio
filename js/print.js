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
  var template = Handlebars.compile($('#a-template').text());

  this.timeSince = parseInt((new Date() - new Date(this.datePublished))/60/60/24/1000);
  this.publishedDatePrint = this.datePublished ? 'published: ' + this.timeSince + ' days ago' : '(draft)';

  return template(this);
};

portfolioArray.sort(function(a,b) {
  return (new Date(b.datePublished)) - (new Date(a.datePublished));
});
//use the portfolioArray to construct the portfolio items needed
portfolioArray.forEach(function (element) {
  portfolio.push(new PortfolioCreation(element));
});
//append the portfolio array to the article class name newPortfolioItem
portfolio.forEach(function (element) {
  $('.individualPrint').append(element.toHtml());
});
