// 1. Simple Function 
function hello()  {
    console.log("Hello")
}

// Arrow Function
const hello2 = () => {
    console.log("Yo")
}

hello()
hello2()

// ---------------------
// -----------------



// 2. Ternary Operators 

let age = 10;
let  name;

// Long Way 
if(age>10) {
    name = "Vishal"
}
else {
    name = "Unknown"
}

// Ternary way

const age1  = 19;
let name1  = age1>10 ? "Vishal" : "Unknown"

console.log(name1)


// -----------------
// ---------------------------------------

// 3. Ojects 
        // Inheriting the property of the upper variables 
const person45 = {
    name1,
    age1,
    Class :98
}

console.log(person45)

    // Inheriting the property of other ojects 
const person55 = {...person45, name1 :"Hello ewr"}
console.log(person55)

// 4. Asyn Await -- 
// Calling Api 
// Method -1 

const axios = require("axios")
const data = axios.get('https://api.publicapis.org/entries')

data.then( (res) => {
    console.log(res)
} ).catch ( (err)=> {
    console.log(err)
} ).finally( () => {
    console.log("Api fetching done")
})



// Method -2 

const fetching = async () => {
    try{
    const data = await axios.get('https://catfact.ninja/fact')
    console.log(data)
    } catch (err) {
        console.log(err)
    }finally{
        console.log(" Api Fetching done! ")
    }
}

// calling 
fetching();