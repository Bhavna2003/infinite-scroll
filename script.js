var listele = document.querySelector('#infinite-list');

var nextItem = 1;
var loadmore = function(){
    for(var i=0; i<20; i++){
        var item = document.createElement('li');
        item.innerText = 'Item ' + nextItem++;
        listele.appendChild(item);
    }
}

listele.addEventListener('scroll', function(){
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight){
        loadmore();
    }
});

loadmore();
