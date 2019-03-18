//1.自动播放
let timer;
let currentIndex = 0;
let arr = ["banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg"];
function autoplay(){
        timer = setInterval(function(){
            //1.数据处理
            currentIndex ++;
            //2.边界处理
            if(currentIndex > 4){
                currentIndex = 0;
            }
            // url(img/indexImg/)
            //3.外观呈现
            banner.style.backgroundImage =`url(img/indexImg/${arr[currentIndex]})`;
            for(let i = 0;i < squareBox.children.length; i ++){
                //1.让所有的豆豆的颜色为#333333色
                squareBox.children[i].style.backgroundColor = "#333333";
            }

            squareBox.children[currentIndex].style.backgroundColor = "#ff0000";
        },2000);
}
//2.停止播放
function stopPlay(){
    clearInterval(timer);
}
//3.点击对应的方框跳转到不同的图片
function jump(index){
    clearInterval(timer);
    currentIndex = index;
    for(let i = 0;i < squareBox.children.length;i++){
        //1.让所有的豆豆的颜色为#333333色
        squareBox.children[i].style.backgroundColor="#333333";
    }
    squareBox.children[index].style.backgroundColor="#ff0000";
    banner.style.backgroundImage =`url(img/indexImg/${arr[index]})`;
}