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
