$(function(){

    var timer;

    $(window).scroll(function(){
       // console.log('Scroll na tela')
    })

    $(window).resize(function(){
        //console.log('Tela sendo redimensionada.html')
        clearTimeout(timer);
        timer = setTimeout(function(){
            location.href = 'http://127.0.0.1:5500/javascript-danki/jQuery/aula03/index.html'    
        }, 1000)
    })

    $('a').click(function(e){
       // e.preventDefault();

       return false;
    })

});