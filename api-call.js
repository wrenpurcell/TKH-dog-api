// https://dog.ceo/api/breeds/image/random/3

import axios from "axios"

export default async function fetchData(){
  try {
      const response = await axios.get("https://dog.ceo/api/breeds/image/random/3");
      if(response.status !== 200){
        throw new Error("some kind of error :(")
      }
      return response.data
  }
  catch(error){
    console.error("Error: " + error)
  }
}