// const axios = require("axios")
//M-1
// const data = axios.get('https://catfact.ninja/fact')

// data.then(
//     (res) => {
//         console.log(res)
//     }
// ).catch(
//     (err) =>{
//         console.log(err)
//     }
// ).finally(
//     () => {
//         console.log("Api requesting Done ! ")
//     }
// )

// M-2
const axios = require("axios")

const fetching = async () => {
    try{
        const data = await axios.get("https://catfact.ninja/fa")
        console.log(data)
    } catch (err) {
        console.log(err)
    } finally {
        console.log("Api fetching is done ! ")
    }
}

fetching()