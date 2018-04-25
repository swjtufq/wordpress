$(document).ready(function(){
	 $("#myCarousel").carousel();

	$('.xiala').hover(function(){
							   
				$('.xiala2').show()			   
							   
				},function(){
				$('.xiala2').hide()					   
								   
		 })	   
	$('.xiala2').hover(function(){
							   
				$(this).stop().show()			   
							   
				},function(){
				$(this).stop().hide()					   
								   
		 })		
	

$(window).resize(function(){
if( $(window).width() > 600 ) {
$('.subnav').hide();
}
});
//¹ºÂòÒ³tabÇÐ»»
 $('.win').click(function(){
													$(this).removeClass('current').addClass('current');
													$('.mac').removeClass('current')
													$('.buy_window').show();
													$('.buy_mac').hide();
													})
						   $('.mac').click(function(){
													$(this).removeClass('current').addClass('current');
													$('.win').removeClass('current')
													$('.buy_window').hide();
													$('.buy_mac').show();
													})


	$.extend({
		isMobile:function()
	    {
	    	if (navigator.userAgent.match(/mobile/i)) {
	    		return true;
	    	}
	    	return false;
	    },
	    loop:function(num,step)
	    {
	    	num = parseInt(num);
	    	step = parseInt(step);
	    	$(".loop .left").click(function(){
	    		var max = -1;
	    		var index = $(".loop ul > li:visible").index();
	    		$(".loop ul > li").each(function(){
	    			max = max + 1;
	    		});
	    		$(".loop ul > li").hide();
	    		for (var i=0;i<num;i++)
	    		{
	    			if(0 == index){
		    			index = max;
		    		}else{
		    			index = index -1;
		    		}
	    			$(".loop ul > li").eq(index).css({"left":step*i,"display":"block"});
	    		}
	    	});
	    	$(".loop .right").click(function(){
	    		var max = -1;
	    		var index = $(".loop ul > li:visible").index();
	    		$(".loop ul > li").each(function(){
	    			max = max + 1;
	    		});
	    		if(index != max){
	    			index = index + 1;
	    		}else{
	    			index = 0;
	    		}
	    		$(".loop ul > li").hide();
	    		for (var i=0;i<num;i++)
	    		{
	    			if(max == index){
	    				index = -1;
	    			}
	    			index = index + 1;
	    			$(".loop ul > li").eq(index).css({"left":step*i,"display":"block"});
	    		}
	    	});
	    	return true;
	     }
	});

	//article right contents icon click
	$('.ico_contents').click(function(){
		$('.con_box').show();
		$('.contents_bg').show();
		var h=$(window).height() - 60;
		$('.contents-body').css('height',h);
	});
	$('.article .contents .contents-heading span').click(function(){
		$('.con_box').hide();
		$('.contents_bg').hide();
	})
	$('.contents_bg').click(function(){
		$('.con_box').hide();
		$('.contents_bg').hide();
	});

	$('.article .helpful button').click(function() {
		$('.article .helpful button').attr('disabled','false');
		var id = $(".helpful .before > div").attr("data");
		var type = 1;
		if( $(this).hasClass('no') ){
			var type = 2;
		}
		var link = WEBURL+"/ch-index.php/Index/helpful/id/"+id+"/type/"+type;
		$.ajax({url:link,async:false});
		$('.article .helpful .before').hide();
		$('.article .helpful .after').show();
		return false;
	});



	// search
	$('.hd .icon-search i').click(function(){
			$(".hd .searchs").show();
			$(".cover").show();
			$("#form-search .text").focus();
			$('.toggle .subnav').hide();
			return false;
	});
	// verifyimg
	var verifyimg = $(".verifyimg").attr("src");
	$(".reloadverify").click(function(){
			$(".verifyimg").attr("src", verifyimg.replace(/\?.*$/,'')+'?'+Math.random());
			$(".reviews .user_comment .form_box div.warning").html('');
	});
	$('#verify').focus(function() {
		$(".reviews .user_comment .form_box div.warning").html('');
	});
	$(".hd .searchs .close").click(function(){
		$(".hd .searchs").hide();
		$(".cover").hide();
		return false;
	});
	$(".hd .searchs .search-btn").click(function(){
		$('form#form-search').submit();
		return false;
	});
	$("#solution .search .search-btn").click(function(){
		$('form#form-search').submit();
		return false;
	});
	//comment
	$(".reviews .user_comment .box_title .close").click(function(){
		//$(".reviews .user_comment").hide();
		//$(".cover").hide();
		 $('#form_comments')[0].reset();
		 $(".reviews .user_comment .form_box div.warning").html('');
		 window.location.reload()
		return false;
	});
	$(".product .user_comment .box_title .close").click(function(){
		$(".user_comment").hide();
		$(".cover").hide();
	});
	$('.product .customer .box-content p.more-text').click(function(){
		$(".user_comment").show();
		$(".cover").show();
	})
	$('.reviews .users .comment_btn').click(function(){
			$(".user_comment").show();
			$(".cover").show();

	});

	// header subnav
	/*$('#subnav a.pc').click(function(){
		$('#subnav .subnav-pc').show();
		$('.cover').show();
		return false;
	});*/
	$('#subnav .subnav-close').click(function(){
		$('#subnav .subnav-pc').hide();
		$('.cover').hide();
		return false;
	});
	$(".cover").click(function(){
		$('#subnav .subnav-close').trigger("click");
		$(".hd .searchs .close").trigger("click");
		$(".uninstall-tips").hide();
	    return false;
	});
	$('#subnav span.mobile').click(function(){
		if($(this).hasClass('hover')){
			$(this).removeClass('hover');
		}else{
			$(this).addClass('hover');
		}
		$('#subnav .subnav').toggle();

		return false;
	});
	$('.hd .toggle p').click(function(){
		if($(this).hasClass('hover')){
			$(this).removeClass('hover');
		}else{
			$(this).addClass('hover');
		}
		$(this).parent().find('.subnav').toggle();
		return false;
	});

	// index customer
	$('.index .customer .col-md-3').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$(".box-content li").removeClass("active");
		$(".box-content li").eq(index).addClass("active");
	});
	$('.index .customer .col-md-3').mouseover(function(){
		$(this).trigger("click");
	});
	$('.index .customer .left').click(function(){
		var div = $(".index .customer .box-content li.active");
		var index = $(div).index();
		if( 0 == index ){
			index = 3;
		}else{
			index = index - 1;
		}
		$(".index .customer .box-content li").removeClass("active").eq(index).addClass("active");
		$('.index .customer .box-header .col-md-3').eq(index).addClass("active").siblings().removeClass("active");
	});
	$('.index .customer .right').click(function(){
		var div = $(".index .customer .box-content li.active");
		var index = $(div).index();
		if( 3 == index ){
			index = 0;
		}else{
			index = index + 1;
		}
		$(".index .customer .box-content li").removeClass("active").eq(index).addClass("active");
		$('.index .customer .box-header .col-md-3').eq(index).addClass("active").siblings().removeClass("active");
	});

	$(".index .media .box").mouseover(function(){
		$(this).find(".normal").hide();
		$(this).find(".hover").show();
	});
	$(".index .media .box").mouseout(function(){
		$(this).find(".normal").show();
		$(this).find(".hover").hide();
	});

	//footer language
	$(".language span").click(function(){
		$(".language-list").toggle();
	});
	$(".language span").mouseover(function(){
		$(this).trigger("click");
	});

	// newsletter form
	$(".newsletter-btn").click(function(){
		$("form#newsletter").submit();
	});
	$("#androidn-form button").click(function(){
		$("form#androidn-form").submit();
	});

	//sales faqs, privacy faqs, terms faqs, refund faqs
    $("#myFaqs dt").click(function (){
        var div = $(this).next();
        if (div.is(':visible')){
            $(this).removeClass('active');div.hide();
        }else{
        	$(this).addClass('active');div.show();
        }
    });

    //about ,contact,privacy,refund,terms
	$('#my-nav ul li.mobile').click(function(){
		$(this).siblings().toggle();
	});


	//ios10
	$('.ios10-nav ul > li').click(function(){
		if($(this).hasClass('mobile')){
			$(this).siblings().addClass('active');
			return false;
		}else{
			$(this).addClass('mobile').siblings().removeClass('mobile');
			$(this).addClass('active').siblings().removeClass('active');
			return true;
		}
	});

	// product overview version
	$('.product #choose-btn').click(function() {
		var version = $(this).attr('data');
		if('d' == version){
			$('.product #download').hide();
			$('.product #buy').show();
			$(this).attr('data','b');
			$(".product #mac-btn").css("color","#fff");
		    $(".product #win-btn").css("color","#fff")
			$(this).find('img').animate({left:"27px"},200);
		}else{
			$('.product #download').show();
			$('.product #buy').hide();
			$(this).attr('data','d');
			$(".product #mac-btn").css("color","#fff");
		    $(".product #win-btn").css("color","#fff")
			$(this).find('img').animate({left:"0px"},200);
		}
		return false;
	});
	$(".product #win-btn").click(function(){
		$('.product #download').show();
		$('.product #buy').hide();
		$('.product #choose-btn').attr('data','d');
		$(this).css("color","#0066cb");
		$(".product #mac-btn").css("color","#333")
		$('.product #choose-btn').find('img').animate({left:"0px"},200);
	});
	$(".product #mac-btn").click(function(){
		$('.product #download').hide();
		$('.product #buy').show();
		$(this).css("color","#0066cb");
		$(".product #win-btn").css("color","#333")
		$('.product #choose-btn').attr('data','b');
		$('.product #choose-btn').find('img').animate({left:"27px"},200);
	});
	$(".product  #download a").hover(function(){
         $(this).css("background-color","#fff");
          if($(this).hasClass("btn-l")){
          	$(this).css("color","#3a98f6");
          	$(this).find("img").attr("src",WEBURL+"/images/btn-bw.png")
          }
         if($(this).hasClass("btn-r")){
         	$(this).css("color","#f7e02d");
         	$(this).find("img").attr("src",WEBURL+"/images/btn-cw.png")
         }

	},function(){

          if($(this).hasClass("btn-l")){
          	$(this).css("background-color","#3a98f6");
          	$(this).css("color","#fff");
          	$(this).find("img").attr("src",WEBURL+"/images/btnw.png")
          }
         if($(this).hasClass("btn-r")){
         	$(this).css("background-color","#f7e02d");
         	$(this).css("color","#fff");
         	$(this).find("img").attr("src",WEBURL+"/images/btnw.png")
         }
	});
	$(".product #buy a").hover(function(){
         $(this).css("background-color","#fff");
          if($(this).hasClass("btn-l")){
          	$(this).css("color","#3a98f6");
          	$(this).find("img").attr("src",WEBURL+"/images/btn-bx.png")
          }
         if($(this).hasClass("btn-r")){
         	$(this).css("color","#f7e02d");
         	$(this).find("img").attr("src",WEBURL+"/images/btn-cx.png")
         }


	},function(){

          if($(this).hasClass("btn-l")){
          	$(this).css("background-color","#3a98f6");
          	$(this).css("color","#fff");
          	$(this).find("img").attr("src",WEBURL+"/images/btnx.png")
          }
         if($(this).hasClass("btn-r")){
         	$(this).css("background-color","#f7e02d");
         	$(this).css("color","#fff");
         	$(this).find("img").attr("src",WEBURL+"/images/btnx.png")
         }
	})
	//store
	$(".store .btn-win-buy,.store .btn-mac-buy").hover(function(){
       $(this).css("text-decoration","none");
       $(this).css("background-color","#fff");
       $(this).css("color","#f7e02d");
       if($(this).hasClass("btn-win-buy")){
       	 $(this).find("img").attr("src",WEBURL+"/images/btn-cw.png")
       }
       if($(this).hasClass("btn-mac-buy")){
       	 $(this).find("img").attr("src",WEBURL+"/images/btn-cx.png")
       }

	},function(){
       $(this).css("background-color","#f7e02d");
       $(this).css("color","#fff");
       if($(this).hasClass("btn-win-buy")){
       	 $(this).find("img").attr("src",WEBURL+"/images/btnw.png")
       }
       if($(this).hasClass("btn-mac-buy")){
       	 $(this).find("img").attr("src",WEBURL+"/images/btnx.png")
       }

	})
	//product_list
	$(".btn-win-try,.btn-mac-try,.productList .btn-win-download,.productList .btn-mac-download").hover(function(){
       $(this).css("text-decoration","none");
       $(this).css("background-color","#fff");
       $(this).css("color","#3a98f6");
       if($(this).hasClass("btn-win-download")||$(this).hasClass("btn-win-try")){
       	 $(this).find("img").attr("src",WEBURL+"/images/btn-bw.png")
       }
       if($(this).hasClass("btn-mac-download")||$(this).hasClass("btn-mac-try")){
       	 $(this).find("img").attr("src",WEBURL+"/images/btn-bx.png")
       }

	},function(){
       $(this).css("background-color","#3a98f6");
       $(this).css("color","#fff");
       if($(this).hasClass("btn-win-download")||$(this).hasClass("btn-win-try")){
       	 $(this).find("img").attr("src",WEBURL+"/images/btnw.png")
       }
       if($(this).hasClass("btn-mac-download")||$(this).hasClass("btn-mac-try")){
       	 $(this).find("img").attr("src",WEBURL+"/images/btnx.png")
       }

	})
	// product guide
	$(".guide .btns a").click(function(){
		if($(this).hasClass('active')){ return false; }
		$(this).addClass('active').siblings().removeClass('active');
		$(".guide .btns a img").hide();
		$(".guide .btns a").each(function(){
			if($(this).hasClass('active')){
				$(this).children('img:first').show();
			}else{
				$(this).children('img:last').show();
			}
		});
		var index = $(this).index()+1;
		$('.guide .box').eq(index).show().siblings('.box').hide();
		return true;
	});
	$(".box5 div").click(function(){
		if($(this).hasClass('box3')||$(this).hasClass('xl')){ return false; }
		$(this).removeClass('box6').addClass('box7').siblings('.box6,.box7').removeClass('box7').addClass('box6');
		var index = $(this).index()-1;
		$('.guide .box').eq(index).show().siblings('.box').hide();
		return true;
	});
	$(".clear .xl").click(function(){
		$(".box8").toggle();
	});
	$(".box8 .box9").click(function(){
		var $val = $(".clear .box7 p").html();
		var $dir2 = $('.clear .box7 a img').attr("dir");
		var $src2 = $('.clear .box7 a img').attr("src");
		var $val2 = $(this).children("p:first").html();
		$(".box9 p").each(function(){
			if($(this).html() == $val2){
				var $src = $(this).siblings('a').find('img').attr("src");
				var $dir = $(this).siblings('a').find('img').attr("dir");
				$('.clear .box7 a img').attr("src",$src);
				$('.clear .box7 a img').attr("dir",$dir);
				$('.clear .box7 p').html($val2);
			}
		});
		$(this).children('p:first').html($val);
		$(this).children('a:first').find('img').attr("src",$src2);
		$(this).children('a:first').find('img').attr("dir",$dir2);
		var index = $(".clear .box7 a img").attr("dir");;
		 $('.guide .box').eq(index).show().siblings('.box').hide();
		return true;
	});

	// email
	$('form.form-license').submit(function() {
		var div = $(this);
		var error = false;
		var reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var email = $.trim($(div).find('.required').val());
		var msg = '<div  id="tips" style="color:red">You entered an invalid Email!</div>';
		if(email == '' || !reg.test(email) ) { error = true; }
		if(error){
			$('#tips').remove();
			$(this).before(msg);
		}else{
			$(this).find('.license-btn').attr('disabled','false');
			var formInput = $(this).serialize();
			$.ajax({
				async:false,
				type:"get",
				url:WEBURL+"/ch-index.php/Index/email",
				data:formInput,
				dataType:"jsonp",
				jsonp: "callback",
				jsonpCallback:"jsonpReturn",
				success: function(json){
					msg = json.info;
					$('#tips').remove();
					div.before(msg);
					if (!json.success) {
						div.find(".email-btn").removeAttr("disabled");
					}
		        }
			});
		}
		return false;
	});

	// volume licensing
	$('form#form-volume-licensing').submit(function() {
		var Error = false;
		if(!$(this).find('.firstname').val()){
			$('.firstname').addClass('error');
			Error = true;
		}else{
			$('.firstname').removeClass('error');
		}
		if(!$(this).find('.lastname').val()){
			$('.lastname').addClass('error');
			Error = true;
		}else{
			$('.lastname').removeClass('error');
		}
		if(!$(this).find('.phone').val()){
			$('.phone').addClass('error');
			Error = true;
		}else{
			$('.phone').removeClass('error');
		}
		if(!$(this).find('.company').val()){
			$('.company').addClass('error');
			Error = true;
		}else{
			$('.company').removeClass('error');
		}
		if(!$("#product1").prop("checked") && !$("#product2").prop("checked") && !$("#product3").prop("checked") && !$("#product4").prop("checked") && !$("#product5").prop("checked") && !$("#product6").prop("checked")){
			$(".volume-licensing .quote ul").addClass('error');
			Error = true;
		}else{
			$(".volume-licensing .quote ul").removeClass('error');
		}
		if(0 == $(this).find('select').val()){
			$('.volume-licensing .quote select').addClass('error');
			Error = true;
		}else{
			$('.volume-licensing .quote select').removeClass('error');
		}

		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var emailVal = $.trim($(this).find('.volume-licensing-email').val());
		if(!emailVal || !emailReg.test(emailVal)) {
			$('.volume-licensing-email').addClass('error');
			Error = true;
		} else{
			$('.volume-licensing-email').removeClass('error');
		}

		if(!Error){
			var formInput = $(this).serialize();
			var action = WEBURL+"/ch-index.php/Index/volumeLicensing";
			$.post(action,formInput,function(json){
				if(json.success){
					$(".volume-licensing .tips").show();
					$('.volume-licensing-btn').attr('disabled','false');
				}else{
					$(json.id).addClass('error');
				}
			});
		}
		return false;
	});


	//uninstall
	$( 'form#form-uninstall').submit(function() {
		var Error = false;
		if(!Error) {
			$('#uninstall-submit').attr('disabled','false');
			var formInput = $(this).serialize();
			$.post($(this).attr( 'action'),formInput, function(json){
				$(".uninstall-tips").show();
				$(".cover").show();
			});
		}
		return false;
	});
	$(".uninstall-tips .writh_box .broder_box .close_uninstall").click(function(){
		$(".uninstall-tips").hide();
		$(".cover").hide();
		return false;
	});

	$(".uninstall .list .list-unstyled > li :checkbox").change(function(){
		if($(this).prop("checked")==true){
			$(this).parent().find('.for-answer').show();
		}else{
			$(this).parent().find('.for-answer').hide();
		}
		return false;
	});

	$(".uninstall .for-answer .confirm").click(function(){
		$(".for-answer").hide();
		return false;
	});

	$('.mybanner-tips .close').click(function(){
		$('.mybanner-tips').hide();
	});

	// Solution Category
	$('.solutionCategory .solution-nav ul li').click(function(){
		if($(this).hasClass('first')){ return false; }
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index()-1;
		$('.solutionCategory .panel .panel-body .box').eq(index).addClass("active").siblings().removeClass("active");
	});

	$(".write-reviews .tips-form .close").click(function(){
		$(".write-reviews .tips-form").hide();
		return false;
	});

	// write-reviews
	$('form#form-write-reviews').submit(function() {
		var Error = false;
		if(!$(this).find('.firstname').val()){
			$('.firstname').addClass('error');
			Error = true;
		}else{
			$('.firstname').removeClass('error');
		}
		if(!$(this).find('.lastname').val()){
			$('.lastname').addClass('error');
			Error = true;
		}else{
			$('.lastname').removeClass('error');
		}
		if(!$(this).find('.product').val()){
			$('.product').addClass('error');
			Error = true;
		}else{
			$('.product').removeClass('error');
		}
		if(!$(this).find('.comments').val()){
			$('.comments').addClass('error');
			Error = true;
		}else{
			$('.comments').removeClass('error');
		}
		/*var urlReg = /^(http\:\/\/([\w-]+\.)+[\w-]{2,4})?$/;
		var urlVal = $.trim($(this).find('.url').val());
		if(urlVal != '' && !urlReg.test(urlVal)) {
			$('.write-reviews .url').addClass('error');
			Error = true;
		} else{
			$('.write-reviews .url').removeClass('error');
		}
		*/
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var emailVal = $.trim($(this).find('.email').val());
		if(!emailVal || !emailReg.test(emailVal)) {
			$('.write-reviews .email').addClass('error');
			Error = true;
		} else{
			$('.write-reviews .email').removeClass('error');
		}

		if(!Error){
			var formInput = $(this).serialize();
			var action = WEBURL+"/ch-index.php/Index/write_reviews_for_free_license";
			$.post(action,formInput,function(json){
				if(json.success){
					$(".write-reviews .tips-form").show();
					$('.write-reviews-btn').attr('disabled','false');
				}else{
					$(json.id).addClass('error');
				}
			});
		}
		return false;
	});

	// notice
	$(".notice-holiday .notice-close").click(function(){
		$(".support").addClass('close');
	});
	$(".notice-holiday .notice-img").click(function(){
		$(".support").removeClass('close');
	});

	// Photography
	$('#photography .features .li dl').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$("#photography .features .img li").removeClass("active").eq(index).addClass("active");
	});

	$('#photography .features .control.left').click(function(){
		var div = $("#photography .features .img > li.active");
		var index = $(div).index();
		if( 0 == index ){
			index = 6;
		}else{
			index = index - 1;
		}
		$("#photography .features .li dl").removeClass("active").eq(index).addClass("active");
		$('#photography .features .img li').eq(index).addClass("active").siblings().removeClass("active");
	});
	$('#photography .features .control.right').click(function(){
		var div = $("#photography .features .img > li.active");
		var index = $(div).index();
		if( 6 == index ){
			index = 0;
		}else{
			index = index + 1;
		}
		$("#photography .features .li dl").removeClass("active").eq(index).addClass("active");
		$('#photography .features .img li').eq(index).addClass("active").siblings().removeClass("active");
	});
	$('#photography .tools .header-item li').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$("#photography .tools .content-item li").removeClass("active");
		$("#photography .tools .content-item li").eq(index).addClass("active");
		$("#photography .tools .article-item li").removeClass("active");
		$("#photography .tools .article-item li").eq(index).addClass("active");
	});

	// totop
	$(window).scroll(function () {
	    if($(window).scrollTop()>=10) {
	        $(".totop").show();
	    }else {
	     $(".totop").hide();
	    }

	    if($.isMobile()){
	    	return false;
	    }
	    var len=$(".androidn .nav-flat ul li").length;
	    for(var i=1;i<=len;i++){
	    	 var m=i+1;
		    if ($(window).scrollTop() < $(".androidn .androidn-content .scrollspy .flag1").offset().top) {
		    	$(".nav-flat").css({position:"static"});
		    	$(".androidn .nav-flat ul > li").removeClass("active");
		    	$(".androidn .androidn-content").css({margin:"0"});
	        }else if($(window).scrollTop()>$(".androidn .androidn-content .scrollspy .flag"+i).offset().top-50 && $(window).scrollTop()<$(".androidn .androidn-content .scrollspy .flag"+m).offset().top-50){
	        	$(".androidn .nav-flat ul > li.flag"+i).addClass("active").siblings().removeClass("active");
	        	$(".nav-flat").css({position:"fixed",top:"0"});
	        	$(".androidn .androidn-content").css({margin:"0 0 0 200px"});
	        } else if($(window).scrollTop()>$(".androidn .androidn-content .scrollspy .flag"+len).offset().top-80 && $(window).scrollTop()<$(".footer").offset().top-200){
	        	$(".androidn .nav-flat ul > li.flag"+len).addClass("active").siblings().removeClass("active");
	        	$(".nav-flat").css({position:"fixed",top:"0"});
	        	$(".androidn .androidn-content").css({margin:"0 0 0 200px"});
            }else if($(window).scrollTop()>$(".footer").offset().top-200){
	        	$(".nav-flat").css({position:"static"});
		    	$(".androidn .nav-flat ul > li").removeClass("active");
		    	$(".androidn .androidn-content").css({margin:"0"});
	        }
	    }


	 });

	$("a[href*='Fucosoft.com/downloads/']").click(function(e){
		var href = $(this).attr('href').split('downloads/');
		var soft = href[1].split('.');
		if(0 ==soft[0].indexOf('dr-cleaner')){
			return true;
		}

		/*if($.isMobile()){


			if( -1 == soft[0].indexOf('mac-') ){
				var id = soft[0];
			}else{
				var macid = soft[0].split('mac-');
				id = macid[1];
			}
			var target = "/mobile/download-"+id+".html";
			$(this).attr('href',target);
			e.preventDefault();
			setTimeout("window.location.href='"+target+"'",1000);
            return false;
		}else{
			//setTimeout('window.location.href="/thankyou/"',3000);
			//setTimeout('window.open("/thankyou/")',1000);
		}*/
	});

    if($.isMobile()){
    	$("a[href*='/downloads']").each(function(i){
			var href = $(this).attr('href').split('downloads/');
			var soft = href[1].split('.');
			if( -1 == soft[0].indexOf('mac-') ){
				var id = soft[0];
			}else{
				var macid = soft[0].split('mac-');
				id = macid[1];
			}
            $(this).attr("href",'https://'+window.location.host+"/mobile/download-"+id+".html") ;
       		$(this).attr("target","_self");
        });
    }

	$(".ad-thankyou").click(function(e){
		if(!$.isMobile()){
			setTimeout('window.location.href="/thankyou/"',1000);
			//setTimeout('window.open("/thankyou/")',1000);
		}
	});

	 $(".totop").click(function(){
	       $("html,body").animate({scrollTop:0},300);return false;
	 });
	  //video
	 $("#ytb").click(function(){
		$("#cover").css("display","block");
		var $url = $("#ytb").attr("href");
		$("#video_frame").attr("src",$url+"&autoplay=1&rel=0");
		return false;
	});

	$(".vo_close").click(function(){
		$("#video_frame").attr("src","");
		$("#cover").css("display","none");

	});
		if (navigator.userAgent.match(/mobile/i)) {
			$(".solution-big-box .nav .more").click(function(e){
				stopPropagation(e);
				if(!$(this).hasClass('active')){
	    			$('.solution-big-box .nav .more').addClass('active');
	    			$('.solution-big-box .nav-show').show();
    			}else{
    				$('.solution-big-box .nav .more').removeClass('active');
					$('.solution-big-box .nav-show').hide();
    			}
			});
			$(".solution-big-box .nav-show").click(function(e){
				stopPropagation(e);
			});

			$("body").children().click(function(e){
				if($('.solution-big-box .nav .more').hasClass('active')){
					$('.solution-big-box .nav .more').removeClass('active');
					$('.solution-big-box .nav-show').hide();
				}
			});
    	}else{
    		$(".solution-big-box .nav .more").hover(function(e){
    			$('.solution-big-box .nav .more').addClass('active');
    			$('.solution-big-box .nav-show').show();
			},function(e){
				$('.solution-big-box .nav .more').removeClass('active');
				$('.solution-big-box .nav-show').hide();
    		});
    		$(".solution-big-box .nav-show").hover(function(e){
    			$('.solution-big-box .nav .more').addClass('active');
    			$('.solution-big-box .nav-show').show();
			},function(e){
				$('.solution-big-box .nav .more').removeClass('active');
				$('.solution-big-box .nav-show').hide();
    		});
    	}
    	$(".suport_newyear .x").click(function(){
			$(".suport_newyear").hide();
		});

    	$('.samsungs8 .compare ul#compare-tab > li').click(function(){
    		$(this).addClass("active").siblings().removeClass("active");
    		var index = $(this).index();
    		$(".samsungs8 .compare ul#compare-box li").eq(index).addClass("active").siblings().removeClass("active");
    	});

});

function stopPropagation(e) {
	if (e.stopPropagation)
		e.stopPropagation();
	else
	e.cancelBubble = true;
}
function getTotalWidth (){
	 if(/msie/.test(navigator.userAgent.toLowerCase())){
	  return document.compatMode == "CSS1Compat"? document.documentElement.clientWidth : document.body.clientWidth;
	 }
	 else{
	  return self.innerWidth;
	 }
	}
