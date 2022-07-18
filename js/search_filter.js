$(document).ready(function(){
    
    var count = $(".card_box").length;
    pagingHide = funtion(){
        if(count > 9){
        $(".card_box:gt(8)").hide();
        }
    }
    
    
    $("#search").keyup(function(){
        var k = $(this).val();
       // console.log(k); input 데이터 잘 받아오는지 확인
            $("#card_container > .card_wrap > .card_box").hide();
            var name = $(".card_text_box:nth-child(n+1):contains('" + k + "')");
            $(name).parent().show();
        // console.log(count); 확인로그
    })
})