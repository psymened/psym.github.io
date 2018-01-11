$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(window).on('scroll', function() {
    $('#header').toggleClass('fixed', $(this).scrollTop() > 50);
});

$(function(){
  var topBtn=$('#pageTop');
  topBtn.hide();

  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    }
  });
});
