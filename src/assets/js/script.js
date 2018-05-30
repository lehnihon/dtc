(function ($) {

  $('.sidebar-nav-link').on('click' ,function(){
    alert('teste');
  })

  $('.btn-sidebar').on('click', function () {
    alert('teste');
    $('.app-sidebar').show('slow');
  });

  $('[data-dismiss="sidebar"]').on('click', function () {
    $('.app-sidebar').hide('slow');
  });
})(jQuery);
