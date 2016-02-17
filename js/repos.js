//repos
(function(module) {
  var repos = {};
  repos.all =[];
//explain what this function does
  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/kbeame/repos?sort=updated',
      type: 'GET',
      dataType: 'json',
      headers: { 'Authorization': 'token ' + githubToken},
      success: function(data, message, xhr) {
        console.log(data);
        repos.all = data;
      }
    }).done(function() {
      callback();
    });
  };
//explain what this function does
  repos.with = function(attr) {
    console.log('gone through wtih function');
    return repos.all.filter(function(repo){
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
