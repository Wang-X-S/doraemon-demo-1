let string = `
*.skin{margin:0;padding:0;box-sizing: border-box;}
*.skin::after{
    box-sizing:border-box;
}
*.skin::before{
    box-sizing: border-box;
}

body{
    min-height: 100vh;
    background: aqua;
}
.skin{
    

    position:relative;
}
.head{
    position: absolute;
    margin:  auto ;
    margin-top:200px;
    width: 430px;
    height:400px;
    background: #1e90ff;
    border:2px solid black;
    border-radius: 47% 47% 45% 45%;
    left:50%;
    margin-left:-215px;
}
.face{
    position:absolute;
    left:50%;
    margin-left:-160px;
    top:300px;
    width: 320px;
    height:300px;
    background: white;
    border:2px solid black;
    border-radius: 47% 47% 45% 45%;
}
.nose{
    background: red;
    position:absolute;
    left:50%;
    top:400px;
    width:50px;
    height:50px;
    margin-left:-25px;
    border-radius: 50%;
    border:2px solid black;
}
.eyes{
    position:absolute;
    width: 100px;
    height: 120px;
    background: white;
    left:50%;
    margin-left:-50px;
    top:260px;
    border:2px solid black;
    border-radius: 45% ;
}
.eyes.left{
    transform: translateX(-50px);
}
.eyes.right{
    transform: translateX(50px);
}
.eyesBlack{
    position: absolute;
    background: black;
    width:20px;
    height:20px;
    left:50%;
    top:320px;
    margin-left:-10px;
    border-radius: 50%;
}
.eyesBlack.left{
    transform: translateX(-15px);
}
.eyesBlack.right{
    transform: translateX(15px);
}
.nose>.white{
    background: white;
    width: 18px;
    height: 18px;
    position:absolute;
    border-radius: 50%;
    left:20px;
    top:5px
}
.mouse{
    position:absolute;
    width:240px;
    height:200px;
    border-bottom: 2px solid #000;
    left:50%;
    margin-left: -120px;
    top:350px;
    border-radius: 0 0 45% 45%;
}
.nose>.line{
    position: absolute;
    width:2px;
    height: 100px;
    background: black;
    left:50%;
    margin-left:-1px;
    top:47px;
}
.mustache_left,.mustache_right{
    position:absolute;
    width: 180px;
    height: 180px;

    top:350px;
    left:50%;
}
.mustache_left{
    margin-left:-180px;
}
.mustache_left span:nth-child(n),.mustache_right span:nth-child(n){
    position: absolute;
    width: 100px;
    height:60px;

    border-top: 2px solid black;
}
.mustache_left span:nth-child(1){
    transform: translateX(20px) rotate(20deg);
    top:60px;

}
.mustache_right span:nth-child(1){ 
    transform: translateX(60px) rotate(-20deg);;
    top:60px;


}
.mustache_left span:nth-child(2){
    transform: translateX(25px);
    top:90px;

}
.mustache_right span:nth-child(2){ 
    transform: translateX(55px);
    top:90px;
}
.mustache_left span:nth-child(3){
    transform: translateX(40px) rotate(-20deg); 
    top:120px;

}
.mustache_right span:nth-child(3){ 
    transform: translateX(40px) rotate(20deg);
    top:120px;
}
.neck{
    position:absolute;
    width: 320px;
    height: 50px;
    background: red;
    border-radius: 25px;
    border:2px solid black;
    left:50%;
    margin-left: -160px;
    top:560px
}
.ball{
    position:absolute;
    width: 60px;
    height: 60px;
    background: #ffff00;
    border-radius: 50%;
    border:2px solid black;
    left:50%;
    margin-left: -30px;
    top:15px
}
.ball{
    overflow:hidden;
}

.ball>.line1{
    background: black;
    position:absolute;
    width:60px;
    height:2px;
    top:10px;

}
.ball>.line2{
    background: black;
    position:absolute;
    width:60px;
    height:2px;
    top:15px;
}
.ball>.hole{
    position:absolute;
    width:14px;
    height:10px;
    background: black;
    top:25px;
    left:50%;
    margin-left: -7px;
    border-radius: 5px;
}
.ball>.vertical{
    position:absolute;
    width: 2px;
    height: 50px;
    background: black;
    left:50%;
    margin-left: -1px;
    top:30px;
}
@keyframes move{
    0%{
        transform:rotate(0deg);
    }
    33%{
        transform:rotate(20deg);
    }
    66%{
        transform:rotate(-20deg);
    }
    100%{
        transform:rotate(0deg);
    }
}
.ball{
    animation: move 2s infinite;
}
`
export default string