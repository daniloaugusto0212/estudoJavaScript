$(function(){

    function validarCliqueHover(){
        $('artigo1').click(function(){
            $('.artigo2').css('background-color', 'purple');
        });

        $('.artigo1').hover(function(){
            $('.artigo2').css('background-color', 'red')
        }, function(){
            $('.artigo2').css('background-color', 'rgb(50, 50, 51)')
        })
    }

    function cliqueDentroFora(){

        $('textarea').focus(function(){
            console.log('Estou dentro do textarea')
        }).blur(function(){
            console.log('Estou fora do textarea')
        })
    }

    function validarFormulario(){
        $('select').change(function(){
            console.log('Meu select foi alterado')
        })
    }

    validarFormulario()
    cliqueDentroFora()
    validarCliqueHover()

});


