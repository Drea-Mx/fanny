$(document).ready(function(){
    $(".hover-pink1").click(function(evento){
        $('.overlay').css('display', 'flex');
        $('.modal1').css('display', 'block');
    });
    $(".hover-pink2").click(function(evento){
        $('.overlay').css('display', 'flex');
        $('.modal2').css('display', 'block');
    });
    $(".hover-pink3").click(function(evento){
        $('.overlay').css('display', 'flex');
        $('.modal3').css('display', 'block');
    });

    $(".hamburger").click(function(evento){
        $('.overlay').css('display', 'flex');
        $('.menu-responsive').css('display', 'block');
    });

    $(".cerrar").click(function(evento){
        $('.overlay').css('display', 'none');
        $('.modal1').css('display', 'none');
        $('.modal2').css('display', 'none');
        $('.modal3').css('display', 'none');
    });

    $(".overlay").click(function(evento){
        $('.overlay').css('display', 'none');
        $('.modal1').css('display', 'none');
        $('.modal2').css('display', 'none');
        $('.modal3').css('display', 'none');
        $('.menu-responsive').css('display', 'none');
    });

    $(".hide").click(function(evento){
        $('.overlay').css('display', 'none');
        $('.modal1').css('display', 'none');
        $('.modal2').css('display', 'none');
        $('.modal3').css('display', 'none');
        $('.menu-responsive').css('display', 'none');
    });




    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


});