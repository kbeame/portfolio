//reposView
(function(module){
  var reposView = {};
  //makes $about the same as the jquery selector for the id about. empties the content of the ul.
  //shows the id of about content. hides all of the siblings of #about
  var ui = function() {
    var $port = $('#to-portfolio');
    console.log($portfolio);
    $port.find('ul').empty();
    $port.show().siblings().hide();
  };
  //creates html as a variable equal to the content of an li as a paragraph with the repo anem and url in a paragraph.
  var renderList = function(repo) {
    var html = $('<li>').html('<p>' + repos.name + '_' + repos.stargazers_url + '</p>');
    return html;
  };
  reposView.index = function() {
    ui();
    $('#to-portfolio ul').append(
      repos.with('name').map(renderList)
    );
  };

  module.reposView = reposView;
})(window);
