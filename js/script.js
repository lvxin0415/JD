// head部分
// var dw = $('.dw');


var a = $('.city ul li a');
a.on('click',function () {
    var index = $('.city ul li a').index(this);
    // alert(index);
    a.removeClass('select');
    a.eq(index).addClass('select');
    $('.dw .bj a').html( $('.city ul li a').eq(index).html());
})

var dw = $('.dw')
var bj = $('.dw .bj');

dw.hover(function () {
    $('.city').css('display','block')
    bj.css({'border-left':'1px solid #ccc','border-right':'1px solid #ccc'})
},function () {
    $('.city').css('display','none')
    bj.css({'border-left':'1px solid transparent','border-right':'1px solid transparent'})
})
$('#wd').hover(function () {
    $('.wd').css('display','block');
},function () {
    $('.wd').css('display','none');
})

$('#sev').hover(function () {
    $('.sev01').css('display','block');
},function () {
    $('.sev01').css('display','none');
})

$('#wzdh').hover(function () {
    $('.dh').css('display','block');
},function () {
    $('.dh').css('display','none');
})

$('#header .shop').hover(function () {
    $('#header .shop_2').css('display','block');
    $('#header .shop').css({'border':'1px solid #ccc','border-bottom':'none'});
    $('#header .shop_2').css({'border':'1px solid #ccc'});
    $('#header .shop_1').css('border','none');
},function () {
    $('#header .shop_2').css('display','none');
    $('#header .shop_1').css({'border':'1px solid #e3e4e5'});
    $('#header .shop').css('border','none');
})

$(function () {
    var time = null;
    var a = 0;
    function automove() {
        time = setInterval(function () {
            a++;
            if(a >=　$('.inner a').length){
                a = 0;
            }
            move();
        },2000)
    }
    function move() {
        $(' .outer .inner a').eq(a).fadeIn().siblings().hide();
        $('.oouter .list li').eq(a).addClass('select').siblings().removeClass('select');
        $('.outer .inner a').eq(a).addClass('img1').siblings().removeClass('img1');
    }
    automove();

    $('.fx .left1').on('click',function () {
        clearInterval(time);
        a--;
        if(a<0){
            a =　$('.inner a').length-1;
        }
        move();
        automove();
    })
    $('.fx .right1').on('click',function () {
        clearInterval(time);
        a++;
        if(a >=　$('.inner a').length){
            a = 0;
        }
        move();
        automove();
    })
    $('.list li').on('mouseover',function () {
        clearInterval(time);
        a = $('.list li').index(this);
        move();
        automove();
    })
})

var left1 =  $('.fx .left1');
var right1 =  $('.fx .right1');
$('#fs .oouter').hover(function () {
    left1.css('display','block');
    right1.css('display','block');
},function () {
    left1.css('display','none');
    right1.css('display','none');
})

left1.hover(function () {
    left1.css('background-color','#333');
},function () {
    left1.css('background-color','rgba(0,0,0,.1)');
})
right1.hover(function () {
    right1.css('background-color','#333');
},function () {
    right1.css('background-color','rgba(0,0,0,.1)');
})

$('#fs .con_left1').hover(function () {
    // var e=ev||window.event;
    // var target=e.target||e.srcElement;
    //     if(target.nodeName=='LI'||target.nodeName=='UL'){
            $('#fs .con_left1 ul li').each(function () {
                // console.log(index)
                $('#fs .con_left1 ul li').hover(function () {
                    var index = $('#fs .con_left1 ul li').index(this);
                    $('#fs .lcon').css('display','block');
                    $('#fs .lcon_').eq(index).css('display','block').siblings().css('display','none');
                    })

               })
        // }
},function () {
    var index = $('#fs .con_left1 ul li').index(this);
    $('#fs .lcon').css('display','none');
    $('#fs .lcon_').eq(index).css('display','none');
})

$('#fs .tab1').on('mouseover',function () {
    $('#fs .border_').stop().animate({
        left:'-2px',
    })
})
$('#fs .tab2').on('mouseover',function () {
    $('#fs .border_').stop().animate({
        left:'50px',
    })
})
$('#fs .tab').each(function () {
    var index = $('#fs .tab').index(this);
    $('#fs .tab').eq(index).on('mouseover',function () {
        $('#fs .con_right_2_con_').eq(index).removeClass('show').siblings().addClass('show');
    })

})
$('#fs .con_right_3_top .hover').each(function () {
    var index = $('#fs .con_right_3_top .hover').index(this);
    var time = null;
    clearInterval(time);
    time = setInterval(function () {
        $('#fs .con_right_3_top .hover').eq(index).hover(function () {
            $('#fs .con_right_3_bottom .con_').eq(index).addClass('show_').siblings().removeClass('show_')
            $('#fs .con_right_3_top .hover').stop().animate({
                marginTop:'-40',
            })
            $('.con_right_3 .con_right_3_bottom').stop().animate({
                top:'20',
            })
            $('#fs .con_right_3_top li').eq(index).css({'border-top':'1px solid #DB192B'}).siblings().css({'border-top':'1px solid #ccc'});
            $('#fs .con_right_3_top .hover .juan_').css('display','none');
            $('#fs .con_right_3_top .hover .juan').stop().animate({top:'4',right:'2',width:'4',height:'4',borderRadius:'100%'});
        })
    },1000)
})

