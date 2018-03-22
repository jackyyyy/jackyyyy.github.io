/* 日月刎 420 */
$(function() {
    function appendDom(dom) {
        var tmpDiv = [];
        if (dom == ".circle-item") {
            for (var i = 0; i < 18; i++) {
                tmpDiv.push('<div class="circle special-' + (i + 1) + '"><a class="special-icon special-earth">地球</a></div>');
            }
        } else if (dom == ".loading-special") {
            for (var i = 0; i < 4; i++) {
                tmpDiv.push('<div class="loading loading' + i + '"></div>');
            }
            var textArr = [
                {url: "../images/movie/a.png", moviename: "澳门风云", moviecontent: "闻名中外，曾担任美国赌场保安总顾问的魔术手石一坚，终回流澳门退休，更宴请各方朋友到来庆祝生日宴."},
                {url: "../images/movie/b.png", moviename: "改过迁善", moviecontent: "该剧讲述了金明民饰演的律师在失忆后回顾自己以往的所作所为心生忏悔，为弥补自己犯下的错误而与自己曾经工作过的律师事务所对簿公堂的故事."},
                {url: "../images/movie/c.png", moviename: "父子刑警", moviecontent: "本剧改编自雫井修介小说《Bitter Blood》。剧中，新晋刑警•佐原夏辉（佐藤健饰）被分配到银座警察."},
                {url: "../images/movie/d.png", moviename: "果宝特攻3", moviecontent: "果宝特攻3,顾名思义是果宝特攻的第二部续集,已在国家广播电影电视总局备案.暂定剧情为:菠萝吹雪偶然间穿越到了古代的水果世界."},
                {url: "../images/movie/e.png", moviename: "红眼", moviecontent: "1988年7月16日，从汉城始发的列车发生了一起严重的交通事故，造成100多人死亡."},
                {url: "../images/movie/f.png", moviename: "熊出没之夺宝熊兵", moviecontent: "一场漆黑雨夜的意外事故，一段笑料十足的误打误撞，将两个外表相似却内容各异的箱子调换."},
            ]
            var rt_div = ['<div id="container_rt">'];
            for (var j = 0; j < 6; j++) {
                rt_div.push('<div class="wrapper_rt">'+
                    '<div class="item_rt">'+
                        '<img src="'+ textArr[j].url +'" />'+
                        '<span class="information">'+
                        '<strong>'+textArr[j].moviename+'</strong>'+ textArr[j].moviecontent +'</span>'+
                    '</div>'+
                '</div>')
            }
            rt_div.push('</div>');
            rt_div.join(" ");
            tmpDiv.push(rt_div.join(" "));
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

    function rotateP(index) {
        var imgarr = $(".trans3d .pc3d");
        if (index) {
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
})
