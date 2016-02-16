(function(module) {
  // It is important to keep functions as methods within objects to keep them organized.
  var portfolioView = {};
  portfolioView.readMorePortfolio = function() {
    $('.project-description *:nth-of-type(n+2)').hide();

    $('#to-portfolio').on('click', 'a.read-on', function(event) {
      event.preventDefault();
      $(this).parent().find('*').fadeIn('slow');
      $(this).hide();
    });
  };

  portfolioView.printToIndex = function() {
    console.log('print to index');
    PortfolioCreation.all.forEach(function (element) {
      $('.individualPrint').append(element.toHtml());
    });

  };

  portfolioView.printStats = function() {
    $('#fun-facts .portfolio-count').text('Number of portfolio items: ' +PortfolioCreation.all.length);
    $('#fun-facts .word-count').text('Total Wordcount: ' + PortfolioCreation.numWordsAll());
  };

  $(document).ready(function() {
    portfolioView.readMorePortfolio();
    portfolioView.printStats();
  });

  module.portfolioView = portfolioView;
})(window);
