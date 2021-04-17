$(function(){

    // $('body').on('click', 'a', function(){
    //     alert('Olá mundo')
    //     return false;
    // })

    // $('body').html('<a href="#">Meu link</a>');

    var func = function(){
        $(this).css('background', 'green');
        alert($(this).index());
    }
    $('input[type=text]').keyup(func);
});