$('#fs .con_right_3_bottom .aaa').on('click',function () {
    $('#fs .con_right_3_top .hover').stop().animate({
        marginTop:'0',
    })
    $('.con_right_3 .con_right_3_bottom').stop().animate({
        top:'210',
    })
    $('#fs .con_right_3_top .hover .juan_').css('display','block');
    $('#fs .con_right_3_top .hover .juan').stop().animate({top:'0',right:'0',width:'13',height:'16',borderRadius:'0'});
})

    $('#fs .con_right_3_bottom .con_hf  .ul ul .li').hover(function () {
        var index = $('#fs .con_right_3_bottom .con_hf  .ul ul .li ').index(this);
        $('.yy').removeClass('bgred');
        $('.yy').eq(index).addClass('bgred');
        $('.hfcz__').eq(index).addClass('hfcz_show').siblings().removeClass('hfcz_show');
    })

    $('#fs .con_jp  .ul li').hover(function () {
        var index = $('#fs .con_jp  .ul li ').index(this);
        $('#fs .con_jp  .ul li a').removeClass('bg_jp');
        $('#fs .con_jp  .ul li ').removeClass('bg_jp_');
        $('#fs .con_jp  .ul li a').eq(index).animate().addClass('bg_jp');
        $('#fs .con_jp  .ul li ').eq(index).animate().addClass('bg_jp_');
        $('.gnjp').eq(index).addClass('roat').siblings().removeClass('roat');
    })

    $('#dc1').on('click',function () {
        $('#fc1').css('display','none');
        $('#cf1').css('width','76px');
    })
    $('#wf1').on('click',function () {
        $('#fc1').css('display','block');
        $('#cf1').css('width','49px');
    })

    $('#dc2').on('click',function () {
        $('#fc2').css('display','none');
        $('#cf2').css('width','76px');
    })
    $('#wf2').on('click',function () {
        $('#cf2').css('width','49px');
        $('#fc2').css('display','block');

    })

$('#fs .con_dyp .ul .ul_ li').hover(function () {
    var index = $('#fs .con_dyp .ul .ul_ li ').index(this);
    $('#fs .con_dyp .ul .ul_ li ').eq(index).addClass('ry').siblings().removeClass('ry');
    $('#fs .con_dyp .ul .movie').eq(index).addClass('movie2').siblings().removeClass('movie2');


})

$('#fs .con_yx .ul ._ul li').hover(function () {
    var index= $('#fs .con_yx .ul ._ul li').index(this);
    $('#fs .con_yx .ul ._ul li').eq(index).addClass('dk_').siblings().removeClass('dk_');
    $('#fs .con_yx .ul ._ul a').removeClass('dk');
    $('#fs .con_yx .ul ._ul a').eq(index).addClass('dk');
    $('#fs .con_yx .ul .ucon .ucon_ ul li').eq(index).addClass('_ucon_').siblings().removeClass('_ucon_');
})

    var time= null;
    tiem=setInterval(function () {
        var date =new Date();
        var dateNow = date.getTime();
        
        var dateDao = new Date('2016/12/28,24:00:00');
        var dateDaoNow = dateDao.getTime();
        
        var cha = dateDaoNow - dateNow;
        // console.log(cha)
        var hour = Math.floor(cha/(1000*60*60));
        var nohour = cha - (hour*1000*60*60);

        var min = Math.floor(nohour/(1000*60));
        var nomin = nohour - (min*1000*60);

        var sec = Math.floor(nomin/1000);
        $('#ms .hour .txt').html(hour);
        $('#ms .minute .txt').html(min);
        $('#ms .second .txt').html(sec);
        if(hour<10){
            $('#ms .hour .txt').html('0'+hour);
        }
        if(min<10){
            $('#ms .minute .txt').html('0'+min);
        }
        if(sec<10){
            $('#ms .second .txt').html('0'+sec);
        }
    },1)

