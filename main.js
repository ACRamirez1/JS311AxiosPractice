// this is just a check
// console.log("LET'S GOOOOOOOOOOOOO, IT'S TIME TO CODE!!!!")

const axios = require('axios')

const getContact = () => {

try {
    const res = axios.get('https://randomuser.me/api/')
    .then(res => {console.log(res.data.results)})
} catch(error) {
    console.log("ERROR", error)
} finally {

}


}

// console.log(getContact())

//https://swapi.dev/api/people/1        //but I want to pick different numbers, maybe template literal

const getStarWarsPerson = (id) => {

    try {
        const res = axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res => {console.log(res.data)})


    } catch(error) {
        console.log("ERROR", error)

    } 

}

console.log(getStarWarsPerson(1));