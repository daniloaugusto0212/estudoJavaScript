$(function(){

    abrirJanela();
    verificarCliqueFechar();

    function abrirJanela(){
        $('.btn').click(function(e){
            e.stopPropagation()
            $('.bg').fadeIn()
        })
    }

    function verificarCliqueFechar(){
        var el = $('body, .closeBtn')

        el.click(function(){
            $('.bg').fadeOut()
        })

        $('.form').click(function(e){
            e.stopPropagation()
        })
    }

    $('form#form1').submit(function(){
        var nome = $('input[name=nome]').val()
        var telefone = $('input[name=telefone]').val()
        var email = $('input[name=email]').val()

        //verificar se tem pelo menos 2 nomes
        var amount = nome.split(' ').length >= 2
        var splitStr = nome.split(' ')
        if (amount) {
            for (var i = 0; i < amount; i++) {
                if (splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {
                    console.log('Nossa condição bateu podemos dar continuidade')
                } else {
                    aplicarCampoInvalido($('input[name=nome]'))
                    return false
                }
            }
        } else {
            $('input[name=nome]').css('border', '2px solid red')
            $('input[name=nome]').data('invalido', true)
            return false
        }

    })

    function aplicarCampoInvalido(el) {
        el.css('border', '2px solid red')
        el.val('Campo Inválido!')
        el.data('invalido', true)
    }

});




