
//nav tab feature
handleNav = function() {
  $('nav').on('click', '.tab', function() {
    var navVal = $(this).data('content');
    console.log(navVal);
    $('.close-tab').hide();
    $('section#' + navVal).fadeIn();
  });

  $('nav .tab:first').click();
};

handleNav();

//allow readmore function to display more than 2 paragraphs

readMorePortfolio = function() {
  $('.project-description *:nth-of-type(n+2)').hide();

  $('#to-portfolio').on('click', 'a.read-on', function(event) {
    event.preventDefault();
    $(this).parent().find('*').fadeIn('slow');
    $(this).hide();
  });
};
readMorePortfolio();
