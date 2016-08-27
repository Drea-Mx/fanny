$(document).ready(function(){
    $("#video1").click(function(evento){
        $('.overlay').css('display', 'flex');
        $('.modal1').css('display', 'block');
    });
    $("#video2").click(function(evento){
        $('.overlay').css('display', 'flex');
        $('.modal2').css('display', 'block');
    });
    $("#video3").click(function(evento){
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