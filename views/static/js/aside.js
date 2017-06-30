define(['jquery','template','cookie'],function($,template){
      $('.navs>ul>li').click(function(){
          $(this).children('a').addClass('active');
          $(this).siblings().children('a').removeClass('active');
      })

      $('.navs>ul>li>ul').parent().click(function(){
        $(this).children('ul').slideToggle();
      })
      
})