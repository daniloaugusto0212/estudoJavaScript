$(function(){

    $('.box').click(function(e){
        e.stopPropagation();
    })

    //Efeito acontece somente quando clica fora da box
    $('body').click(function(){
        $('.box').css('opacity', '0.1')
    })

});