$('#ms .imga').hover(function () {
    var index =$('#ms .imga').index(this);

    $('#ms .imga').eq(index).css({'-webkit-transform':'translateY(-3px)','-webkit-transition':'all 0.5s linear'});
},function () {
    var index =$('#ms .imga').index(this);
    $('#ms .imga').eq(index).css({'-webkit-transform':'translateY(0px)','-webkit-transition':'all 0.5s linear'});
})

$('.box_bd .top_tab_head a').each(function () {
    var index = $('.box_bd .top_tab_head a').index(this);
    $('.box_bd .top_tab_head a').eq(index).hover(function () {
        $('.top_tab_active').stop().animate({
            left:'78'*index,
        })
        $('.top_tab_content_item').removeClass('top_tab_content_item1');
        $('.top_tab_content_item').eq(index).addClass('top_tab_content_item1');
    })

})

$('#fxhh .col1 .box_bd .find_list li a img').each(function () {
   var index = $('#fxhh .col1 .box_bd .find_list li a img').index(this);
    $('#fxhh .col1 .box_bd .find_list li a img').eq(index).hover(function () {
        $('#fxhh .col1 .box_bd .find_list li a img').eq(index).css({
            '-webkit-transform':'translateX(-3px)','-webkit-transition':'all 0.5s linear',
        })
    },function () {
        $('#fxhh .col1 .box_bd .find_list li a img').eq(index).css({
            '-webkit-transform':'translateX(0px)','-webkit-transition':'all 0.5s linear'
        })
    })
})
$('#fxhh .col2 .box_bd .rec img').each (function () {
    var index = $('#fxhh .col2 .box_bd .rec img').index(this);
    $('#fxhh .col2 .box_bd .rec img').eq(index).hover(function () {
        $('#fxhh .col2 .box_bd .rec img').eq(index).css({
            '-webkit-transform':'translateX(-5px)','-webkit-transition':'all 0.5s linear',
        })
    },function () {
        $('#fxhh .col2 .box_bd .rec img').eq(index).css({
            '-webkit-transform':'translateX(0px)','-webkit-transition':'all 0.5s linear'
        })

    })
})
$('#ljzx .coupon_bd .coupon_list .coupon_item img').each(function () {
    var index = $(' .coupon_bd .coupon_list .coupon_item  img').index(this);
    $('.coupon_bd .coupon_list .coupon_item').eq(index).hover(function () {
        $('.coupon_bd .coupon_list .coupon_item  img').eq(index).css({
            '-webkit-transform':'translateX(10px)','-webkit-transition':'all 0.5s linear',
        })
    },function () {
        $('#ljzx .coupon_bd .coupon_list .coupon_item  img').eq(index).css({
            '-webkit-transform':'translateX(0px)','-webkit-transition':'all 0.5s linear',
        })
    })
})

$('.rec_inner .rec_list li a img').hover(function () {
    var index = $('.rec_inner .rec_list li a img').index(this);
    $('.rec_inner .rec_list li a img').eq(index).css('opacity','0.8');
},function () {
    var index = $('.rec_inner .rec_list li a img').index(this);
    $('.rec_inner .rec_list li a img').eq(index).css('opacity','1');
})

$('.entry_item > a').hover(function () {
    var index = $('.entry_item > a').index(this);
    $('.entry_item > a img').eq(index).css({
        '-webkit-transform':'translateX(-10px)','-webkit-transition':'all 0.5s linear',
    })
},function () {
    var index = $('.entry_item > a').index(this);
    $('.entry_item > a img').eq(index).css({
        '-webkit-transform':'translateX(0px)','-webkit-transition':'all 0.5s linear',
    })
})

$('.pt_logo').hover(function () {
    var index= $('.pt_logo').index(this);
    $('.pt_logo_btn_wrapper').eq(index).css('display','block');
},function () {
    var index= $('.pt_logo').index(this);
    $('.pt_logo_btn_wrapper').eq(index).css('display','none');
});


$('.pt_logo_btn_wrapper .left').each(function () {
    var index = $('.pt_logo_btn_wrapper .left').index(this);
    var a = -570;
    $('.pt_logo_list_wrapper .pt_logo_list').css( 'transform', 'translateX('+(a)+'px'+')');
    $('.pt_logo_btn_wrapper .left').eq(index).click(function () {
        a += 570;

        $('.pt_logo_list_wrapper .pt_logo_list').eq(index).css({
            'transform': 'translateX('+a+'px'+')',
            'transition-property': 'transform',
            'transition-duration': '0.6s',
        })
        if(a >= 0){
            a = 0;
            $('.pt_logo_list_wrapper .pt_logo_list').eq(index).css( 'transform', 'translateX('+a+'px'+')');
        }

    });
    $('.pt_logo_btn_wrapper .right').eq(index).click(function () {
        console.log(index);
        a -= 570;
        $('.pt_logo_list_wrapper .pt_logo_list').eq(index).css({
            'transform': 'translateX('+a+'px'+')',
            'transition-property': 'transform',
            'transition-duration': '0.6s',
        })
        if(a <= -1520){
            a = -1520;
            $('.pt_logo_list_wrapper .pt_logo_list').eq(index).css( 'transform', 'translateX('+a+'px'+')');
        }
    });
});




