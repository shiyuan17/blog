$(function(){
	//分页
	layui.use(['laypage', 'layer'], function(){
	  var laypage = layui.laypage
	  layer = layui.layer;
	  //总页数大于页码总数
	  laypage.render({
	    elem: 'page'
	    ,count: 70 //数据总数
	    ,jump: function(obj){
	      console.log(obj)
	    }
	  });
	});
	layui.use('form', function(){
  		var form = layui.form;
  		//工单管理检索按钮
  		form.on('submit(searchBtn)', function(data){
		    layer.msg(JSON.stringify(data.field));
	    	return false;
		})
		//工单管理筛选日期按钮
		form.on('submit(dateBtn)', function(data){
		    layer.msg(JSON.stringify(data.field));
	    	return false;
		})
		//常见问题检索按钮
		form.on('submit(cjwtSearch)', function(data){
		    layer.msg(JSON.stringify(data.field));
	    	return false;
		})
		//知识库检索按钮
		form.on('submit(zskSearchBtn)', function(data){
		    layer.msg(JSON.stringify(data.field));
	    	return false;
		})
  	})
  	//退出登录
  	$('.exit').on('click',function(){
  		layer.confirm('确认要退出系统吗？', {
			btn: ['确定','取消'] //按钮
			}, function(){
			  layer.load();
			//此处演示关闭
			setTimeout(function(){
			  layer.closeAll('loading');
			  window.location.href="login.html"
			}, 1000);
		});
  	})
})

//打开窗体
function open_window(title,el,width,height){
	layer.open({
		type: 1,
		anim :4,
		isOutAnim:true,
		title: title,
        area: [width+'px', height+'px'],
	    content: $(el),
	});	
}