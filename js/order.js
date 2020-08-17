/* 地址联动 */
//定义一个市数组
var cityarr = [
	['阜阳市','六安','亳州市','合肥市'],
	['朝阳区','东城区','海淀区','通州区'],
	['南岸区','永川区','渝北区','北碚区'],
]
//定义一个区
var arearr=[
	[['建外街道','朝外街道','朝外街道','三里屯街道'],
	['左家庄街道','香河园街道','和平街街道','安贞街道'],
	['亚运村街道','小关街道','酒仙桥街道','麦子店街道'],
	['六里屯街道','团结湖街道','六里屯街道','八里庄街道','双井街道']],
	[['建外街道','朝外街道','朝外街道','三里屯街道'],
	['左家庄街道','香河园街道','和平街街道','安贞街道'],
	['亚运村街道','小关街道','酒仙桥街道','麦子店街道'],
	['六里屯街道','团结湖街道','六里屯街道','八里庄街道','双井街道']],
	[['建外街道','朝外街道','朝外街道','三里屯街道'],
	['左家庄街道','香河园街道','和平街街道','安贞街道'],
	['亚运村街道','小关街道','酒仙桥街道','麦子店街道'],
	['六里屯街道','团结湖街道','六里屯街道','八里庄街道','双井街道']],
	[['建外街道','朝外街道','朝外街道','三里屯街道'],
	['左家庄街道','香河园街道','和平街街道','安贞街道'],
	['亚运村街道','小关街道','酒仙桥街道','麦子店街道'],
	['六里屯街道','团结湖街道','六里屯街道','八里庄街道','双井街道']]
	
]
/* 获取市 */
province.onchange=function(){
	citys.options.length=0;
	for(var i=0;i<cityarr[province.value].length;i++){
		var option=document.createElement('option');
		option.value=i;
		option.innerHTML=cityarr[province.value][i];
		citys.appendChild(option)
		
	}
	
}
/* 获取区 */
citys.onchange=function(){
	area.options.length=1;
	for(var i=0;i<arearr[province.value][citys.value].length;i++){
			var option=document.createElement('option');
			option.innerHTML=arearr[province.value][citys.value][i];
			option.value=i;
			area.appendChild(option)
	}
}

/* 商品位置发生改变 */
$(function(){
	$('.positionLi').hover(function(){
		$(this).animate({top:'0',left:'0'},500,function(){})
	},function(){
		$(this).animate({top:'30px',left:'30px'},500,function(){})
	})
})

/* 删除订单 */
$(function(){
	orderChangenum=3;
	$('.removeOrderOne').click(function(){
		$('.removeUlOne').remove()
		orderChangenum--;
		$('.orderChange').html(orderChangenum)
	})
	$('.removeOrderTwo').click(function(){
		$('.removeUlTwo').remove()
		orderChangenum--;
		$('.orderChange').html(orderChangenum)
	})
	$('.removeOrderThree').click(function(){
		$('.removeUlThree').remove()
		orderChangenum--;
		$('.orderChange').html(orderChangenum)
	})
	
})

/* 倒计时 */
$(function(){
	var numFen=14;
	var numMiao=60;
	var daojishitime=setInterval(function(){
		numMiao--;
		if(numMiao<0){numMiao=59;numFen--}
		if(numFen==0&&numMiao==0){clearInterval(daojishitime)}
		$('.orderFen').html(numFen);
		$('.ordermiao').html(numMiao)
	},1000)
})

/* 提交 验证*/
$(function(){
	$('.submitOrder').click(function(){
		if($('#orderName').val()==''){
			alert('姓名不能为空哦')
		}else{
			location.assign('../html/index.html');
		}
	})
})















