$(function(){

    $('.box1').addClass('minhaClasse')

    //$('.minhaClasse').remove()

    $('.box1').removeClass('minhaClasse')

    var el = $('.box1').find('.child1').find('.child2')
    
    el.css('color', 'green')

    $('minhatag').attr('meuattr', 'outro valor')

    alert($('minhatag').attr('meuattr'))

});




