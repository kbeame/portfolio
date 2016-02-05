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

  //create new portfolio articele
  // var $newPortfolio = $('article.template').clone();
  // $newPortfolio.removeClass('template');
  //
  // if (!this.datePublished) {
  //   $newPortfolio.addClass('draft');
  // }
  // //append to the newPortfolio
  // $newPortfolio.find('header h2').html(this.name);
  // $newPortfolio.find('time').html(parseInt((new Date() - new Date(this.datePublished))/60/60/24/1000) + ' days ago');
  // // $newPortfolio.find('time').html(parseInt((new Date() - new Date(this.datePublished))));
  // $newPortfolio.find('a#portfolio-link').attr('href', this.githubUrl);
  // $newPortfolio.find('.project-description').html(this.description);
  // // $newPortfolio.append('<hr>');
  // return $newPortfolio;
  // $('article.draft').hide();
// };



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
