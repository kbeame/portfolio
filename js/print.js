//constructor function for the portfolio creation(function(module) {
(function(module) {

  function PortfolioCreation (options) {
  //   Object.keys(options).forEach(function(e, index, keys)
  //     this[e] = options[e]; //WHen I try to use this version it says that 'this' is a fatal error and thus it doesn't run.
  //   },this);
  // }

    this.title = options.title;
    this.githubUrl = options.githubUrl;
    this.description = options.description;
    this.datePublished = options.datePublished;
  }
  //made the array global (its better form to have fewer global items)
  PortfolioCreation.all = [];

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

  PortfolioCreation.numWordsAll = function () {
    return PortfolioCreation.all.map(function(data) {
      return data.description.match(/\b\w/g).length;
    })
    .reduce(function(prev, current) {
      return prev + current;
    });
  };

  module.PortfolioCreation = PortfolioCreation;
}) (window);
