$(document).ready(function(){

    setInterval(() => {
        var relojArg = moment().format('hh:mm a');
        $('#relojArg').html(relojArg);

    }, 1000)

    setInterval(() => {
        var relojNewYork = moment.tz("America/New_York").format('hh:mm a');
        $('#relojNewYork').html(relojNewYork);

    }, 1000)

    setInterval(() => {
        var relojAmsterdam = moment.tz("Europe/Amsterdam").format('hh:mm a');
        $('#relojAmsterdam').html(relojAmsterdam);

    }, 1000)

    setInterval(() => {
        var relojMoscow = moment.tz("Europe/Moscow").format('hh:mm a');
        $('#relojMoscow').html(relojMoscow);

    }, 1000)

    setInterval(() => {
        var relojBerlin = moment.tz("Europe/Berlin").format('hh:mm a');
        $('#relojBerlin').html(relojBerlin);

    }, 1000)

    setInterval(() => {
        var relojDarwin = moment.tz("Australia/Darwin").format('hh:mm a');
        $('#relojDarwin').html(relojDarwin);

    }, 1000)

    setInterval(() => {
        var relojMadrid = moment.tz("Europe/Madrid").format('hh:mm a');
        $('#relojMadrid').html(relojMadrid);

    }, 1000)

    setInterval(() => {
        var relojRoma = moment.tz("Europe/Rome").format('hh:mm a');
        $('#relojRoma').html(relojRoma);

    }, 1000)

    setInterval(() => {
        var relojPtoRico = moment.tz("America/Puerto_Rico").format('hh:mm a');
        $('#relojPtoRico').html(relojPtoRico);

    }, 1000)

    setInterval(() => {
        var relojSanPablo = moment.tz("America/Sao_Paulo").format('hh:mm a');
        $('#relojSanPablo').html(relojSanPablo);

    }, 1000)



});