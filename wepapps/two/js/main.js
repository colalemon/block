function main () {

    (function(){
        
        // jQuery to collapse the navbar on scroll
        $(window).scroll(function () {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
                $('.fixed-info').css("top","50px")
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
                $('.fixed-info').css("top","90px")
            }
        });
        
        // 移动端点击头部bar收缩
        $(".nav > li > a").click(function () {
            $("#navbar").removeClass("in");
        }); 

        $("html:not(.nav )").click(function(){
            $("#navbar").removeClass("in");
        })
        // Testimonial Slider
        $('.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        /*====================================
        Show Menu on Book
        ======================================*/
        $(window).bind('scroll', function () {
            var navHeight = $(window).height() - 100;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })

        // ajax获取今天的交易加格
        // $.ajax({
        //      url: "",
        //      type: "get",
        //      success: function (data) {
        //         var datas = data;
        //         $('.inner-price').html(data.price);
        //      }
        // });
        // 点击二维码弹出对应二维码层
        $(".weixin").on({
            mouseenter: function() {
                $(".propafanda-weixin").show();
            },
            mouseleave: function () {
                $(".propafanda-weixin").hide();
            },
            click: function () {
                $(".propafanda-weixin").show();
            }  

        });
        $(".qq").on({
            mouseenter: function () {
                $(".propafanda-qq").show();
            },
            mouseleave: function () {
                $(".propafanda-qq").hide();
            },
            click: function () {
                $(".propafanda-qq").show();
            }

        });
        $(".weibo").on({
            mouseenter: function () {
                $(".propafanda-weibo").show();
            },
            mouseleave: function () {
                $(".propafanda-weibo").hide();
            },
            click: function () {
                $(".propafanda-weibo").show();
            }

        });
        $(".top_langdown ").on({
            mouseenter: function () {
                $("#navbar .down").css("display","block");
            },
            mouseleave: function () {
                $("#navbar .down").hide();
            },
            click:function(){
                $("#navbar .down").css("display", "block");
            }
        })
        var innerHeight = null
        function imgRotate() {
            // $('.intro-bg-next').height(window.innerWidth)
            // $('.intro-bg-next').width(window.innerWidth)
            $('.intro-bg-next').css("left", - (1920 - window.innerWidth)/2 )
            innerHeight = window.innerWidth
        }
        imgRotate()
        window.addEventListener('resize', function () {
            imgRotate()
        })
        // particlesJS('particles-js', {
        //     particles: {
        //         color: '#0ff',
        //         shape: 'circle', // "circle", "edge" or "triangle"
        //         opacity: 1,
        //         size: 4,
        //         size_random: true,
        //         nb: 150,
        //         line_linked: {
        //             enable_auto: true,
        //             distance: 100,
        //             color: '#ff0',
        //             opacity: 0.8,
        //             width: 1,
        //             condensed_mode: {
        //                 enable: false,
        //                 rotateX: 600,
        //                 rotateY: 600
        //             }
        //         },
        //         anim: {
        //             enable: true,
        //             speed: 1
        //         }
        //     },
        //     interactivity: {
        //         enable: true,
        //         mouse: {
        //             distance: 300
        //         },
        //         detect_on: 'canvas', // "canvas" or "window"
        //         mode: 'grab',
        //         line_linked: {
        //             opacity: .5
        //         },
        //         events: {
        //             onclick: {
        //                 enable: true,
        //                 mode: 'push', // "push" or "remove"
        //                 nb: 4
        //             }
        //         }
        //     },
        //     /* Retina Display Support */
        //     retina_detect: true
        // });
        document.body.addEventListener('touchstart',function(){

        });
        function IsPC() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        }

        var flag = IsPC(); //true为PC端，false为手机端
        if (!!flag) {
            document.body.addEventListener('click',function(){
                console.log(1)
            })
        }
    })()

};

$(document).ready(function () {
    $('#particles').particleground({
        dotColor: 'rgba(250,250,250,0.1)',
        lineColor: 'rgba(250,250,250,0.1)'
    });
    $('#solve-innerbg').particleground({
        dotColor: 'rgba(250,250,250,0.1)',
        lineColor: 'rgba(250,250,250,0.15)'
    });
   
    $('#application-bg').particleground({
        dotColor: 'rgba(250,250,250,0.25)',
        lineColor: 'rgba(250,250,250,0.2)'
    });
    // $('#team-bg').particleground({
    //     dotColor: 'rgba(250,250,250,0.1)',
    //     lineColor: 'rgba(250,250,250,0.1)'
    // });
    // $('.intro').css({
    //     'margin-top': -($('.intro').height() / 2)
    // });
});
main()