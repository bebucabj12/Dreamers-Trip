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

    //Scroll
    $(".button-up").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 800);    
    });

    //Login
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name")

    if(form_name !=null && form_name != "undefined"){
        var saludo = $("#about p");

        saludo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
        $("#login").hide();
        saludo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        })
    };

    //Acordeon
    $("#acordeon").accordion();

});