window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider_lista_m'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.dots_m',
        draggable: true,
        arrows: {
            prev: '.button_left_m',
            next: '.button_right_m'
        },
    });
    new Glider(document.querySelector('.glider_lista_t'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.dots_t',
        draggable: true,
        arrows: {
            prev: '.button_left_t',
            next: '.button_right_t'
        },
    });
    new Glider(document.querySelector('.glider_lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.dots',        
        arrows: {
            prev: '.button_left',
            next: '.button_right'
        },
    });

});



//probar hacer 3 clases para los gliders