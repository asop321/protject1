const btt=$('#back-to-top');
$(window).scroll(function(){
    if($(window).scrollTop() > 500){
    btt.addClass('visible');
}else{
    btt.removeClass('visible')
}
})
btt.click(function(e){
e.preventDefault();
$('html,body').animate({
    scrollTop : 0
}, 700);
})
