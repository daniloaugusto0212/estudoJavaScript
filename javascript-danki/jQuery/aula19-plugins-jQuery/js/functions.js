$(function(){

    /*
    Plugin Social Media

    Buscar outros tipos de botões em http://js-socials.com/demos/
    */

    $('#social-share').jsSocials({
        shareIn: "popup",
        shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp", { share: "whatsapp", label: "teste" },]
    });



    /*
    Plugin Mask
    */

    $('input[name=telefone]').mask('(99)99999-9999');
    $('input[name=data]').mask('99/99/9999');


    

});




