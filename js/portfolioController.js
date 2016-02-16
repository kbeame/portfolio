(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    PortfolioCreation.retrieveAll(portfolioView.printToIndex);
    
    $('main > section').hide();
    $('#articles').show();
  };

  module.portfolioController = portfolioController;
})(window);
