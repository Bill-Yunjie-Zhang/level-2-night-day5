// const checkLonger = (str1, str2) => {
//     // check if the imputs are strings
//     // check if they are equal
//     // get the length of the two
//     // compare the length
//     // return the result
    
//     if (typeof str1 !== "string" && typeof str2 !== "string") {
//         return "Please imput a string!"
//     } else {
//         const Lstr1 = str1.length
//         const Lstr2 = str2.length
//         let longer = ""
//         if (Lstr1 === Lstr2) {
//             longer = "They are same in length"
//         } else if (Lstr1 > Lstr2){
//             longer = str1
//         } else {
//             longer = str2
//         }
//         return longer
//     }
// }


// console.log(checkLonger("Bill", "Gio"))


const cities = require('all-the-cities')
const chengdu = cities.find(e => e.name === "Chengdu")
const washington = cities.find(e => e.name === "Washington")
const allTheCityInChina = cities.filter(e => e.country === "CN" && e.population > 1000000)

console.log(chengdu)
console.log(washington)
console.log(allTheCityInChina, allTheCityInChina.length)