 define(['jquery','template','cookie'],function($,template){
      $(function(){
                // 点击按钮退回登录页
                $('#exit').click(function(){
                    $.ajax({
                      url:'/api/logout',
                      type:'post',
                      success:function(data){
                         console.log(data)
                         if(data.code==200){
                           location.href="dashboard/login"
                         }
                      }
                    })
                })
              })
 })