$(function(){

    $.ajax({
        'url': 'conteudo.html',
        //'method': 'post',
        //data: {'nome': 'Danilo', 'idade': '35'}
    }).done(function(data){
        $('#container').append(data)
    })

});




