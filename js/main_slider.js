


const visual = $("#brandVisual ul.visual_slide li");
const visualCount = visual.length;
const leftBtn = $(".btnImg>.prev");
const rightBtn = $(".btnImg>.next");
let current = 0;
const pager = $(".buttonList>li");
let setIntervalId =null;

let visualPos = visual.each(function (i) {

	$(this).css("left", i * 100 + "%");
});
function timer() {
	setIntervalId=setInterval(function () {
		var prev = visual.eq(current);
		var prevpager = pager.eq(current);
		move(prev, 0, "-100%");
		prevpager.removeClass("on");
		current++;
		if (current == visualCount) current = 0;
		var next = visual.eq(current);
		var nextpager = pager.eq(current);
		move(next, "100%", "0%");
		nextpager.addClass("on");
		
	}, 3000);
}
function move(tg, start, end) {
	tg.css("left", start).animate({ left: end }, 1000);
}
visual.on({
	mouseover: function () {
		clearInterval(setIntervalId);
	},
	mouseout: function () {
		timer();
	}
});


//오른쪽버튼을 클릭하면 할일
rightBtn.click(function () {
	var prev = visual.eq(current);
	move(prev, 0, "-100%");
	current++;
	if (current == visualCount) current = 0;
	var next = visual.eq(current);
	move(next, "100%", "0%");
	return false;
});

//왼쪽버튼을 클릭하면 할일
leftBtn.click(function () {
	var prev = visual.eq(current); //0
	move(prev, 0, "100%");
	current--;
	console.log(current);
	if (current == -visualCount) current = 0;
	var next = visual.eq(current);
	move(next, "-100%", "0%");
	return false;
});

/* ------------------
페이저 추가
------------------ */
pager.click(function () {
	var tg = $(this);
	var i = tg.index();
	pager.removeClass("on");
	tg.addClass("on");
	move1(i);
});

/* 왼쪽에서 오른쪽으로 슬라이드 */
function move1(i) {
	if (current == i) return;
	var currentEl = visual.eq(current);
	var nextEl = visual.eq(i);
	//console.log('currentEl',currentEl,'nextEl',nextEl );
	currentEl.css("left", "0").stop().animate({ left: "-100%" }, 500);
	nextEl.css("left", "100%").stop().animate({ left: "0%" }, 500);
	current = i;
}