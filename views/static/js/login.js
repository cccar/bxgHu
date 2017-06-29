define(['jquery','form','cookie'],function($){
       $('#login-form').submit(function(){
            $(this).ajaxSubmit({
                url:"/api/login",
                type:"post",
                success:function(data){
                    
                    if(data.code==200){
                        console.log(data.result);
                        $.cookie("userinfo",JSON.stringify(data.result),{path:'/'});
                        location.href="/";
                    }
            
                },
                error:function(){
                    console.log('请求出错')
                }
            });
            return false;
        })
 })
 