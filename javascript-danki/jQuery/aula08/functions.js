$(function(){

   //Função append() para adicionar conteúdo/elementos no final do elemento selecionado
    //$('.box div').eq(0).append('<h3>Meu elemento adiciona dinamicamente pela funcção APPEND</h3>');

    var el = $('<h3>Meu conteúdo pelo Jquery</h3>').appendTo($('.box'));

    el.css('color', 'red').css('font-size', '40px');

    $('.box').prepend('<h3>Adicionado antes da classe "box"</h3>');

    var after = 'Adcionado após a div box'
    $('.box div').after(after);

    var before = 'Adcionado antes a div box'
    $('.box div').before(before);

    setTimeout(() => {
        $('.box').eq(1).remove()
    }, 3000);
    

});


