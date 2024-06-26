var totalItems = $('.item-01').length;
var currentIndex = $('div.carousel-item').index() + 1;
var down_index;
$('.num-01').html('' + currentIndex + '&nbsp;/&nbsp;' + totalItems + '');
$(".next-01").click(function() {
  currentIndex_active = $('div.carousel-item.active').index() + 2;
  if (totalItems >= currentIndex_active) {
    down_index = $('div.carousel-item.active').index() + 2;
    $('.num-01').html('' + currentIndex_active + '&nbsp;/&nbsp;' + totalItems + '');
  } else {
    down_index = 1; //just to make 0 to go to else part when back button is clicked
    $('.num-01').html('1' + '&nbsp;/&nbsp;' + totalItems + '');

  }
});

$(".prev-01").click(function() {
  down_index = down_index - 1;
  if (down_index >= 1) {
    $('.num-01').html('' + down_index + '&nbsp;/&nbsp;' + totalItems + '');
  } else {
    down_index = totalItems; //last slide value 
    $('.num-01').html('' + totalItems + '&nbsp;/&nbsp;' + totalItems + '');
  }
});