/*日月刎 825*/
$(function() {
	var run = false
	  , start;
	$("#start").on("click", function() {
		var numbers = $("#num").html()
		  , number = numbers.split(",")
		  , btn = $("start").html()
		  , which;
		if(!run) {
			run = !run;
			$("#start").html($("#start").html().replace("Start","Stop"));
			start = setInterval(function() {
				which = number[Math.ceil(Math.random() * (number.length-1))];
				$(".choise-number").html(which);
				$("<div class='circle'></div>").html(which).css({
					"top": Math.ceil(Math.random() * $(document).height()),
					"left": Math.ceil(Math.random() * $(document).width()),
                    "color": "#ff6666",
                    // "background": '#'+('000000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
				}).appendTo("body").fadeIn("slow", function() {
					$(this).fadeOut("slow", function() {
						$(this).remove();
					})
				})
			}, 50);
		} else {
			run = !run;
			$("#start").html($("#start").html().replace("Stop","Start"));
			clearInterval(start);
		}
	})
})