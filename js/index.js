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
});
