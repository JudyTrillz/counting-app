let count = 0
let figure = document.getElementById('count-el')
let increase = document.getElementById('increment-btn')
let decrease = document.getElementById('decrement-btn')
let save = document.getElementById('save')
let entry = document.getElementById('entries')
let enter = document.getElementById('enter')
let error = document.getElementById('error')
let reset = document.getElementById('reset')


increase.addEventListener('click', ()=>{
    count += 1
    figure.innerHTML = count
})

decrease.addEventListener('click', ()=>{
    if(count <= 0){
        count -= 0
        figure.innerHTML = count
    }else{
        count -= 1
        figure.innerHTML = count
    }
})

save.addEventListener('click', ()=>{
    if(count <= 0){
        entry.classList.add('show')
        error.classList.remove('show')
    }else{
        entry.classList.remove('show')
        error.classList.add('show')
    }
    let saved = count + ' - '
    entry.innerHTML += saved
    figure.innerHTML = 0
    count = 0
    
})

reset.addEventListener('click', ()=>{
   figure.innerHTML = 0
    count = 0
    entry.innerHTML = 'Previous Entries : &nbsp; '
    let noShow = error
    if(noShow.classList.add('open2')){
        noShow.classList.add('open2')
    }else{
        entry.classList.remove('show')
        noShow.classList.add('show')
        noShow.classList.add('open2')
    }
})



















