$(function(){
	//超过一定高度导航添加类名
	var nav=$("header"); //得到导航对象  
	var win=$(window); //得到窗口对象  
	var sc=$(document);//得到document文档对象。  
	win.scroll(function(){  
			if(sc.scrollTop()>=100){  
					nav.addClass("on");   
			}else{  
				nav.removeClass("on");  
			}  
	})   
		
	//移动端展开nav
	$('#navToggle').on('click',function(){
		$('.m_nav').addClass('open');
	})
	//关闭nav
	$('.m_nav .top .closed').on('click',function(){
		$('.m_nav').removeClass('open');
	})
				
	//二级导航  移动端
	$(".m_nav .ul li").click(function() {
		$(this).children("div.dropdown_menu").slideToggle('slow')
		$(this).siblings('li').children('.dropdown_menu').slideUp('slow');				
	});
	
	//banner轮播图
	var bodyWidth=$('body').width();//设置banner宽度
	var time;
	// 用来判断点击后动画是否执行完成
	var flag = true;
	function bannerChange(){
		bodyWidth=$('body').width();
		/* if(bodyWidth<768){
			$('.banner>ul>li>a>img').css({clip:'rect(0,'+(bodyWidth+400)+'px,300px,200px)',left:'-200px',width:bodyWidth+'px'} )
		} */
		// 定义变量 用于判断执行的次数
		var num=0;
		var cirnum=0;
		// 图片自己移动  通过动画实现图片滑动的过程
		time = setInterval(run,2000)
		function run(){
			num++;
			cirnum++;
			// 设置判断条件让第一张图片在指定的条件下追加到最后一张去
			if(num>1){
				$('.banner>ul.bannerUl').append($('.banner>ul.bannerUl>li').first())
				// 重新设置位置
				$('.banner>ul.bannerUl').css('left',0+'px')
				num=1;
			}
			// 设置ul滑动
			$('.banner>ul.bannerUl').animate({left:-bodyWidth*num+'px'},1000,function(){
				flag=true;
			})
			if(cirnum>2){cirnum=0}
			$('.cir>li').eq(cirnum).addClass('dian').siblings().removeClass();
			
		}
	
		//小圆点绑定点击事件
		$('.cir li').click(function(){
			$(this).addClass('dian').siblings().removeClass();
			clearInterval(time);
			$('.banner>ul.bannerUl').animate({left:-bodyWidth*$(this).index()+'px'},1000,function(){
				flag=true;
			})
			cirs = $(this).index()
		})
	}
	bannerChange();
	window.onresize=function(){
		$('.banner>ul.bannerUl').css('left',0+'px')
		clearInterval(time)
		bodyWidth=$('body').width();
		//图片裁剪
		/* if(bodyWidth<768){
			$('.banner>ul>li>a>img').css('clip','rect(0,'+bodyWidth+'px,600px,100px)') 
		}*/
		bannerChange();
		
	}
	
		
})