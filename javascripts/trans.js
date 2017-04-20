/* 日月刎 420 */
$(function() {
    function appendDom(dom) {
        var tmpDiv = [];
        if (dom == ".circle-item") {
            for (var i = 0; i < 18; i++) {
                tmpDiv.push('<div class="circle special-' + (i + 1) + '"><a class="special-icon special-earth">地球</a></div>');
            }
        } else if (dom == ".loading-special") {
            for (i = 0; i < 4; i++) {
                tmpDiv.push('<div class="loading"></div>');
            }
        } else if (dom == ".trans3d") {
            for (var i = 0; i < 8; i++) {
                tmpDiv.push('<div class="pc3d"> <img src="../images/' + (i + 1) + '.jpg"></div>');
            }
        }
        $(dom).append(tmpDiv.join(" "));
    }

    appendDom(".circle-item");
    appendDom(".loading-special");
    appendDom(".trans3d");

    //changeTest
    // var input1 = $("#test1"),
    //     input2 = $("#test2");
    // var inpArr = [input1, input2];
    // for (var i = 0; i < inpArr.length; i++) {
    //     if (inpArr[i].on) {
    //         inpArr[i].on("change", function() {
    //             console.log(this.value);
    //             $("#inp-cont").html(this.value);
    //         })
    //     }
    // }

    function rotateP(index) {
        var imgarr = $(".trans3d .pc3d");
        if (index) {
            console.log(imgarr.eq(index).css("transform"));
            if (index < imgarr.length / 2) {
                for (var i = 0; i < imgarr.length; i++) {
                    imgarr.eq(i).css("transform", "rotateY(" + (i - index) * 45 + "deg) translateZ(" + 300 + "px)");
                }
            } else {
                for (var i = 0; i < imgarr.length; i++) {
                    imgarr.eq(i).css("transform", "rotateY(" + (i + imgarr.length - index) * 45 + "deg) translateZ(" + 300 + "px)");
                }
            }
        } else {
            for (var i = 0; i < imgarr.length; i++) {
                imgarr.eq(i).css({
                    "transform": "rotateY(" + i * 45 + "deg) translateZ(" + 300 + "px)"
                });
            }
        }
    };
    rotateP();
    var inter = 0;
    var setInter = setInterval(function() {
        inter += 1;
        $("trans3d").css({
            "perspective-origin": inter + "% 100%"
        });
    }, 10)
    $(".pc3d").on("click", function() {
        rotateP($(this).index());
    });
})()
