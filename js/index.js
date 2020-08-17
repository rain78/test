$(function(){
	//获取自动轮播变量
	var num=0;
	//设置自动轮播定时器
	var time=setInterval(run,2000)
	//封装轮播函数
	function run(){
		//递增
		num++;
		if(num>=$('.imgs li').length){
			num=0;
		}
		//设置图片自动轮播
		$('.imgs li').eq(num).fadeIn().siblings().fadeOut();
		//小圆点一起懂
		$('.cirs li').eq(num).addClass('dian').siblings().removeClass('dian');
	}
	
	//鼠标移动停止轮播 移除轮播
	$('.rotationChart').hover(function(){
		clearInterval(time)
	},function(){
		time=setInterval(run,1000)
	})
	
	//小圆点控制图片
	$('.cirs li').click(function(){
		num=$(this).index()-1;
		run()
	})
	
	//点击左边按钮
	$('.left').click(function(){
		//递减
		num--;
		if(num<0){
			num=$('.imgs li').length-1;
		}
		//console.log(num)
		//设置图片自动轮播
		$('.imgs li').eq(num).fadeIn().siblings().fadeOut();
		//小圆点一起的
		$('.cirs li').eq(num).addClass('dian').siblings().removeClass('dian')
	})
	
	//点击右边按钮
	$('.right').click(run)
	
})

/* 首页小轮播图 */
$(function(){
	/* 获取点击小圆点当前下标 */
	var cir;
	/* 获取图片当前下标 */
	var Num=0;
	/* 给右按钮绑定点击事件 */
	$('.rightBest').click(function(){
		Num++;
		if(Num>=$('.bestList>li').length){Num=0}
		$('.bestList').append($('.bestList>li').first());
		/* 小圆点改变 */
		$('.cirBest>li').eq(Num).addClass('dianBest').siblings().removeAttr('class');
	})
	/* 给左边按钮绑定点击事件 */
	$('.leftBest').click(function(){
		Num--;
		if(Num<0){Num=$('.bestList>li').length-1}
		$('.bestList').prepend($('.bestList>li').last());
		$('.cirBest>li').eq(Num).addClass('dianBest').siblings().removeAttr('class');
	})
	/* 给小圆点设置绑定事件 */
	$('.cirBest>li').click(function(){
		$(this).addClass('dianBest').siblings().removeAttr('class');
		var res=$(this).index();
		//如果要点击的图片下标小于当前展示的图片下标
		if(res<Num){
			for(var i=0;i<(Num-res);i++){
				$('.bestList').prepend($('.bestList>li').last());
			}
		}else{//如果要点击的图片下标大于当前展示的图片下标
			for(var j=0;j<(res-Num);j++){
				$('.bestList').append($('.bestList>li').first());
			}
		}
		Num=res;
	})
})

/* 会员登录 注册 */
$(function(){
	$('.liRight>li').eq(1).click(function(){
		/* 登录显示 */
		$('.login').css('display','block');
		//隐藏placeholder
		$('#user').focus(function(){
			 $('#user').removeAttr('placeholder')	 
		})
		$('#pass').focus(function(){
			 $('#pass').removeAttr('placeholder')	 
		})
		//关闭登录页面
		$('.loginClose').click(function(){
			$('.login').css('display','none')
		})
		//关闭注册页面
		$('.registerClose').click(function(){
			$('.register').css('display','none')
		})
		//判断登录密码账号不能为空
		$('#user').blur(function(){
			//判断手机是否为空
			//console.log(2)
			if($('#user').val()==''){
				//console.log(1)
				$('#user').css('background','red')
				$('#user').attr('placeholder','手机号不能为空哦')
				setTimeout(function(){
					$('#user').css('background','white')
					$('#user').attr('placeholder','请输入手机号')
				},2000)
			}
		})
		//判断登录密码是否为空
		$('#pass').blur(function(){
			//判断手机是否为空
			if($('#pass').val()==''){
				$('#pass').css('background','red')
				$('#pass').attr('placeholder','密码不能为空哦')
				setTimeout(function(){
					$('#pass').css('background','white')
					$('#pass').attr('placeholder','请输入密码')
				},2000)
			}
		})
		
		//登录成功 判断注册和登录的账号是否一致
		$('#login').click(function(){
			if($('#user').val()==$('#userre').val()&&$('#pass').val()==$('#passre').val()&&$('#user').val()!=''&&$('#pass').val()!=''){
				//console.log(1)
				location.assign('../html/index.html');
			}else{
				//console.log(1)
				$('#user').val('')
				$('#pass').val('')
				alert('账号密码不正确')
			}
			
		})
		
		/* 注册 */
		//打开注册页面 关闭登录页面
		$('#register').click(function(){
			$('.login').css('display','none');
			$('.register').css('display','block');
			//隐藏placeholder
			$('#userre').focus(function(){
				 $('#userre').removeAttr('placeholder')	 
			})
			$('#passre').focus(function(){
				 $('#passre').removeAttr('placeholder')	 
			})
			//判断注册手机号是否正确
			$('#userre').blur(function(){
				//判断手机是否为空
				if($('#userre').val()==''){
					$('#userre').css('background','red')
					$('#userre').attr('placeholder','手机号不能为空哦')
					setTimeout(function(){
						$('#userre').css('background','white')
						$('#userre').attr('placeholder','请输入手机号')
					},2000)
				}
				//判断手机号是否为11位
				//先将输入的手机号转化为数组 查看长度
				var phonenum=$('#userre').val().split('')
				if(phonenum.length!=11&&($('#userre').val()!='')){
					//console.log(1)
					$('#userre').css('background','red');
					//$('#userre').val()='';
					$('#userre').val('')
					$('#userre').attr('placeholder','手机号位数不正确哦')
					setTimeout(function(){
						$('#userre').css('background','white')
						$('#userre').attr('placeholder','请输入手机号')
					},2000)
				}
			})
			
			//判断注册密码是否为空
			$('#passre').blur(function(){
				//判断手机是否为空
				if($('#passre').val()==''){
					$('#passre').css('background','red')
					$('#passre').attr('placeholder','密码不能为空哦')
					setTimeout(function(){
						$('#passre').css('background','white')
						$('#passre').attr('placeholder','请输入密码')
					},2000)
				}
			})
			
			//注册提交跳转到登录
			$('#registerre').click(function(){
				if($('#userre').val()!=''&&$('#userre').val()!=''){
					$('.login').css('display','block');
					$('.register').css('display','none');
				}else{alert('账号或者密码为空')}
			})
			
			//判断登录密码账号不能为空
			$('#user').blur(function(){
				//判断手机是否为空
				//console.log(2)
				if($('#user').val()==''){
					//console.log(1)
					$('#user').css('background','red')
					$('#user').attr('placeholder','手机号不能为空哦')
					setTimeout(function(){
						$('#user').css('background','white')
						$('#user').attr('placeholder','请输入手机号')
					},2000)
				}
			})
			
			
			
			
			
			
		})
		
	}) 
})



















