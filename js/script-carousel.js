// Bootstrap carousel current and total items counter...
$('.numslide').each(function () {
  var total = $(this).parents('.carousel').find('.carousel-inner .item').length;
  $(this).text('1 of ' + total);
});

$('.carousel').on('slid.bs.carousel', function () {
  var carouselData = $(this).data('bs.carousel');
  var currentIndex = $(this).find('.active').index();
  var total = carouselData.$items.length;

  var txt = (currentIndex + 1) + ' of ' + total;
  $(this).find('.numslide').text(txt);
});






// Bootstrap 4.X carousel current and total items counter...
let elCarousel = $('.carousel');
let elCarouselItem = $('.carousel-item');
let elCarouselCounter = $('.crsl_slide-counter');

elCarousel.each(function () {
let $carousel = $(this);
let totalItems = $carousel.find(elCarouselItem).length;
if (totalItems < 10) {
  totalItems = '0' + totalItems;
}
$carousel.find(elCarouselCounter).html('01/' + totalItems + '');
});

elCarousel.on('slid.bs.carousel', function () {
let $carousel = $(this);
let currentIndex = $carousel.find('div.active').index() + 1;
if (currentIndex < 10) {
  currentIndex = '0' + currentIndex
}
let ti = $carousel.find(elCarouselItem).length;
if (ti < 10) {
  ti = '0' + ti;
}
$carousel.find(elCarouselCounter).html('' + currentIndex + '/' + ti + '');
});