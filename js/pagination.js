$(document).ready(function(){
        
    function(){
        var count = $(".card_box").length;
        if(count > 9){
            $(".card_box:gt(8)").hide();
        }
    }
})