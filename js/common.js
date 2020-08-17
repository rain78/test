/* 获取顶部LOGO */
var logoTop=document.getElementsByClassName('logoTop')[0];
/* 获取导航 */
var nav=document.getElementsByClassName('nav')[0];
/* 搜索框宽度变长 */
var top1=document.querySelector('.top')
$(function(){
	$('#serchRight').focus(function(){
		$('#serchRight').css('width','300px')
		 $('#serchRight').removeAttr('placeholder')
	})
})

/* 吸顶导航 */
//给导航绑定滚动事件
window.onscroll=function(){
	var logoHeight=logoTop.offsetHeight;
	var sTop=document.documentElement.scrollTop;
	//console.log(logoHeight,sTop)
	if(sTop>logoHeight){
		nav.style.position='fixed';
		nav.style.left=0;
		nav.style.top=0;
		//设置吸顶导航下面的轮播图的上边距
	}
	else{
		//取消固定定位
		nav.style.position='static';
	}
	//返回顶部出现
	if(sTop>500){
		//console.log(1)
		top1.style.display='block'
	}
	if(sTop<500){
		//console.log(1)
		top1.style.display='none'
	}
	/* 详情页文字故事从下面出现 */
	if(sTop>=$('.introductionText').offset().top){
		$('.introductionText>ul').animate({marginTop:'0px'},1000);
	}
}

//导航条设置滑动效果
$(function(){
	$('.navCenter>li').eq(0).hover(function(){
		$('.listhide').slideDown();
	},function(){
		$('.listhide').slideUp();
		}
	)
	
		
	$('.navCenter>li').eq(1).hover(function(){
		$('.textList').slideDown();
	},function(){
		$('.textList').slideUp();
		}
	)
})

/* title跑马灯 */
var title=document.getElementsByTagName('title');
//转换为数组
var str=document.title;
console.log(str)
//转换为数组
var arrTitle=str.split('')
console.log(arrTitle)
setInterval(function(){
	//从数组的头部弹出一个元素 shift()
	var res=arrTitle.shift();
	//从数组的尾部压入一个元素 push(压入的元素)
	arrTitle.push(res)
	//转成字符串
	document.title=arrTitle.join('')
},100)