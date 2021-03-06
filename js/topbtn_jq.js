/* top btn */
const btt = $('#back-to-top')
$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    btt.addClass('visible')
  } else {
    btt.removeClass('visible')
  }
})
btt.click(function (e) {
  e.preventDefault()
  $('html,body').animate(
    {
      scrollTop: 0,
    },
    700,
  )
})

/* .visitor-icon */
var btn1 = $('.btn1')
var btn2 = $('.btn2')
;
var icon1 = $('.visitor-icon1')
var icon2 = $('.visitor-icon2')
icon2.hide()
btn2.click(function () {
  //btn2 클릭시
  btn1.removeClass('before') //btn1에 before 클래스를지움
  btn2.addClass('before')
  icon1.hide() //icon1 없애
  icon2.show() //보여
})
btn1.click(function () {
  btn1.addClass('before') //btn1에 before 클래스를지움
  btn2.removeClass('before')
  icon1.show()
  icon2.hide()
})

/* 국민건강알람서비스 */
$(".btn-h-1").click(function(){
  $(".graph ul li div").removeClass("on");
  $(".graph ul li div.level-1").addClass("on");
  $(".graph ul li div .state").hide();
  $(".graph ul li div .state1").show();

});
$(".btn-h-2").click(function(){
  $(".graph ul li div").removeClass("on");
  $(".graph ul li div.level-2").addClass("on");
  $(".graph ul li div .state").hide();
  $(".graph ul li div .state2").show();

});
$(".btn-h-3").click(function(){
  $(".graph ul li div").removeClass("on");
  $(".graph ul li div.level-3").addClass("on");
  $(".graph ul li div .state").hide();
  $(".graph ul li div .state3").show();

});
$(".btn-h-4").click(function(){
  $(".graph ul li div").removeClass("on");
  $(".graph ul li div.level-4").addClass("on");
  $(".graph ul li div .state").hide();
  $(".graph ul li div .state4").show();

});

$(".btn-h-5").click(function(){
  $(".graph ul li div").removeClass("on");
  $(".graph ul li div.level-5").addClass("on");
  $(".graph ul li div .state").hide();
  $(".graph ul li div .state5").show();

});



/* 셋인터벌 */

$(function(){
  var idx = 0;
  setInterval(time, 1000);
  function time(){
    var box = $('.main-policy dl dd a p');
    box.removeClass('on');
    box.eq(idx).addClass('on');
    idx++;
    if(idx >= box.length) idx= 0;
  }
});