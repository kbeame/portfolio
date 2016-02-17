(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    console.log('reached portfolioController.index');
    // PortfolioCreation.retrieveAll(portfolioView.printToIndex);
    $('main > section').hide();
    $('#to-portfolio').show();
    repos.requestRepos(reposView.index);
  };
  PortfolioCreation.all = [];
  module.portfolioController = portfolioController;
})(window);
