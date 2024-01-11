(function test() {
    var name = document.getElementById('name').Value;
    var mail = document.getElementById('mail').Value;
    var mass = document.getElementById('mass').Value;
    if (name == "" || mail == "" || mass == "") {
        // alert("maybe name,mail or message can`t be blank");

        return false;

    } else

        alert("done")
    return true;

});
AOS.init();
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive

    });

});