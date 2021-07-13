import string from './exportCss.js'
let n = 1
demo2.innerHTML = string.substr(0, n)

const run = () => {
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    demo1.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo1.scrollTop = demo1.scrollHeight
}

const play = () => {
    return setInterval(run, time)
}
const clear = ()=>{
    window.clearInterval(id)
}
const slow = ()=>{
    clear()
    time = 300;
    id = play()
}
const normal = ()=>{
    clear()
    time = 100
    id = play()
}
const fast=()=>{
    clear()
    time = 0
    id = play()
}

let time = 100
let id = play()

btnPause.onclick = () => {
    clear()
}
btnPlay.onclick = () => {
    id = play()
}

btnSlow.onclick =slow

btnNormal.onclick = normal

btnFast.onclick = fast