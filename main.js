//select cross row

let dinoCross = document.querySelectorAll('.feature #dino-cross li')
// console.log(dinoCross)
for(let i = 0; i < dinoCross.length ; i++) {
    // console.log(dinoCross[i])
    dinoCross[i].addEventListener('click', (e)=> {
        dinoCross[i].style.textDecoration ="line-through"
        console.log(e.target)
    })
}

//make it fade
let dinoFade = document.querySelectorAll('.feature #dino-fade li')
// console.log(dinoFade)
for(let i = 0; i < dinoFade.length ; i++) {
    // console.log(dinoFade[i])
    dinoFade[i].addEventListener('click', (e)=> {
        dinoFade[i].style.opacity ="0"
        console.log(e.target)
    })
}

//make image collapse
let dinoRow = document.querySelectorAll('#row img')
console.log(dinoRow)
const collapseRow = () => {
for(let i = 0; i < dinoRow.length ; i++) {
    // console.log(dinoRow[i])
    dinoRow[i].addEventListener('click', (e)=> {
        console.log(e.target)
        //decrease image width
        dinoRow[i].style.width ="0px"
        
    })
}
}
collapseRow()
//blow it all up
let meteor = document.querySelector('#burn button')
// console.log(meteor)
meteor.addEventListener('click', (e)=> {
    for(img of dinoRow) {
        img.style.width ="0px"
    }
    for(pic of dinoFade) {
        pic.style.opacity="0"
    }
    for(pic of dinoCross) {
        pic.style.textDecoration="line-through"
    }
})
