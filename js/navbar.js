handleNav = function() {
  $('nav').on('click', '.tab', function() {
    var navVal = $(this).data('content');
    console.log(navVal);
  });

  $('nav .tab:first').click();
};

handleNav();
