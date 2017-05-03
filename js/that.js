(function($){
	var pro = $('.project-name');
	var arr1 = ["环球鞋业","小鸟掌学","一铭平台","衣窝疯","旅游网站","移动端"];
	var arr2 = ["环球鞋业-web/index.html","小鸟掌学web/index.html","一铭/html/index.html","衣窝疯2/index.html","bbbble1.com/index.html","移动端"];

	
	
	pro.on("mouseenter",function(){
		$(this).html("点我观看").css({color:"#000"});
		var mfp = $(".mfp-img");
		console.log(mfp)
	})
	pro.each(function(i,ele){
		$(ele).on("mouseleave",function(){
			$(this).html(arr1[i]).css({color:"#fff"})
		})
	})
//	pro.on("click",function(){
//		$(this).index();
//		$(window).open('arr['+$(this).index()+']',"_black")
//		window.open("衣窝疯2/index.html","_blank",false)
//	})
	pro.each(function(i,ele){
		$(ele).on("click",function(){
		window.open(arr2[i],"_blank",false)
			
			console.log(i)
		})
	})
})(jQuery)
