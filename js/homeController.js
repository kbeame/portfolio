(function(module) {
  var homeController = {};

  homeController.index = function() {
    console.log('reached homeController.index');
    $('main > section').hide();

  };
  module.homeController = homeController;
})(window);
