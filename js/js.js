window.onload=function  () {
	//得到所有图片的数量
					var imgamount = $("#tupian ul li").length;
					
					//克隆一个节点，放在最后当猫腻
					$("#tupian ul li:first").clone().appendTo($("#tupian ul"));
					$("#tupian ul li").eq(imgamount-1).clone().prependTo($("#tupian ul"));

					var imagewidth = $("#tupian ul li:eq(2) img").width();
					//var imagewidth =
					//默认的时候，显示为第0张图片
					 $("#tupian ul").css("left",-imagewidth);

					var jiangeshijian = 2000; //  ← 请设置这个值，表示自动轮播的间隔时间

					//信号量，指示当前图片编号
					var nowshowpic = 0; 
			
					//给右边按钮添加监听
					$("#anniu .you").click(
						function(){
							if(!$("#tupian ul").is(":animated")){
								if(nowshowpic < imgamount - 1){
									nowshowpic ++;
									huantu(nowshowpic);
								}else{
									nowshowpic = 0;
									huantu2(imgamount);
								}
								
							}
						}
					);

					//给右边按钮添加监听
					$("#anniu .zuo").click(
						function(){
							if(!$("#tupian ul").is(":animated")){
								if(nowshowpic > 0){
									nowshowpic --
									huantu(nowshowpic);
								}else{
									nowshowpic = imgamount - 1;
									huantu3(nowshowpic);
								}
								
							}
						}
					);
					//核心函数，跑火车的执行者。
					function huantu(num){
						$("#tupian ul").animate(
							{
								"left": -1 * $("#tupian ul li img").width() * (num + 1)
							}
							,300
						);
					}
					function huantu2(num){
						$("#tupian ul").animate(
							{
								"left": -1 * $("#tupian ul li img").width() * (num + 1)
							}
							,300,function(){
								$("#tupian ul").css("left",-imagewidth);
							}
						);
					}
					function huantu3(num){
						$("#tupian ul").animate(
							{
								"left": 0
							}
							,300,function(){
								$("#tupian ul").css("left",-imagewidth * imgamount);
							}
						);
					}
					$(".li_son").hide();	
			$(".mainnav").children("li").mouseover(
				function(){
					$(this).children(".li_son").show()
				}
			)
			$(".mainnav").children("li").mouseleave(
				function(){
					$(this).children(".li_son").hide()
				}
			)
				}		
