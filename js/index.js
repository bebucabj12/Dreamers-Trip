$(document).ready(function(){
    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });

    //Post
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: "Publicado el dia " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY") ,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores laborum id minus repellendus nisi sapiente accusamus cupiditate. Quos soluta ipsam dolorum possimus. Voluptatibus magnam corrupti quod asperiores nisi numquam!'
        },
        {
            title: 'Prueba de titulo 2',
            date: "Publicado el dia " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY") ,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores laborum id minus repellendus nisi sapiente accusamus cupiditate. Quos soluta ipsam dolorum possimus. Voluptatibus magnam corrupti quod asperiores nisi numquam!'
        },
        {
            title: 'Prueba de titulo 3',
            date: "Publicado el dia " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY") ,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores laborum id minus repellendus nisi sapiente accusamus cupiditate. Quos soluta ipsam dolorum possimus. Voluptatibus magnam corrupti quod asperiores nisi numquam!'
        },
        {
            title: 'Prueba de titulo 4',
            date: "Publicado el dia " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY") ,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores laborum id minus repellendus nisi sapiente accusamus cupiditate. Quos soluta ipsam dolorum possimus. Voluptatibus magnam corrupti quod asperiores nisi numquam!'
        },
        {
            title: 'Prueba de titulo 5',
            date: "Publicado el dia " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY") ,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores laborum id minus repellendus nisi sapiente accusamus cupiditate. Quos soluta ipsam dolorum possimus. Voluptatibus magnam corrupti quod asperiores nisi numquam!'
        },
];

posts.forEach((item, index) => {
    var post = `
    <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
    </article>
    `;
    $("#posts").append(post);
});
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
    }

});