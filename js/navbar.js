
//nav tab feature
handleNav = function() {
  $('nav').on('click', '.tab', function() {
    var navVal = $(this).data('content');
    console.log(navVal);
    $('.close-tab').hide();
    $('section#' + navVal).fadeIn();
  });
  $('.close-tab').hide();
  //I don't want the 'portfolio' info to show up first. I only want it if I click on portfolio.
  // $('nav .tab:first').click();
};

readMorePortfolio = function() {
  $('.project-description *:nth-of-type(n+2)').hide();

  $('#to-portfolio').on('click', 'a.read-on', function(event) {
    event.preventDefault();
    $(this).parent().find('*').fadeIn('slow');
    $(this).hide();
  });
};

$(document).ready(function() {
  handleNav();
  readMorePortfolio();
});
