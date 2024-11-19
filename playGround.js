// function number() {
//     // normal function
// }
// number()

// Arrow Function
// const number = n => n;
// console.log(number(10))

// const number = (n, z) => n + z;
// console.log(number(10,50))

// var javascript = {
//     name: 'javascript',
//     libraries: ['React', 'Angular', 'Vue'],
//     printLibraries: function () {
//         this.libraries.forEach((a) => console.log(`${this.name} love ${a}`))
//     }
// }

// javascript.printLibraries()


const searchInput = document.querySelector('.search')
const display = document.querySelector('.result')
const thanks = document.querySelector('.thanks')

function show() {
    display.innerHTML = this.value;
    setTimeout(() => {
        thanks.innerHTML = `you have by typed: ${this.value} `
    }, 1000);
}

searchInput.addEventListener('keyup', show)