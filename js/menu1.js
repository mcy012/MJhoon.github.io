$(function(){

  



  /*1 모바일 헤더네비*/
  $("#main_nav_m > ul > li >a").click(function(){
    var $li=$(this).parent("li");
    if($li.hasClass("active")){
      $li.removeClass("active");
    }else{
      $li.addClass("active");
    }
  });


  /* 데스크톱 헤더 네비*/   
  $("#main_nav_d h2 a").mouseover(function(){
    $("#main_header_d").addClass("active");
    $("#main_nav_d").addClass("active");
    $(".gnb_bg").addClass("active");
    $("#search_wrap_d input:eq(1)").attr("src","images/icon_magnifier_blue.png");
    $("#search_wrap_d fieldset").css({borderBottom:"2px solid #3665c1"});
  });

  $("#main_nav_d").mouseleave(function(){
    $("#main_header_d").removeClass("active");
    $("#main_nav_d").removeClass("active");
    $(".gnb_bg").removeClass("active");
    $("#search_wrap_d input:eq(1)").attr("src","images/icon_magnifier_white.png");
    $("#search_wrap_d fieldset").css({borderBottom:"2px solid #fff"});
  });

  /*sub_nav_d li 동작 명령어*/ 
  $("#main_header_d .inner li").mouseover(function(){
    $(this).addClass("active");
  });

  $("#main_header_d .inner li").mouseleave(function(){
    $(this).removeClass("active");
  });

});