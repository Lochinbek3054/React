// let isYourDadHappy = false;

// let willGetNewPhone = new Promise(
//     function(resolve, reject) {
//         if (isYourDadHappy) {
//             let phone = {
//                 brand: "Samsung",
//                 color: "black"
//             };
//             resolve(phone)
//         }   else {
//             let reason = new Error('Your dad is unhappy')
//             reject(reason)
//         }
//     }
// )

// const askDad = function () {
//     willGetNewPhone
//         .then(function (fullfilled) { 
//             console.log(fullfilled)     
//         }    
//     )
//     .catch( function (error) {
//     console.log(error.message)
//     })
// }
let urls = [
    'iliakan',
    'qodirovshohijahon',
    'remy'
]

let requests = urls.map(url => fetch(`https://api.github.com/users/${url}`));

Promise.all(requests)
    .then((responses) =>
        responses.forEach(res =>
            console.log(`${res.url}: ${res.status}`))
            );