import "./style.css"
import fetchData  from "./api-call.js";
import { displayDogPics } from "./display-data.js";

const data = await fetchData()

const arrayOfDogPics = data.message
console.log(arrayOfDogPics)

//pass data array to displayDogPics
displayDogPics(arrayOfDogPics)

