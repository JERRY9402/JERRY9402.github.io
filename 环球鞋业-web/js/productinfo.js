$(function(){
	var oTabsHead = $("#TabsHead ul li")
	var oTabsHeadFixedLi=$("#TabsHeadFixed ul li")
	var oTabsHeadFixed = $("#TabsHeadFixed_wrap")
	var oPage = $("#infopage .wraper .page")
	var oProductSimpleInfo = $("#productSimpleInfo")
	var oshare_icon = $(".share_icon")
	if ($(window).scrollTop()>250) {
			oTabsHeadFixed.fadeIn(300)
		} else{
			oTabsHeadFixed.fadeOut(300)
		}
	$(window).scroll(function(){
		oshare_icon.removeClass("reviews_share_icons")
		if ($(window).scrollTop()>=250) {
			oTabsHeadFixed.fadeIn(300)
		} else{
			oTabsHeadFixed.fadeOut(300)
		}
	})
	oTabsHead.each(function(i,elem){
		$(this).find("a").click(function(e){
			oTabsHead.removeClass("cur").eq(i).addClass("cur")
			oTabsHeadFixedLi.removeClass("cur").eq(i).addClass("cur")
			e.preventDefault();
			oPage.hide().eq(i).show()
			if (i!=0) {
				oProductSimpleInfo.show()
				$(window).scrollTop("370")
			} else{
				oProductSimpleInfo.hide()
				$(window).scrollTop("250")
			}
			
		})
	})
	oTabsHeadFixedLi.each(function(i,elem){
		$(this).find("a").click(function(e){
			oTabsHead.removeClass("cur").eq(i).addClass("cur")
			oTabsHeadFixedLi.removeClass("cur").eq(i).addClass("cur")
			e.preventDefault();
			oPage.hide().eq(i).show()
			if (i!=0) {
				oProductSimpleInfo.show()
				$(window).scrollTop("370")
			} else{
				oProductSimpleInfo.hide()
				$(window).scrollTop("250")
			}
			
		})
	})
	
	var likeBtnHasclick = false
	$(".likeButton").click(function(){
		if (!likeBtnHasclick) {
			likeBtnHasclick = true
			$(".fav_num").animate({top:0},600,function(){
				var tmp = $(this).find("p").eq(0).text()
				$(this).find("p").eq(1).text(tmp).end().eq(0).text(tmp+1)
				$(this).css("top","-32px")
			})
		}
	})
	
	$(".share_icon .less").click(function(e){
		e.preventDefault()
		
		var h=oshare_icon.height()
		if (oshare_icon.hasClass("reviews_share_icons")) {
			oshare_icon.removeClass("reviews_share_icons")
			$(this).text("V")
		} else{
			oshare_icon.addClass("reviews_share_icons")
			$(this).text("^")
		}
	})
	
	var showdiv = $(".show_wrap .show_img")
	var scrollview = $(".scroll_wrap ul")
	var scrollLi = $(".scroll_wrap ul li")
	var btnleft = $(".info_content_left .btn_left")
	var btnright = $(".info_content_left .btn_right")
	var close = $(".btn_big_close")
	var showbigdiv = $("#show_big_div")
	var showbigimg = $(".show_big_img")
	scrollLi.each(function(i,elem){
		$(this).hover(function(){
			$(this).addClass("now").siblings().removeClass("now")
			var rex = /min/
			var str = $(this).find("img").attr("src")
			var st = str.replace(rex,"big")
			showdiv.attr("src",st)
		})
		
	})
	scrollLi.add(showdiv).click(function(){
			imgshow()
		})
	close.click(function(){
		imghiden()
	})
	function imgshow(){
		showbigimg.attr("src",showdiv.attr("src"))
		showbigdiv.show();
		showbigdiv.animate({"width": "100%","height": "100%"},300)
	}
	function imghiden(){
		showbigdiv.animate({"width": "0","height": "0"},300)
		showbigdiv.hide()
	}
	btnleft.add(btnright).click(function(){
		scrollanima()
	})
	function scrollanima(){
		console.log(scrollview.css("left"))
		if (scrollview.css("left")=="0px") {
			scrollview.animate({left:"-185px"},300)
		} else{
			scrollview.animate({left:"0"},300)
		}
	}
	

	var btn_reduce = $(".btn_reduce")
	var oText =  $("#buy_num")
	var btn_add = $(".btn_add")
	
	btn_reduce.click(function(){
		var temp =parseInt(oText.val()) 
		if (temp!=1&&temp>0) {
			oText.val(temp-1)
		}
	})
	btn_add.click(function(){
		var temp =parseInt(oText.val()) 
		oText.val(temp+1)
	})
})
