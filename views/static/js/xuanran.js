 define(['jquery','template','cookie'],function($,template){
          $(function(){
            if("/dashboard/login" != location.pathname){
                        var userInfo =JSON.parse($.cookie("userinfo"));
                        var str = template('profile-tpl',userInfo);
                        $('#userinfo').html(str);
            }
                      })
 })
   