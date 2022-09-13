// const colorChange = (delay,color) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color
//             resolve()
//         },delay)
//     })
// }

// // colorChange(0,'red')
// //     .then(() => {
// //         return colorChange(2000,'blue')
// //     })
// //     .then(() => {
// //         return colorChange(2000,'green')
// //     })
// //     .then(() => {
// //         return colorChange(2000,'teal')
// //     })
// //     .then(() => {
// //         return colorChange(2000,'orange')
// //     })
// async function change(){
//     await colorChange(1000,'red')
//     await colorChange(1000,'orange')
//     await colorChange(1000,'blue')
//     await colorChange(1000,'violet')

//     return 1
// }

let input = document.querySelector('input')
const form = document.querySelector('#Form')
const weather = async () =>{
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=315dfe0d87b20232c628334aeb2305cb`)
        const r = await res.json();
        console.log(r)
    }catch(e){
        console.log(e)
    }
}
form.addEventListener('submit',(e)=>{
    console.log(input)
    e.preventDefault()
    weather()
    input.value = ' '
})
