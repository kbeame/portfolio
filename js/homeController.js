(function(module) {
  var portfolioController = {};

  homeController.index = function() {
    console.log('reached homeController.index');

    $('main > section').hide();

  };
  module.portfolioController = portfolioController;
})(window);
