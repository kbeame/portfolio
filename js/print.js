//constructor function for the portfolio creation(function(module) {
(function(module) {

  function PortfolioCreation(options){
    Object.keys(options).forEach(function(e, index, keys) {
      this[e] = options[e];
    },this);
  }

  PortfolioCreation.all = [];
//this should be in the portfolioView perview because it displays the function
  PortfolioCreation.prototype.toHtml = function () {
    var template = Handlebars.compile($('#article-template').text());

    this.timeSince = parseInt((new Date() - new Date(this.datePublished))/60/60/24/1000);
    this.publishedDatePrint = this.datePublished ? 'published: ' + this.timeSince + ' days ago' : '(draft)';

    return template(this);
  };
  PortfolioCreation.loadPortfolios = function(rawData) {
    rawData.sort(function(a,b) {
      return (new Date(b.datePublished)) - (new Date(a.datePublished));
    });

    rawData.forEach(function (element) {
      PortfolioCreation.all.push(new PortfolioCreation(element));
    });
  };
//now that I have the ajax call do I need this?
  PortfolioCreation.retrieveAll = function (viewPrt) {
    if (localStorage.rawData) {
      $.ajax ({
        type: 'HEAD',
        url: 'data/portfolioIpsum.json',
        success: function (data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if ((!localStorage.eTag) || (eTag !== localStorage.eTag)) {
            localStorage.eTag = eTag;
          } else {
            PortfolioCreation.loadPortfolios(JSON.parse(localStorage.rawData));
          }
        }
      });
      PortfolioCreation.loadPortfolios(JSON.parse(localStorage.rawData));
      viewPrt();
    } else {
      $.getJSON('data/portfolioIpsum.json', function(data) {
        localStorage.rawData = JSON.stringify(data);
      });
      PortfolioCreation.loadPortfolios(JSON.parse(localStorage.rawData));
      viewPrt();
    };
  };
//figure out a way to keep this with tht githubUrl
  // PortfolioCreation.numWordsAll = function () {
  //   return PortfolioCreation.all.map(function(data) {
  //     return data.description.match(/\b\w/g).length;
  //   })
  //   .reduce(function(prev, current) {
  //     return prev + current;
  //   });
  // };

  module.PortfolioCreation = PortfolioCreation;
}) (window);
