$(function() {
	$(".nav_ul li").each(function(i, ele) { //导航栏
		$(ele).on("mouseenter", function() { //鼠标移入li
			var this1 = $(this);
			var w = this1.width(); //获取li的宽度，
			$(".nav_ul li").find("div").hide().width(w); //所有li下面的div隐藏，设置它的宽度为父级的宽度；
			this1.css({
				background: "rgba(0,0,0,.4)"
			}).siblings("li").css({
				background: ""
			}); //li加背景颜色
			this1.children("div").show(); //让div出现
			this1.find("div").each(function(i, ele) { //循环所有div
				//						console.log(ele)
				$(ele).on("mouseenter", function() { //鼠标移入div
					$(this).parent().find("div").find("img").css({
							display: "none"
						}) //大清洗所有div下的img隐藏
					$(this).addClass("bgt").siblings("div").removeClass("bgt"); //给div加背景颜色
					//							console.log($(this).find("img")[0])
					$(this).find("img").css({
						display: "block"
					}); //给他加最后的尖角符号
				})
			})
		})
		$(ele).on("mouseleave", function() { //鼠标移出li事件里面
			var this2 = $(this);
			this2.css({
				background: ""
			}); //清除所有li的背景颜色
			this2.find("div").hide().removeClass("bgt").find("img").css({
				display: "none"
			});
			//让li下面所有的div隐藏，删除class名，让div下面的img隐藏；
		})
	})
	
	////////////////////////移入左右按钮
	$(".we span").each(function(i,ele){
		$(ele).on("mouseenter",function(){
			$(".we span").css({
				opacity:1
			})
		})
		$(ele).on("mouseleave",function(){
			$(".we span").css({
				opacity:.5
			})
		})
	})
	//轮播图
	var num = 0;
	var img = $(".banner_img");
	var img_w = img.eq(0).width();
	//			console.log(img_w)
	img.each(function(i, ele) {
		if(i == 0) {
			return
		}
		$(ele).css({
			left: img_w
		})

	})
	$(".right").on("click", function() { //点击右按钮轮播
		banner();
	})

	$(".left").on("click", function() { //点击左按钮轮播
			img.eq(num).siblings("img").css({
				left: -img_w
			});
			img.eq(num).stop().animate({
				left: img_w
			}, 1000);
			num--;
			if(num < 0) {
				num = 2
			};
			img.eq(num).stop().animate({
				left: 0
			}, 1000);

			$(".banner_min li").eq(num).addClass("banner_bgt").siblings("li").removeClass("banner_bgt");
		})
		//轮播图延时器
	var timer = 0;
	
	timer = setInterval(function() {
		banner();
	}, 4000);
	
	$(".banner").on("mouseenter",function(){
		clearInterval(timer);
	});
	$(".banner").on("mouseleave",function(){
		timer = setInterval(function() {
			banner();
		}, 4000);
	})
	function banner (){  //轮播图，有点击轮播效果
		img.eq(num).siblings("img").css({
			left: img_w
		});
		img.eq(num).stop().animate({
			left: -img_w
		}, 1000);
		num++;
		if(num > 2) {
			num = 0
		}
		img.eq(num).stop().animate({
			left: 0
		}, 1000);

		$(".banner_min li").eq(num).addClass("banner_bgt").siblings("li").removeClass("banner_bgt");
	}
	
	////////////////////////////////s\Swimmming
	$(".p_m_tu dl").each(function(i,ele){
		$(ele).on("mouseenter",function(){
			$(".p_m_tu dl").children("span").css({
				opacity:0
			})
			$(".p_m_tu dl").children("dd").css({
				background:""
			})
			$(this).find("span").css({
				opacity:0.7
			});
			$(this).find("dd").css({
				background:"white"
			})
		})
	})
})