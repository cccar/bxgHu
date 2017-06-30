define(['jquery','template','bootstrap','cookie'],function($,template,bootstrap){
          // 讲师管理数据ajax请求
          $(function(){
                $.ajax({
                        url:'/api/teacher',
                        type:'post',
                        success:function(data){
                                if(data.code==200){
                                      console.log(data);
                                      var str = template('list-tpl',data);
                                      $('#listtable').html(str);
                                }
                        },
                        error:function(){
                          console.log('请求出错');
                        }
                })
         })

})