var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-btn.next',
        prevEl: '.swiper-btn.prev',
    },
});

$("#toggleCatalogue").click(function () {
    $(this).parents(".nav-list_item").toggleClass('active');
});
$("#toggleCollapse").click(function () {
    var parentNode = $(this).parents(".nav-list_collapse");
    $(parentNode).toggleClass('active');
    $(parentNode).siblings(".nav-list").toggleClass('active');
});
