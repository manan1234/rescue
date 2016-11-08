$(document).ready(function(){
	// 添加active
	$(".dh .nav > ul > li:first-child a").attr("id","active");
	$(".dh .nav > ul > li:eq(1) ").hover(function(){
		$(".dh .nav > ul > li ul").css("display","block");
	},function(){
		$(".dh .nav > ul > li ul").css("display","none");
	})
	$(".mobile-button").click(function(){
		$(".mobile-menu").slideToggle();
	})
	// banner
	// $(".banner").hover(function(){
	// 	$(".banner .container ul").removeAttr("id");
	// },function(){
	// 	$(".banner .container ul").attr("id","lunbo");
	// })
	var flag1=true;
    var a=setInterval(hh,2000);
    var aw;
    if ($(window).width()>1150) {
        aw=1080;
    }
    if ($(window).width()>850&&$(window).width()<1150) {
        aw=800;
    }
    if ($(window).width()<850&&$(window).width()>550) {
        aw=500;
    }
    if ($(window).width()<550) {
        aw=260;
    }
    console.log(aw);
    // var aw=$(".banner .container").outerWidth();
    $(".banner").hover(function(){clearInterval(a)},function(){a=setInterval(hh,2000)});
    function hh(){
    	$(".banner ul").animate({marginLeft:-aw},function(){
                $(".banner ul").append($(".banner ul li:first-child")).css("marginLeft",0);
                flag1=true;
               
    	})
    }
    function hhL(){
        $(".banner ul li:last-child").insertBefore(".banner ul li:first-child");
        $(".banner ul").css("marginLeft",-aw).animate({marginLeft:0},function(){flag1=true});
    }
    $(".zn").click(function(){
         if (flag1) {
         	hhL();
         	flag1=false;
         }
    })
    $(".yn").click(function(){
         if (flag1) {
         	hh();
         	flag1=false;
         }
    })
})