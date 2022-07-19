
window.onload = function(){
    
    button = document.querySelector('.btn_search_black');
    input = document.getElementById('search');

    // 클릭,엔터키 이벤트 
    input.addEventListener('keydown',function(e){
        if(e.key === "Enter"){
        Filter();
        }
    });

    button.addEventListener('click',Filter);

    function Filter(){
        var value , item , name
        
        value = document.getElementById('search').value.toUpperCase();
        item = document.getElementsByClassName('card_box')
        
    //indexOf()를 활용한 검색기능 구현
        for(i=0;i<item.length;i++){
        name = item[i].getElementsByClassName("name");
            if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
            item[i].style.display = "inline-block";
            }else{
            item[i].style.display = "none";
            }
        }
    }
}