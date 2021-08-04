$(function(){

    $('.box1').fadeOut(2000, function(){
        $('.box2').fadeIn(1000, function(){
            console.log('Terminamos nossa animação')
        });
    });



    $('.box3').click(function(){
        $('.box4').slideToggle(4000, function(){
            location.href="https://google.com"
        })
    })

});




