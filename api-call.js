// https://dog.ceo/api/breeds/image/random/3

//make sure to install axios via the terminal 'npm install -save axios'
import axios from "axios"

//create an async function and export it 
export default async function fetchData(){

    //await the response from making the GET request to the url
      const response = await axios.get("https://dog.ceo/api/breeds/image/random/3");

      //return the response so we can access it outside of the function
      return response
 
}