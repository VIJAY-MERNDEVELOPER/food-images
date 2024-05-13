const apiKey = "8a54d8cc965745d7ad64954a7c89af92";
// const url = `https://api.spoonacular.com/recipes/complexSearch?${query}=${value}&apiKey=6d5faf1c50a14cda811a12c30aecdef8`;
const cuisineSelector = document.querySelector("#cuisine");
const dietSelector = document.querySelector("#diet");
const typeSelector = document.querySelector("#type");
const recipeElement = document.querySelector("#recipe");

cuisineSelector.addEventListener("change", function fetchCuisine(e) {
  recipeElement.innerHTML = "";
  const value = e.target.value;
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?cuisine=${value}&apiKey=8a54d8cc965745d7ad64954a7c89af92`
  )
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((recipe) => {
        recipeElement.innerHTML += `<div class="card  col-md-3 col-sm-3 p-2 m-2 ">
       
          <h5 class="text-center text-wrap">${recipe.title} </h5> 
          <div >
        <img src="${recipe.image}" alt="${recipe.title}"   style="height: fit-content; width: fit-content" ></img></div> </div>`;
      });
    })
    .catch((err) => console.log(err));
});

dietSelector.addEventListener("change", function fetchDiet(e) {
  recipeElement.innerHTML = "";
  const value = e.target.value;

  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?diet=${value}&apiKey=8a54d8cc965745d7ad64954a7c89af92`
  )
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((recipe) => {
        recipeElement.innerHTML += `<div class="card  col-md-3 col-sm-3 p-2 m-2 ">
       
          <h5 class="text-center text-wrap">${recipe.title} </h5> 
          <div >
        <img src="${recipe.image}" alt="${recipe.title}"   style="height: fit-content; width: fit-content" ></img></div> </div>`;
      });
    })
    .catch((err) => console.log(err));
});

typeSelector.addEventListener("change", function fetchType(e) {
  recipeElement.innerHTML = "";
  const value = e.target.value;
  console.log(value);
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?type=${value}&apiKey=8a54d8cc965745d7ad64954a7c89af92`
  )
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((recipe) => {
        recipeElement.innerHTML += `<div class="card  col-md-3 col-sm-3 p-2 m-2 ">
       
          <h5 class="text-center text-wrap">${recipe.title} </h5> 
          <div >
        <img src="${recipe.image}" alt="${recipe.title}"   style="height: fit-content; width: fit-content" ></img></div> </div>`;
      });
    })
    .catch((err) => console.log(err));
});
