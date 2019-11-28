var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: false
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(`.navbar`).removeClass(`navbar-light`);
            $(`.navbar`).addClass(`solid`);
            $(`.navbar`).addClass(`navbar-brandActive`);
            $(`.navbar`).removeClass(`trans`);
        }
        else if ($(document).scrollTop() < 50) {
            $(`.navbar`).removeClass(`solid`);
            $(`.navbar`).removeClass(`navbar-brandActive`);
            $(`.navbar`).addClass(`navbar-light`);
            $(`.navbar`).addClass(`trans`);
        }
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 900) {
            console.log('gooo??')
            $('#minion').slideDown(3000)
        }
    })

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1200) {
            console.log('golftime')
            $('#golf').slideDown(3000)
        }
    })
  
});





