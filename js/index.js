$(document).ready(function(){
	$(".intro").bind("mouseover",function(){
		$(".img-top").animate({
			opacity:'0.5',
			height:'400px'
		},"slow");
	});
	$(".intro").bind("mouseout",function(){
		$(".img-top").animate({
			opacity:'0',
			height:'0px'
		},"slow");
	});
});
