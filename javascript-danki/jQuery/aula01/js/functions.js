// $(function(){
//     alert('Olá');
// })

// $(document).read(function(){
//     alert('Hello')
// })

// $(window).on('load', function(){
//     alert('Olá')
// })
//O código funciona normalmente das 3 maneiras

$(function(){
    //alert('Olá');
    $('body').css('background', 'red');
    $('.artigo1').css('padding', '20px').css('background-color', '#ddd');

    setTimeout(function(){
        $('#teste').css('background-color', 'green');
    }, 2000);

})


