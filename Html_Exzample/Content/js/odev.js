$(document).ready(function ($) {
    $(".title").click(function () {

        var cont = $(this).parents("article");
        $('.content').slideUp(300);
        var active = cont.find('.title');
        $(".title").removeClass("active");


        if (active.hasClass('active')) {
            active.removeClass('active');
        } else {
            active.addClass('active');
        }

        var detail = cont.find('.content');
        if (detail.is(':hidden')) {

            detail.slideDown(300);
        } else {
            detail.slideUp(300);
            active.removeClass('active');
        }
    });
})