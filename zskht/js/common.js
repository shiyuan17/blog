$(function(){
	$('li.barList:not(:nth-child(1))').children('ul').css('display','none');
	$(".mainContent").height($(window).height()-128);
	// $(".mainContent").width($(window).width()-215);
	$('.mainContent .center-con .main-ctn').css('min-height',$(window).height()-198);
	$('li.barList>a').on('click',function(){
		$(this).addClass('act');
		$(this).parent().siblings('li.barList').children('a').removeClass('act');
		//$(this).siblings('ul').slideToggle();
		// $(this).parent('.barList').siblings('.barList').children('ul').slideUp();
	})
	$('body').on('click','.twoMenuLi>a',function(){
		$(this).addClass('act').parent('.twoMenuLi').siblings('.twoMenuLi').children('a').removeClass('act');
		$(this).parents('.barList').siblings('.barList').find('.twoMenuLi>a').removeClass('act');
	})
	$(".delete").click(function(){
		$(".m-modal").css("display","block");
		if($(this).attr("data-rel")==0){
			$(".m-modal .sure").attr("href",$(this).attr("data-url"));
			$(".m-modal .sure-modal").css("display","block");
		}else if($(this).attr("data-rel")==1){
			$(".m-modal .tip-modal").css("display","block");
		}
	})
	$(".cancel,.close i,.get-tip").click(function(){
		$(".m-modal").css("display","none");
		$(".m-modal .sure-modal").css("display","none");
		$(".m-modal .tip-modal").css("display","none");
	})
	//全选全不选
	$("input[name=allSelect]").click(function(){   
	    if(this.checked){   
	        $("input[name=checkbox]").prop("checked", true);  
	    }else{   
			$("input[name=checkbox]").prop("checked", false);
	    }   
	});
})