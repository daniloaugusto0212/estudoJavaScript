$(function(){

    var timer;
    var timeOut = function(){
        $('.box2').animate({
            'width': '40%',
            'height': '500px',
            'marginLeft': '100px',
            'paddinTop': '200px'
        }, 2000);
    }

    $('body').click(function(){
        alert('Animação com timeOut foi cancelada')
        clearTimeout(timer);
    })

   $('.box1').animate({
       'width': '40%',
       'height': '500px',
       'marginLeft': '100px',
       'paddinTop': '200px'
   }, 2000, function(){
       timer = setTimeout(timeOut, 3000)
   });

   var tempo

   $('body').click(function(){
        alert('Intervalo cancelado')
        clearInterval(tempo)
    })

   tempo = setInterval(function(){
        //alert('Olá mundo')       
    }, 3000)

});




