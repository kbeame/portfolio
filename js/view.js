(function(module) {
  // It is important to keep functions as methods within objects to keep them organized.
  var portfolioView = {};
  //nav tab feature
  // portfolioView.handleNav = function() {
  //   $('nav').on('click', '.tab', function() {
  //     var navVal = $(this).data('content');
  //     console.log(navVal);
  //     $('.close-tab').hide();
  //     $('section#' + navVal).fadeIn();
  //     $('.facts').fadeIn();
  //   });
  //   $('.close-tab').hide();
  //   $('.facts').hide();
  //
  //   //I don't want the 'portfolio' info to show up first. I only want it if I click on portfolio.
  //   // $('nav .tab:first').click();
  // };

  portfolioView.readMorePortfolio = function() {
    $('.project-description *:nth-of-type(n+2)').hide();

    $('#to-portfolio').on('click', 'a.read-on', function(event) {
      event.preventDefault();
      $(this).parent().find('*').fadeIn('slow');
      $(this).hide();
    });
  };

  portfolioView.printToIndex = function() {
    PortfolioCreation.all.forEach(function (element) {
      $('.individualPrint').append(element.toHtml());
    });
  };

  portfolioView.printStats = function() {
    $('#fun-facts .portfolio-count').text('Number of portfolio items: ' +PortfolioCreation.all.length);
    $('#fun-facts .word-count').text('Total Wordcount: ' + PortfolioCreation.numWordsAll());
  };

  $(document).ready(function() {
    // portfolioView.handleNav();
    portfolioView.readMorePortfolio();
    portfolioView.printStats();
  });

  module.portfolioView = portfolioView;
})(window);
