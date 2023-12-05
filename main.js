import "./style.css"
//import the fetchData function 
import fetchData  from "./api-call.js";

//call fetchData()
//make sure to use await, since we are still waiting for a promise to resolve when we call fetchData
const data = await fetchData()

//console.log data to see the object we're getting back from the API call
console.log(data)