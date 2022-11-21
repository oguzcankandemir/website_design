$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 3,
        slideBy: 2,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        responsive: {
            0: {
                items: 1,
                loop: false,
                autoplay: false,
                dots: true
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
})