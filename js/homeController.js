(function(module) {
  var homeController = {};

  homeController.index = function() {
    console.log('reached homeController.index');
    $('main').hide();

  };
  module.homeController = homeController;
})(window);
