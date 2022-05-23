
  var index = 0;
  var pIndex = 0;
  var $list = $("#notice_list > li");
  var liLength = $list.length;
  var liHeight = $("#notice_list > li").height();

  setInterval(() => {
    index++;
    if(index >= liLength){
      index = 0;
    }
    $list.eq(pIndex).animate({top: "-"+liHeight+"px"});
    $list.eq(index).css({top: liHeight+"px"});
    $list.eq(index).animate({top: 0+"px"});

    pIndex = index;
  }, 3000);