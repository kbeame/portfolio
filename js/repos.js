//repos
(function(module) {
  var repos = {};
  repos.all =[];
//explain what this function does
  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/kbeame/repos' + '?per_page=5&sort=updated',
      type: 'GET',
      headers: { 'Authorization': 'token' + githubToken },
      success: function(data, message, xhr) {
        repos.all = data;
      }
    }).done(function() {
      callback();
    });
  };
//explain what this function does
  repos.with = function(attr) {
    return repos.all.filter(function(repo){
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
