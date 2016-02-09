//constructor function for the portfolio creation

function PortfolioCreation (options) {
  this.name = options.name;
  this.githubUrl = options.githubUrl;
  this.description = options.description;
  this.datePublished = options.datePublished;
}
//made the array global (its better form to have fewer global items)
PortfolioCreation.all = [];

PortfolioCreation.prototype.toHtml = function () {
  var template = Handlebars.compile($('#a-template').text());

  this.timeSince = parseInt((new Date() - new Date(this.datePublished))/60/60/24/1000);
  this.publishedDatePrint = this.datePublished ? 'published: ' + this.timeSince + ' days ago' : '(draft)';

  return template(this);
};
PortfolioCreation.Load = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.datePublished)) - (new Date(a.datePublished));
  });

  rawData.forEach(function (element) {
    PortfolioCreation.all.push(new PortfolioCreation(element));
  });
};
//use the portfolioArray to construct the portfolio items needed
