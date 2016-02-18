//reposView
(function(module){
  var reposView = {};
  //makes $about the same as the jquery selector for the id about. empties the content of the ul.
  //shows the id of about content. hides all of the siblings of #about
  var ui = function() {
    var $to_portfolio = $('#to_portfolio');
    console.log($to_portfolio);
    $to_portfolio.find('ul').empty();
    $to_portfolio.show().siblings().hide();
  };
  //creates html as a variable equal to the content of an li as a paragraph with the repo anem and url in a paragraph.
//why can't I use the function?
  // var render = function(repo) {
  var render = Handlebars.compile($('#repo-template').text());
  //   return template;
  // };

  reposView.index = function() {
    ui();
    $('#to_portfolio ul').append(
      repos.with('stargazers_count').map(render)
    );
  };

  module.reposView = reposView;
})(window);
