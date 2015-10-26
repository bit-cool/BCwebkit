$(document).ready(function(){
	$(".intro").bind("mouseover",function(){
		$(".img-top").css({
			opacity:'0.5',
			height:'400px'
		});
	});
	$(".intro").bind("mouseout",function(){
		$(".img-top").css({
			opacity:'0',
			height:'0px'
		});
	});


	//同种图片不同颜色相互切换
   function changeColorOn(){
      $(this).children(".first").hide();
      $(this).children(".next").show();
      $(this).children(".pro-name").css("color","#32586f");
   }
   $(".pro li").bind("mouseover",changeColorOn);
   $(".pro li").bind("mouseover",changeColorOn);
   $(".pro li").bind("mouseover",changeColorOn);
   $(".pro li").bind("mouseover",changeColorOn);
   $(".pro li").bind("mouseover",changeColorOn);
   $(".pro li").bind("mouseover",changeColorOn);
   $(".pro li").bind("mouseout",function(){
      $(this).children(".first").show();
      $(this).children(".next").hide();
      $(this).children(".pro-name").css("color","#d1d1d1");
   });



});
