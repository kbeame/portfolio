//repos
(function(module) {
  var repos = {};
  repos.all =[];
//explain what this function does
  repos.requestRepos = function(callback) {
    $.get('https://api.github.com/users/kbeame/repos?sort=updated')
      .done(function(data, message, xhr) {
        repos.all = data;
      }).done(callback);
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
