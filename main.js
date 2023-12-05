import "./style.css"
import fetchData  from "./api-call.js";

const data = await fetchData()
console.log(data)