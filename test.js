import string from './exportCss.js'
let demo1 = document.querySelector('#demo1')
let demo2 = document.querySelector('#demo2')
let n = 0
let time = 100
let id
//面向对象方法优化
let player = {
    init: () => {
        player.play()
        player.bindEvent()
    },

    events:{
        '#btnPause': 'clear',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
        
    },
    bindEvent:()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
            const value = player.events[key]
            document.querySelector(key).onclick = player[value]
        }
        }
    },
    run: () => {
        n += 1
        if (n > string.length) {
            window.clearInterval(id)
            return
        }
        demo1.innerText = string.substr(0, n)
        demo2.innerHTML = string.substr(0, n)
        demo1.scrollTop = demo1.scrollHeight
    },
    play: () => {
        id = setInterval(player.run, time)
    },
    clear: () => {
        window.clearInterval(id)
    },
    slow: () => {
        player.clear()
        time = 300;
        player.play()
    },
    normal: () => {
        player.clear()
        time = 100
        player.play()
    },
    fast: () => {
        player.clear()
        time = 0
        player.play()
    }

}

player.init()



