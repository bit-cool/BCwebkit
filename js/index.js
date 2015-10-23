$(document).ready(function(){
	$(".intro").bind("mouseover",function(){
		$(".img-top").animate({
			opacity:'0.5',
			height:'400px'
<<<<<<< HEAD
		},"slow","linear");
=======
		},"slow");
>>>>>>> origin/gh-pages
	});
	$(".intro").bind("mouseout",function(){
		$(".img-top").animate({
			opacity:'0',
			height:'0px'
<<<<<<< HEAD
		},"slow","linear");
=======
		},"slow");
>>>>>>> origin/gh-pages
	});
});
