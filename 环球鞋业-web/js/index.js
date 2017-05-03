$(function(){
	//轮播--------------------------------
	(function(){
		var nowIndex = 0
		var lastIndex = 0
		var timer = setInterval(bannerscroll,2000)
		var oScrollLi = $('.banner_content .scroll_img li')
		var oIconLi = $('.banner_content .scroll_icon li')
		var oTextSpan = $('.banner_content .scroll_text span')
		var oLength = oScrollLi.length
		function bannerscroll(){
			nowIndex++
			if (nowIndex>oLength-1) {
				nowIndex=0
			}
			oIconLi.eq(lastIndex).removeClass("scroll_icon_now")
			oScrollLi.eq(lastIndex).fadeOut(0)
			oTextSpan.eq(lastIndex).fadeOut(0)
			oIconLi.eq(nowIndex).addClass("scroll_icon_now")
			oScrollLi.eq(nowIndex).fadeIn(600)
			oTextSpan.eq(nowIndex).fadeIn(0)
			lastIndex = nowIndex
		}
		oIconLi.each(function(i,elem){
			$(this).hover(function(){
				clearInterval(timer)
				if (i!=nowIndex) {
					oIconLi.removeClass("scroll_icon_now")
					oScrollLi.fadeOut(0)
					oTextSpan.fadeOut(0)
					$(this).addClass("scroll_icon_now")
					oScrollLi.eq(i).fadeIn(600)
					oTextSpan.eq(i).fadeIn(0)
					nowIndex = i
				}
			},function(){
				lastIndex = nowIndex
				timer = setInterval(bannerscroll,2000)
				
			})
		})
	})();
	//热门品牌
	(function(){
		var pageboxli = $(".page_box>li")
		$(".brand_nav li").each(function(i,elem){
			$(this).hover(function(){
				$(this).siblings().removeClass("now").end().addClass("now")
				pageboxli.removeClass("now").eq(i).addClass("now")
			})
		})
		
	})();
	/*-------------------------------------------------------------------------
 	* 鞋讯
 	* -----------------------------------------------------------------------*/
	(function(){
		var arr = ["今日鞋讯","新闻","解读","产品","人物","花边"]
		var title = $(".news_title_now a")
		var showli = $(".news_scroll li")
		$(".news_nav .nav li").each(function(i,elem){
			$(this).hover(function(){
				title.text(arr[i])
				$(this).siblings().removeClass("now").end().addClass("now")
				showli.removeClass("now").eq(i).addClass("now")
				$(".news_img_wrap .news_img").removeClass("now").eq(i).addClass("now")
			})
		})
	})();
	/*-------------------------------------------------------------------------
 	* 品牌
 	* -----------------------------------------------------------------------*/
	(function(){
		var logoLi = $(".barnd_logo_view li")
		for (var i=0 ;i<logoLi.length;i=i+3) {
			logoLi.eq(i).css({"border-left": "1px solid gainsboro"})
		}
		var showview = $(".brand_scroll_view")
		var showlogo = $(".barnd_logo_view")
		$(".barnd_nav .nav li").each(function(i,elem){
			$(this).hover(function(){
				$(this).siblings().removeClass("now").end().addClass("now")
				showview.removeClass("now").eq(i).addClass("now")
				showlogo.removeClass("now").eq(i).addClass("now")
			})
		})
	})();
	/*-------------------------------------------------------------------------
 	* 市场
 	* -----------------------------------------------------------------------*/
	(function(){
		var title = $(".bazaar_title_now a")
		var title2 = $(".bazaar_title_bottom_now a")
		var title3 = $(".bazaar_left_title_now a")
		var showview1 = $(".bazaar_page_top")
		var showview2 = $(".bazaar_page_botttom")
		var showview3 = $(".bazaar_left_page")
		$(".bazaar_nav .nav li").each(function(i,elem){
			$(this).hover(function(){
				title.text($(this).find("a").text())
				title2.text("优秀"+$(this).find("a").text()+"推荐")
				title3.text("优秀"+$(this).find("a").text()+"供应厂家")
				$(this).siblings().removeClass("now").end().addClass("now")
				showview1.removeClass("now").eq(i).addClass("now")
				showview2.removeClass("now").eq(i).addClass("now")
				showview3.removeClass("now").eq(i).addClass("now")
			})
		})
	})();
	
	/*-------------------------------------------------------------------------
 	* footer
 	* -----------------------------------------------------------------------*/
	(function(){
		var h = $(".footer_top")
		var page = $(".footer_page")
		$(".footer_top_title li").each(function(i,elem){
			$(this).hover(function(){
				if (i==0) {
					h.css("height","112px")
				} else{
					h.css("height","50px")
				}
				$(this).siblings().removeClass("now").end().addClass("now")
				page.removeClass("now").eq(i).addClass("now")
			})
		})
	})();
	/*-------------------------------------------------------------------------
 	* 滚动位置
 	* -----------------------------------------------------------------------*/
	(function(){
		var scrollView = $(".scroll_box")
		$(window).scroll(function(){
			if ($(window).scrollTop()>1000&&$(window).scrollTop()<1700) {
				scrollView.removeClass("now").eq(0).addClass("now")
			} else if($(window).scrollTop()>1700&&$(window).scrollTop()<2200){
				scrollView.removeClass("now").eq(1).addClass("now")
			}else if ($(window).scrollTop()>2200&&$(window).scrollTop()<2800) {
				scrollView.removeClass("now").eq(2).addClass("now")
			}else{
				scrollView.removeClass("now")
			}
		})
		scrollView.each(function(i,elem){
			$(this).click(function(){
				if (0==i) {
					$(window).scrollTop(1300)
				} else if (1==i) {
					$(window).scrollTop(2000)
				}else{
					$(window).scrollTop(2500)
				}
			})
		})
	})();
	$(".footer").load("footer.html");
	
	(function(){
		var dingou = $(".dingou")
		var btn = $(".dingou .btn")
		btn.click(function(){
			if ($(this).hasClass("down")) {
				$(this).removeClass("down").text("一")
				dingou.removeClass("down")
			}else{
				$(this).addClass("down").text("+")
				dingou.addClass("down")
			}
		})
	})();
})