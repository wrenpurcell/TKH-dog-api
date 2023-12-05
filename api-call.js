// https://dog.ceo/api/breeds/image/random/3

import axios from "axios"

export default async function fetchData(){

      const response = await axios.get("https://dog.ceo/api/breeds/image/random/3");
      return response
 
}