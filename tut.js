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

// 4. 