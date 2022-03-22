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