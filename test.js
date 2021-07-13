import string from './exportCss.js'
let n = 1
demo2.innerHTML = string.substr(0,n)

const run= ()=>{
    n += 1
    if(n > string.length){
        window.clearInterval(id)
        return
    }
    demo1.innerText = string.substr(0,n)
    demo2.innerHTML = string.substr(0,n)
    demo1.scrollTop =demo1.scrollHeight
}
let time = 100
let id = setInterval(run,time)

btnPause.onclick=()=>{
    window.clearInterval(id)
}
btnPlay.onclick =()=>{
    id = setInterval(()=>{
        run()
    },time)
}

btnSlow.onclick=()=>{
    window.clearInterval(id)
    time = 300;
    id = setInterval(()=>{
        run()
    },time)
}
btnNormal.onclick=()=>{
    window.clearInterval(id)
    time = 100
    id = setInterval(run,time)
}
btnFast.onclick=()=>{
    window.clearInterval(id)
    time = 0
    id = setInterval(run,time)
}