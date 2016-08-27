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

    $(".cerrar").click(function(evento){
        $('.overlay').css('display', 'none');
        $('.modal1').css('display', 'none');
        $('.modal2').css('display', 'none');
        $('.modal3').css('display', 'none');
    });
});