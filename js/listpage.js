/* 筛选 */
$(function(){
	$('.listSerch').click(function(){
		$('.selectSerch').css('display','block')
	})
	/* 筛选滋润 */
	$('.seclectOne').click(function(){
		$(this).css({background:'#2a333a',color:'white'})
		$('.seclectTwo').css({background:'#e0edfe',color:'gray'});
		$('.seclectThree').css({background:'#e0edfe',color:'gray'});
		$('.seclectFour').css({background:'#e0edfe',color:'gray'});
		$('.goodList>li[class=one]').css('display','block');
		$('.goodList>li[class!=one]').css('display','none');
	})
	/* 筛选顺滑 */
	$('.seclectTwo').click(function(){
		$(this).css({background:'#2a333a',color:'white'})
		$('.seclectOne').css({background:'#e0edfe',color:'gray'});
		$('.seclectThree').css({background:'#e0edfe',color:'gray'});
		$('.seclectFour').css({background:'#e0edfe',color:'gray'});
		$('.goodList>li[class=two]').css('display','block');
		$('.goodList>li[class!=two]').css('display','none');
	})
	/* 筛选养护 */
	$('.seclectThree').click(function(){
		$(this).css({background:'#2a333a',color:'white'})
		$('.seclectOne').css({background:'#e0edfe',color:'gray'});
		$('.seclectTwo').css({background:'#e0edfe',color:'gray'});
		$('.seclectFour').css({background:'#e0edfe',color:'gray'});
		$('.goodList>li[class=three]').css('display','block');
		$('.goodList>li[class!=three]').css('display','none');
	})
	/* 重置 */
	$('.seclectFour').click(function(){
		$(this).css({background:'#2a333a',color:'white'})
		$('.seclectOne').css({background:'#e0edfe',color:'gray'});
		$('.seclectThree').css({background:'#e0edfe',color:'gray'});
		$('.seclectTwo').css({background:'#e0edfe',color:'gray'});
		$('.goodList>li').css('display','block');
	})
	
})

/* 商品位置改变 */
$(function(){
	$('.listPosition').hover(function(){
		$(this).animate({top:'-30px',left:'-20px'},500,function(){})
	},function(){
		$(this).animate({top:'0px',left:'0px'},500,function(){})
	})
})