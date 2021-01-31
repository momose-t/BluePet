// ナビゲーション
$('.menu dd').hide();
$('.menu dt').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('open');
})

$('.menu li').on('click', function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
})
// スライダー
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    loop: true,
    freeMode: true,
    loopedSlides: 6,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 6, 
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    thumbs: {
    swiper: galleryThumbs,
    },
});