var b = -380;
$('#xn .pt_logo_list_wrapper ul').css( 'transform', 'translateX('+(b)+'px'+')');
$('#xn .pt_logo_btn_wrapper .left1').click(function () {
    b += 380;
    var index = $('#xn .pt_logo_btn_wrapper .left1').index(this);
    $('#xn .pt_logo_list_wrapper ul').eq(index).css({
        'transform': 'translateX('+b+'px'+')',
        'transition-property': 'transform',
        'transition-duration': '0.6s',
    })
    if(b >= 0){
        b = 0;
        $('#xn .pt_logo_list_wrapper ul').eq(index).css( 'transform', 'translateX('+b+'px'+')');
    }

});

$('#xn .pt_logo_btn_wrapper .right1').click(function () {
    var index = $('#xn .pt_logo_btn_wrapper .right1').index(this);
    b -= 380;
    $('#xn .pt_logo_list_wrapper ul').eq(index).css({
        'transform': 'translateX('+b+'px'+')',
        'transition-property': 'transform',
        'transition-duration': '0.6s',
    })
    if(b <= -1140){
        b = -1140;
        $('#xn .pt_logo_list_wrapper ul').eq(index).css( 'transform', 'translateX('+b+'px'+')');
    }
});

$('.pt_cover a').hover(function () {
    var index = $('.pt_cover a').index(this);
    $('.pt_cover a img').eq(index).css({
        '-webkit-transform':'translateX(-10px)','-webkit-transition':'all 0.3s linear',
    })
},function () {
    var index = $('.pt_cover a').index(this);
    $('.pt_cover a img').eq(index).css({
        '-webkit-transform':'translateX(0px)','-webkit-transition':'all 0.3s linear',
    })
})

$('.pt_bi a').hover(function () {
    var index = $('.pt_bi a').index(this);
    $('.pt_bi a img').eq(index).css({
        '-webkit-transform':'translateX(-6px)','-webkit-transition':'all 0.3s linear',
    })
},function () {
    var index = $('.pt_bi a').index(this);
    $('.pt_bi a img').eq(index).css({
        '-webkit-transform':'translateX(0px)','-webkit-transition':'all 0.3s linear',
    })
})

$('.pt_more a').hover(function () {
    var index = $('.pt_more a').index(this);
    $('.pt_more a img').eq(index).css({
        '-webkit-transform':'translateX(-8px)','-webkit-transition':'all 0.3s linear',
    })
},function () {
    var index = $('.pt_more a').index(this);
    $('.pt_more a img').eq(index).css({
        '-webkit-transform':'translateX(0px)','-webkit-transition':'all 0.3s linear',
    })
})

// 楼层
$(document).on('mousewheel',function () {
    if($('body').scrollTop() + $(window).height()/2 >= $('#entry_1').offset().top){
        $('#lift').fadeIn();
    }else if($('body').scrollTop() + $(window).height()/2 < $('#entry_1').offset().top){
        $('#lift').fadeOut();
    }
})
$('.contentn').each(function () {
    var index = $('.contentn').index(this);
    console.log(index);
    $(document).on('mousewheel',function () {

        if($(document).scrollTop() + $(window).height()/2 > $('.contentn').eq(index).offset().top){
            $('.lift_list li').eq(index).css({'background':'#d70b1c','color':'#fff'}).siblings().css({'background':'#b1aaaa','color':'#fff'});
            $('.lastli').css('background','#5e4a4a');
        }
    })
})
$('.lastli').on('click',function () {
    $('body').animate({
        scrollTop:'0',
    },function () {
        $('#lift').fadeOut();
        $('#w .nav').fadeOut();
    });
})

$('.lift_list .lift_item').each(function () {
    var index = $('.lift_list .lift_item').index(this);
    $('.lift_list .lift_item').eq(index).on('click',function () {
        $('.lift_list .lift_item').eq(index).css({'background':'#d70b1c','color':'#fff'}).siblings().css({'background':'#b1aaaa','color':'#fff'});
        $('.lastli').css('background','#5e4a4a');

        $('body').animate({
            scrollTop:($('.contentn').eq(index).offset().top-50),
        })
    })
})

$(document).on('mousewheel',function () {
    if($('body').scrollTop() + $(window).height() >= $('#ms').offset().top+400){
        $('#w .nav').slideDown();
    }else{
        $('#w .nav').slideUp();
    }
})


