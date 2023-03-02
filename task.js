//task1
// var divleft=0;
// var divdown=0;
// var div =document.getElementById('item')
// document.body.addEventListener('keydown',function(e){
//     div.style.transition='2s'
//     if(e.code == 'ArrowRight'||e.code=="KeyJ"){
//         divleft+=100
//         div.style.left =divleft + 'px';
    
//     }else if(e.code=='ArrowLeft'||e.code=='KeyG'){
//         divleft-=100;
//         div.style.left=divleft+"px"
//     }else if(e.code=='ArrowUp'||e.code=="KeyY"){
//         divdown+=100;
//         div.style.bottom=divdown+"px";

//     }else if(e.code=='ArrowDown'||e.code=="KeyH"){
//         divdown-=100;
//         div.style.bottom=divdown+"px";

//     }else{
//         console.log("press Up,Down,Right or Left")
//     }

// });

//task2
// var divleft=0;
// var divdown=0;
// var countbull=0;
// var div =document.getElementById('img')
// var bull =document.getElementById('push')

// document.body.addEventListener('keydown',function(e){
//     div.style.transition='2s'
//     if(e.code == 'ArrowRight'||e.code=="KeyJ"){
//         divleft+=100
//         div.style.left =divleft + 'px';
//         bull.style.left =divleft+45 + 'px';
//     }else if(e.code=='ArrowLeft'||e.code=='KeyG'){
//         divleft-=100;
//         div.style.left=divleft+"px";
//         bull.style.left=divleft+45+"px";
//     }else if(e.code=='ArrowUp'||e.code=="KeyY"){
//         divdown+=100;
//         div.style.bottom=divdown+"px";
//         bull.style.bottom=divdown+65+"px";
//     }else if(e.code=='ArrowDown'||e.code=="KeyH"){
//         divdown-=100;
//         div.style.bottom=divdown+"px";
//         bull.style.bottom=divdown+65+"px";
//     }else{
//         console.log("press Up,Down,Right or Left")
//     }

// });

// document.body.addEventListener("keydown",function(e){
//     if(e.code=="Space"){
//         bull.style.bottom=500+"px"
//         bull.style.opacity=1
//         bull.style.transition='1s'
//         document.getElementById("audioshot").play();
//     }
// })
// document.body.addEventListener("keyup",function(){
//         bull.style.opacity=0
//         bull.style.bottom=divdown+65+"px"
//         bull.style.transition="0s"
        
// })

//task3
// var div =document.getElementById('imge')
// document.addEventListener('mousemove',function(e){
//     div.style.transform="translate("+e.clientX+"px,"+e.clientY+"px)"
// });

//task4
var div =document.getElementById('item')
document.addEventListener('click',function(){
    var x=Math.round(Math.random()*255)
    var y=Math.round(Math.random()*255)
    var z=Math.round(Math.random()*255)
    div.style.backgroundColor="rgb("+x+","+y+","+z+")"

})