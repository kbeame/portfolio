(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    console.log('reached portfolioController.index');
    PortfolioCreation.retrieveAll(portfolioView.printToIndex);

    $('main > section').hide();
    $('#to-portfolio').show();
  };

  module.portfolioController = portfolioController;
})(window);
