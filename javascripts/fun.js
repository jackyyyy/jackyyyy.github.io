/*日月刎 825*/
$(function() {
	var run = false
	  , start;
	$("#start").on("click", function() {
		var numbers = $("#num").html()
		  , number = numbers.split(",")
		  , btn = $("#start").html()
		  , which;
		if(!run) {
			run = !run;
			$("#start").html($("#start").html().replace("Start","Stop"));
			start = setInterval(function() {
				which = number[Math.ceil(Math.random() * (number.length-1))];
				$(".choise-number").html(which);
				// $(".choise-number").css({
    //                 "background": "rgba("+ Math.ceil(Math.random() * 255) +","+ Math.ceil(Math.random() * 255) +","+ Math.ceil(Math.random() * 255) +","+1+")"
				// });
				$("<div class='circle'></div>").html("<span>"+which+"</span>").css({
					"top": Math.ceil(Math.random() * $(document).height()),
					"left": Math.ceil(Math.random() * $(document).width()),
                    // "background": "rgba("+ Math.ceil(Math.random() * 255) +","+ Math.ceil(Math.random() * 255) +","+ Math.ceil(Math.random() * 255) +","+.5+")"
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
			// $(".choise-number").html("SB");
		}
	})
})