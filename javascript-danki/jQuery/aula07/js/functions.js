
$(function(){
    /*
        var el = $('.box')
    
        el.html("<div class='teste'>Meu elemento</div>")
    
        el.html(el.html() + '<h1 class="texto1">Título da página</h1>')
    
        var box2 = $('.box2')
        box2.text("<div></div>")
        box2.text(box2.text() +     "Olá Mundo")
    
        console.log(el.text())
    
        $('input[type=text]').val("Olá Mundo")
        $('textarea').text('Olá Mundo')
    
    */
        $('input[type=button]').click(function(){
            var v = $('input[type=text]').val()
            //var var2 = v.split("@")
    
            //console.log(var2)
    
            console.log(v.substr(0, 4))
        })
    
    })


