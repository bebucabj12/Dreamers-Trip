$(document).ready(function(){

    //Selector de tema
    var theme = $("#theme");
    
    $("#to-pink").click(function(){
        theme.attr("href", "css/pink.css")
    })

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css")
    })

    $("#to-orange").click(function(){
        theme.attr("href", "css/orange.css")
    })    

    //errores del formulario (validacion)
    $.validate({
        lang: 'es',
        validateOnBlur : false,
        errorMessagePosition: 'top',
        scrollToTopOnError: true,
    });
});