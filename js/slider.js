

 	var customSlide = $(".main-banner").bxSlider({
    mode:'vertical',
    pager:false,
    auto:true,
    pause:3000,
    autoHover:true,
    nextSelector:'.text-controls .banner-controls .text-next',
    prevSelector:'.text-controls .banner-controls .text-prev',
    startText: '<i class="fas fa-play"></i>',
    stopText: '<i class="fas fa-stop"></i>',
    autoControls:true,

    });

/* .event-banner-zone 이벤트 슬라이더 */
$(function () {
  $('.event-control-slider').bxSlider({
    pager: false,
  })
}) //document ready jquery
$('.event-control-slider').bxSlider({
  nextText: '<i class="fas fa-chevron-right"></i>',
  prevText: '<i class="fas fa-chevron-left"></i>',
  startText: '<i class="fas fa-play"></i>',
  stopText: '<i class="fas fa-stop"></i>',
  auto: true,
  pause: 3000,
  autoHover: true,
  pager: true,
  autoControls:true,
})

/* .banner-zone2 홍보존 슬라이더 */
$(function () {
  $('.control-slider').bxSlider({
    pager: false,
  })
}) //document ready jquery

$('.control-slider').bxSlider({
  nextText: '<i class="fas fa-chevron-right"></i>',
  prevText: '<i class="fas fa-chevron-left"></i>',
  startText: '<i class="fas fa-play"></i>',
  stopText: '<i class="fas fa-stop"></i>',
  auto: true,
  pause: 3000,
  autoHover: true,
  pager: true,
  autoControls:true,
})




