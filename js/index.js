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
   //扫二维码
   $(".iphone-download").bind("mouseover",function(){
      $(".ewm-new").css("display","block");
   });
   $(".iphone-download").bind("mouseout",function(){
      $(".ewm-new").css("display","none");
   });

   //回到顶部
   
   //首先将#back-to-top隐藏

    $("#back-to-top").hide();

   //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失

   $(function () {
      $(window).scroll(function(){
         if ($(window).scrollTop()>100){
            $("#back-to-top").fadeIn(1500);
         }
         else
         {
            $("#back-to-top").fadeOut(1500);
         }
         });

         //当点击跳转链接后，回到页面顶部位置

         $("#back-to-top").click(function(){
            $('body,html').animate({scrollTop:0},1000);
            return false;
         });
     
   });

   //导航栏的下拉菜单
   $('#drop').bind('mouseover',function(){
      $('.menu-items').css('display','block');
      $('#drop .pro-ser').css('color','#52a1d9');
      $('.menu-items').bind('mouseover',function(){
         $('#drop .pro-ser').css('color','#52a1d9');
      })
   });
   $('#drop').bind('mouseout',function(){
      $('.menu-items').css('display','none');
      $('#drop .pro-ser').css('color','#ffffff');
   });
   $('.dropdown').bind('mouseover',function(){
      $(this).addClass('open');
      $('.dropdown-toggle').css('aria-expanded','true');
      $('.dropdown-menu').css('display','block');
   });
   $('.dropdown').bind('mouseout',function(){
      $(this).removeClass('open');
      $('.dropdown-toggle').css('aria-expanded','false');
      $('.dropdown-menu').css('display','none');
   });

   $('.dropdown').bind('click',function(){
      $(this).addClass('open');
      $('.dropdown-toggle').css('aria-expanded','true');
      $('.dropdown-menu').css('display','none');
   });
   
    //输入验证
       $('.sub').bind('click',function(){
         var $flag=1;
         //验证姓名
         if ($("#user").val().length<2) {
            $("#user").css({"outline":"none",
                              'borderColor':"#db0c20",
                              });
            $("#user").focus();
            $("#user").next("span").show();
            $flag+=1;
         };
         // 验证电话号码
         var $phoneNum=/^1[3|4|5|7|8][0-9]{9}$/;
         if(!$phoneNum.test($("#phone").val())){
            $("#phone").css({"outline":"none",
                              'borderColor':"#db0c20",
                              });
            $("#phone").next("span").show();
            if($flag==1){
               $("#phone").focus();
            }else{
               $("#user").focus();
            }
             $flag+=1;
         }
         //邮箱验证
         var $email=/^[a-z0-9A-Z]+@[a-z0-9A-Z]+.com$/;
         if(!$email.test($("#email").val())){
            $("#email").css({"outline":"none",
                              'borderColor':"#db0c20",
                              });
            $("#email").next("span").show();
            if($flag==1){
               $("#phone").focus();
            }else if($flag==2){
               $("#user").focus();
            }
            else{
               $("#phone").focus();
            }
             $flag+=1;
         }
         if($flag!=1){
            return false;
         }
       });
         

   
});



