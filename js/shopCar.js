/* 数量加减 */
$(function(){
	//订单总价
	var sumAll=0;
	/* 第一个商品加减 */
	var increaseReduceone=parseInt($('.increaseReduceone').text());//获取初始数量
	var sunlittleone=parseInt($('.unitPriceone').text().slice(1));//获取单间
	/* 第二个商品加减 */
	var increaseReducetwo=parseInt($('.increaseReducetwo').text());//获取初始数量
	var sunlittletwo=parseInt($('.unitPricetwo').text().slice(1));
	var increaseReducethree=parseInt($('.increaseReducethree').text());//获取初始数量
	var sunlittlethree=parseInt($('.unitPricethree').text().slice(1));//获取单间
	
	sunAll=sunlittlethree+sunlittletwo+sunlittleone;
	
	/* 第一个商品加减 */
	/* 数量减小 */
	$('.increaseone').click(function(){
		increaseReduceone--;
		if(increaseReduceone<=1){increaseReduceone=1}
		sunlittleone=200*increaseReduceone;
		//订单总价
		sunAll=sunlittlethree+sunlittletwo+sunlittleone;
		//全部商品总价
		$('.sumAll').html('￥'+sunAll+'.00')
		//一个商品数量变化
		$('.increaseReduceone').html(increaseReduceone) 
		//一个商品总价
		$('.sunlittleone').html('￥'+sunlittleone+'.00')
		
	})
	/* 数量增加 */
	$('.reduceone').click(function(){
		increaseReduceone++;
		sunlittleone=200*increaseReduceone;
		//全部商品总价
		sunAll=sunlittlethree+sunlittletwo+sunlittleone;
		//全部商品总价
		$('.sumAll').html('￥'+sunAll+'.00')
		$('.increaseReduceone').html(increaseReduceone) 
		$('.sunlittleone').html('￥'+sunlittleone+'.00')
	})
	
	/* 第二个商品加减 */
	/* 数量减小 */
	$('.increasetwo').click(function(){
		increaseReducetwo--;
		if(increaseReducetwo<=1){increaseReducetwo=1}
		sunlittletwo=220*increaseReducetwo;
		sunAll=sunlittlethree+sunlittletwo+sunlittleone;
		//全部商品总价
		$('.sumAll').html('￥'+sunAll+'.00')
		$('.increaseReducetwo').html(increaseReducetwo) 
		$('.sunlittletwo').html('￥'+sunlittletwo+'.00')
	})
	/* 数量增加 */
	$('.reducetwo').click(function(){
		increaseReducetwo++;
		sunlittletwo=220*increaseReducetwo;
		sunAll=sunlittlethree+sunlittletwo+sunlittleone;
		//全部商品总价
		$('.sumAll').html('￥'+sunAll+'.00')
		$('.increaseReducetwo').html(increaseReducetwo) 
		$('.sunlittletwo').html('￥'+sunlittletwo+'.00')
	})
	
	
	/* 第三个商品加减 */
	/* 数量减小 */
	$('.increasethree').click(function(){
		increaseReducethree--;
		if(increaseReducethree<=1){increaseReducethree=1}
		sunlittlethree=180*increaseReducethree;
		sunAll=sunlittlethree+sunlittletwo+sunlittleone;
		//全部商品总价
		$('.sumAll').html('￥'+sunAll+'.00')
		$('.increaseReducethree').html(increaseReducethree) 
		$('.sunlittlethree').html('￥'+sunlittlethree+'.00')
	})
	/* 数量增加 */
	$('.reducethree').click(function(){
		increaseReducethree++;
		sunlittlethree=180*increaseReducethree;
		sunAll=sunlittlethree+sunlittletwo+sunlittleone;
		//全部商品总价
		$('.sumAll').html('￥'+sunAll+'.00')
		$('.increaseReducethree').html(increaseReducethree) 
		$('.sunlittlethree').html('￥'+sunlittlethree+'.00')
	})
	
	/* 删除购物车商品 */
	$('.removeOne>.imgRemove').click(function(){
		//console.log(1)
		sunAll-=sunlittleone;
		$('.sumAll').html('￥'+sunAll+'.00')
		$('.removeOne').remove()
	})
	$('.removeTwo>.imgRemove').click(function(){
		sunAll-=sunlittletwo;
		$('.sumAll').html('￥'+sunAll+'.00')
		$('.removeTwo').remove()
	})
	$('.removeThree>.imgRemove').click(function(){
		sunAll-=sunlittlethree;
		$('.sumAll').html('￥'+sunAll+'.00')
		$('.removeThree').remove()
	})
})



