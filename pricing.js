$(document).ready(function() {
    priceHovered();
});

function priceHovered() {
    $("#node-box-1").hover(
        function () {
             $("#node-box-1 .img-chip").fadeOut(1000, function() {
                   $("#node-box-1 .img-chip").prop("src", "https://uploads-ssl.webflow.com/5e4cf0c7e19c924b448d0560/5ee657d5b71cb46d0b7869fa_blue-processor.gif");
             }).fadeIn(1000);
            }),
                $("#node-box-1 .price-node-holder").css("color", "#68a9d8"),
                $("#node-box-1 .price-node-holder span").css("color", "#68a9d8");
        },
        function () {
            $("#node-box-1 .img-chip").fadeIn(1000, function () {
                $("#node-box-1 .img-chip").prop("src", "https://uploads-ssl.webflow.com/5e4cf0c7e19c924b448d0560/5e7e1db76504fe23c40f14c6_Vector-2.png");
            }),
                $("#node-box-1 .price-node-holder").prop("style", "color:rgb(102, 102, 102)"),
                $("#node-box-1 .price-node-holder span").prop("style", "color:rgb(102, 102, 102)");
        }
    ),
        $("#node-box-2").hover(
            function () {
                $("#node-box-2 .img-chip").fadeIn(500, function () {
                    $("#node-box-2 .img-chip").prop("src", "https://uploads-ssl.webflow.com/5e4cf0c7e19c924b448d0560/5ee657d5b71cb46d0b7869fa_blue-processor.gif");
                }),
                    $("#node-box-2 .price-node-holder").css("color", "#68a9d8"),
                    $("#node-box-2 .price-node-holder span").css("color", "#68a9d8");
            },
            function () {
                $("#node-box-2 .img-chip").fadeIn(500, function () {
                    $("#node-box-2 .img-chip").prop("src", "https://uploads-ssl.webflow.com/5e4cf0c7e19c924b448d0560/5e7e1db76504fe23c40f14c6_Vector-2.png");
                }),
                    $("#node-box-2 .price-node-holder").prop("style", "color:rgb(102, 102, 102)"),
                    $("#node-box-2 .price-node-holder span").prop("style", "color:rgb(102, 102, 102)");
            }
        ),
        $("#node-box-3").hover(
            function () {
                $("#node-box-3 .img-chip").fadeIn(500, function () {
                    $("#node-box-3 .img-chip").prop("src", "https://uploads-ssl.webflow.com/5e4cf0c7e19c924b448d0560/5ee657d5b71cb46d0b7869fa_blue-processor.gif");
                }),
                    $("#node-box-3 .price-node-holder").css("color", "#68a9d8"),
                    $("#node-box-3 .price-node-holder span").css("color", "#68a9d8");
            },
            function () {
                $("#node-box-3 .img-chip").fadeIn(500, function () {
                    $("#node-box-3 .img-chip").prop("src", "https://uploads-ssl.webflow.com/5e4cf0c7e19c924b448d0560/5e7e1db76504fe23c40f14c6_Vector-2.png");
                }),
                    $("#node-box-3 .price-node-holder").prop("style", "color:rgb(102, 102, 102)"),
                    $("#node-box-3 .price-node-holder span").prop("style", "color:rgb(102, 102, 102)");
            }
        ),
        $("#node-box-4").hover(
            function () {
                $("#node-box-4 .img-chip").fadeIn(500, function () {
                    $("#node-box-4 .img-chip").prop("src", "https://uploads-ssl.webflow.com/5e4cf0c7e19c924b448d0560/5ee657d5b71cb46d0b7869fa_blue-processor.gif");
                }),
                    $("#node-box-4 .price-node-holder").css("color", "#68a9d8"),
                    $("#node-box-4 .price-node-holder span").css("color", "#68a9d8");
            },
            function () {
                $("#node-box-4 .img-chip").fadeIn(500, function () {
                    $("#node-box-4 .img-chip").prop("src", "https://uploads-ssl.webflow.com/5e4cf0c7e19c924b448d0560/5e7e1db76504fe23c40f14c6_Vector-2.png");
                }),
                    $("#node-box-4 .price-node-holder").prop("style", "color:rgb(102, 102, 102)"),
                    $("#node-box-4 .price-node-holder span").prop("style", "color:rgb(102, 102, 102)");
            }
        ),
        $("#node-box-5").hover(
            function () {
                $("#node-box-5 .gpu-chip").fadeIn(500, function () {
                    $("#node-box-5 .gpu-chip").prop("src", " https://uploads-ssl.webflow.com/5e4cf0c7e19c924b448d0560/5ee6616740ea6e25d2d66802_img-1.png");
                }),
                    $("#node-box-5 .price-node-holder").css("color", "#68a9d8"),
                    $("#node-box-5 .price-node-holder span").css("color", "#68a9d8");
            },
            function () {
                $("#node-box-5 .gpu-chip").fadeIn(500, function () {
                    $("#node-box-5 .gpu-chip").prop("src", "https://uploads-ssl.webflow.com/5e4cf0c7e19c924b448d0560/5e5902a72804b227309ea4ab_icons8-video-card-100.png");
                }),
                    $("#node-box-5 .price-node-holder").prop("style", "color:rgb(102, 102, 102)"),
                    $("#node-box-5 .price-node-holder span").prop("style", "color:rgb(102, 102, 102)");
            }
        );
        $("#node-box-6").hover(
            function () {
                $("#node-box-6 .gpu-chip").fadeIn(500, function () {
                    $("#node-box-6 .gpu-chip").prop("src", " https://uploads-ssl.webflow.com/5e4cf0c7e19c924b448d0560/5ee6616740ea6e25d2d66802_img-1.png");
                }),
                    $("#node-box-6 .price-node-holder").css("color", "#68a9d8"),
                    $("#node-box-6 .price-node-holder span").css("color", "#68a9d8");
            },
            function () {
                $("#node-box-6 .gpu-chip").fadeIn(500, function () {
                    $("#node-box-6 .gpu-chip").prop("src", "https://uploads-ssl.webflow.com/5e4cf0c7e19c924b448d0560/5e5902a72804b227309ea4ab_icons8-video-card-100.png");
                }),
                    $("#node-box-6 .price-node-holder").prop("style", "color:rgb(102, 102, 102)"),
                    $("#node-box-6 .price-node-holder span").prop("style", "color:rgb(102, 102, 102)");
            }
        );
}
function tobeLine() {
    $(".reg").hover(
        function () {
            $(".reg .to-be-line").addClass("special");
        },
        function () {
            $(".reg .to-be-line").removeClass("special");
        }
    );
}
function tableCollapse() {
    jQuery.fn.extend({
        toggleText: function (o, e) {
            return this.html() != o && this.html() != e ? this.html(o) : this.html() == o ? this.html(e) : this.html() == e && this.html(o), this;
        },
    }),
        $(".show-more").click(function () {
            $(".collapsex").toggle("swing"), jQuery(".show-more").toggleText("hide", "show more");
        });
}
function nodeToolTip() {
    $("#node-box-1 #tooltip-1").hover(
        function () {
            $("#node-box-1 .cpu-tooltip").removeClass("hide");
        },
        function () {
            $("#node-box-1 .cpu-tooltip").addClass("hide");
        }
    ),
        $("#node-box-2 #tooltip-2").hover(
            function () {
                $("#node-box-2 .cpu-tooltip").removeClass("hide");
            },
            function () {
                $("#node-box-2 .cpu-tooltip").addClass("hide");
            }
        ),
        $("#node-box-3 #tooltip-3").hover(
            function () {
                $("#node-box-3 .cpu-tooltip").removeClass("hide");
            },
            function () {
                $("#node-box-3 .cpu-tooltip").addClass("hide");
            }
        ),
        $("#node-box-4 #tooltip-4").hover(
            function () {
                $("#node-box-4 .cpu-tooltip").removeClass("hide");
            },
            function () {
                $("#node-box-4 .cpu-tooltip").addClass("hide");
            }
        ),
        $("#node-box-5 #tooltip-5").hover(
            function () {
                $("#node-box-5 .cpu-tooltip").removeClass("hide");
            },
            function () {
                $("#node-box-5 .cpu-tooltip").addClass("hide");
            }
        ),
        $("#node-box-6 #tooltip-6").hover(
            function () {
                $("#node-box-6 .cpu-tooltip").removeClass("hide");
            },
            function () {
                $("#node-box-6 .cpu-tooltip").addClass("hide");
            }
        );
}
function toolTipEvent() {
    $(".tool-tip-data").hover(
        function () {
            $(".tool-tip-content").removeClass("hide"), $(".tool-tip-content").addClass("show");
        },
        function () {
            $(".tool-tip-content").removeClass("show"), $(".tool-tip-content").addClass("hide");
        }
    );
}
function toggleSwitch() {
    $('.switch input[type="checkbox"]').click(function () {
        1 == $(this).prop("checked")
            ? ($(".cpu_lbl p").attr("style", "color:#b0b0b0 !important"), $(".gpu_lbl p").attr("style", "color:#444444 !important"), $(".pricing-boxes").hide(), $(".pricing-boxes_gpu").show())
            : 0 == $(this).prop("checked") && ($(".cpu_lbl p").attr("style", "color:#444444 !important"), $(".gpu_lbl p").attr("style", "color:#b0b0b0 !important"), $(".pricing-boxes_gpu").hide(), $(".pricing-boxes").show());
    });
}
function labeledHandler(o) {
    var e = $("#custom-handle");
    e.html('<div class="percent-div">0%</div><div class="amount-value">$0</div>'),
        100 != o.procent
            ? e.html('<div class="percent-div">' + o.procent + '%</div><div class="amount-value">$' + o.val + "</div>")
            : e.html('<div class="percent-div" style="display:none !important;">' + o.procent + '%</div><div class="amount-value" style="display:none !important;">$' + o.val + "</div>");
}
function discountCalculator() {
    $("#discalcForm").trigger("reset");
    var o = [
            [250, 4],
            [500, 4],
            [1e3, 8],
            [1500, 12],
            [2e3, 16],
            [2500, 20],
            [3e3, 24],
            [3500, 28],
            [4e3, 32],
            [4500, 36],
            [5e3, 40],
            [5500, 44],
            [6e3, 48],
            [6500, 52],
            [7e3, 56],
            [7500, 60],
            [8e3, 64],
            [8500, 68],
            [9e3, 72],
            [9500, 76],
            [1e4, 80],
            [10500, 84],
            [11e3, 88],
            [11500, 92],
            [12e3, 96],
            [12500, 100],
        ],
        e = function (o) {
            return isNaN(o)
                ? ""
                : o
                      .toString()
                      .split(/(?=(?:d{3})+(?:.|$))/g)
                      .join(",");
        },
        n = function (n) {
            var t = !1;
            if (!isNaN(n)) {
                var i = o[0][0];
                if (n < i) t = -1;
                else {
                    for (var l = 1; l < o.length; l++)
                        if (n <= (i = o[l][0])) {
                            t = n == i ? l : l - 1;
                            break;
                        }
                    !1 === t && (t = o.length - 1);
                }
            }
            var c = 0,
                r = 0;
            return t < 0 ? (t = "0") : ((r = o[t][1]), (c = parseInt(n * (0.01 * r))), (t = "+" + e(c) + " USD (" + r + "%)")), { val: n, discount: c, procent: r };
        },
        t = 0.03,
        i = 0;
    $("input[name=priority]").click(function () {
        switch (this.value) {
            case "low":
                t = 0.015;
                break;
            case "medium":
                t = 0.03;
                break;
            case "high":
                t = 0.06;
        }
        $("#ghz").html((t - (t * (0.01 * i)) / 2).toFixed(3));
    });
    var l = function (o) {
        $("#bonus").html(e(o.discount)), (i = o.procent), $("#ghz").html((t - (t * (0.01 * i)) / 2).toFixed(3));
    };
    function c(o) {
        var e = o.toString().split(".");
        return (e[0] = e[0].replace(/B(?=(d{3})+(?!d))/g, ",")), e.join(".");
    }
    $("#sliderPrepaid").slider({
        min: 0,
        max: 12500,
        slide: function (o, e) {
            var t = n(e.value);
            labeledHandler(t), l(t);
            var i = c(t.val),
                r = parseInt(i),
                d = c(t.val + t.discount),
                s = parseInt(d);
            $("#buy").val(r.toLocaleString()), $("#total").val(s.toLocaleString()), console.log(i + " value"), console.log(d + " discount");
        },
    }),
        $(".ui-slider").each(function () {
            $(this).data().uiSlider.options;
            for (var o = [0, 4, 20, 52, 80, 100], e = ["0", "250", "2,500", "6,500", "10,000", "12,500"], n = [0, 250, 2500, 6500, 1e4, 12500], t = 0; t < e.length; t++) {
                var i = $('<label><span class="percent_v">' + o[t] + "%</span><span>|</span>$" + e[t] + "</label>").css("left", n[t] / 10 - 1 + "px");
                $(this).append(i);
            }
        }),
        $("#buy").on("input blur paste", function () {
            var o = numeral($(this).val()).format("0,0");
            $("#buy").val(o);
            var e = $(this).val().replace(/D,/g, "");
            if (($(this).val(e), "" === e && (e = 0), !isNaN(e))) {
                (e = parseInt(e)), $("#sliderPrepaid").slider("value", e);
                var t = n(e);
                l(t), $("#total").val(t.val + t.discount), labeledHandler(t);
            }
        }),
        $("#buy").on("keyup", function () {
            var o = numeral($(this).val()).format("0,0");
            $(this).val(o);
            var e = $(this).val().replace(/,/g, "");
            if (!isNaN(e)) {
                (e = parseInt(e)), $("#sliderPrepaid").slider("value", e);
                var t = n(e);
                l(t), $("#total").val(t.val + t.discount), labeledHandler(t);
            }
        }),
        $("#total").on("input blur paste", function () {
            var o = $(this).val().replace(/D/g, "");
            if (($(this).val(o), "" === o && (o = 0), !isNaN(o))) {
                o = parseInt(o);
                for (var e = parseInt(o / 2); e <= o; e++) {
                    var t = n(e);
                    if (t.val + t.discount >= o) break;
                }
                $("#sliderPrepaid").slider("value", t.val), l(t), $("#buy").val(t.val), labeledHandler(t);
            }
        }),
        $("#total").on("keyup", function () {
            var o = numeral($(this).val()).format("0,0");
            $(this).val(o);
            var e = $(this).val().replace(/,/g, "");
            if (!isNaN(e)) {
                e = parseInt(e);
                for (var t = parseInt(e / 2); t <= e; t++) {
                    var i = n(t);
                    if (i.val + i.discount >= e) break;
                }
                $("#sliderPrepaid").slider("value", i.val), l(i), $("#buy").val(i.val), labeledHandler(i);
            }
        });
}
