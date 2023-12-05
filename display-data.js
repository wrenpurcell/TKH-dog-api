
export function displayDogPics(arrayOfDogPics){
  arrayOfDogPics.forEach((dogImgUrl) => {
    //run whatever code is here for each element in the array

    //use DOM method to display image
    const newImg = document.createElement("img");
    newImg.src = dogImgUrl;
    newImg.className = "dog-img"
    document.body.append(newImg);
  });
}