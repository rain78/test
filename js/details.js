/* 放大镜 */
var goodImg=document.querySelector('.goodImg') //获取盒子
var mouseImg=document.querySelector('.mouseImg');//获取细节
//获取细节中心点
var mouseImgWidth = parseInt(getStyle(mouseImg,'width'))/2;
var mouseImgHeight = parseInt(getStyle(mouseImg,'height'))/2;
/* 获取细节放大 */
var right=document.querySelector('.right')
var img=right.firstElementChild;
console.log(mouseImgWidth,mouseImgHeight)
//给盒子绑定鼠标移入事件
goodImg.onmouseover=function(e){
	var ev=e||window.event;
	//设置细节的初始位置 将鼠标放下细节的中心
	mouseImg.style.left = ev.offsetX-mouseImgWidth+'px';
	mouseImg.style.top = ev.offsetY-mouseImgHeight+'px';
	console.log(mouseImgWidth,mouseImgHeight)
	mouseImg.style.display = 'block';
	right.style.display='block'
	fun()
	mouseImg.onmousemove = function(e){
		var ev = e||window.event;
		ev.stopPropagation();
		// 标签在鼠标移动后的位置 = 标签当前位置 + 鼠标移动的距离
		var x = parseInt(getStyle(mouseImg,'left'));
		var y = parseInt(getStyle(mouseImg,'top'));
		// 鼠标移动的距离 = 鼠标移动后的坐标 - 鼠标移动前的坐标
		mouseImg.style.left = x+(ev.offsetX-mouseImgWidth)+'px';
		mouseImg.style.top = y+(ev.offsetY-mouseImgHeight)+'px';
		fun();
		img.style.left=-2*x+'px';
		img.style.top=-2*y+'px';
	}
	/* 清掉 细节隐藏 */
	mouseImg.onmouseout=function(){
		mouseImg.onmousemove=null;
		mouseImg.style.display = 'none';
		right.style.display='none'
	}
	//设置超出隐藏
	function fun(){
		if(mouseImg.offsetLeft<=0){
			mouseImg.style.left=0;
		}
		if(mouseImg.offsetLeft>=(goodImg.offsetWidth-mouseImg.offsetWidth)){
			mouseImg.style.left=goodImg.offsetWidth-mouseImg.offsetWidth+'px'
		}
		if(mouseImg.offsetTop<=0){
			mouseImg.style.top = 0;
		}
		if(mouseImg.offsetTop>=(goodImg.offsetHeight-mouseImg.offsetHeight)){
			mouseImg.style.top = goodImg.offsetHeight-mouseImg.offsetHeight+'px';
		}
	}
}

/* tab切换 */
var arr=['list5.jpg','list1.jpg','list4.jpg','list2.jpg','list3.jpg']
//当前li设置class属性 其他li清楚class实现
$(function(){
	$('.slist>li').mouseover(function(){
		$(this).attr('class','dianLs').siblings().removeAttr('class')
		var res=$(this).index();
		goodImg.style.backgroundImage='url(../img/'+arr[res]+')'
		img.src='../img/'+arr[res]
	})
})


