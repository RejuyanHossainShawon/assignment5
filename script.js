function loadData(value) {
  document.getElementById("searchResult").innerHTML = "";

  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + value + "")
    .then((res) => res.json())
    .then((data) => {
      if (data.meals === null) {
        const message = `<h1 style="color:red;text-align:center;font-size:50px">you search is not valid please try properly</h1>
       `;
        document.getElementById("searchResult").innerHTML = message;
      } else {
        const mealList = data.meals;
        displayMeals(mealList);
      }
    });
}

const displayMeals = (mealList) => {
  const searchResult = document.getElementById("searchResult");
  for (let i = 0; i < mealList.length; i++) {
    const element = mealList[i];

    const imgUrl = element.strMealThumb;

    const divMealList = document.createElement("div");
    divMealList.className = "box-size";

    const article = `
        <img src="${imgUrl}">
        <p>${element.strMeal}</p>
        <p class="link">
        `;

    divMealList.innerHTML = article;
    searchResult.appendChild(divMealList);

    function detailsShow() {
      let classList = document.getElementsByClassName("box-size");

      for (let index = 0; index < classList.length; index++) {
        const element = classList[index];

        element.addEventListener("click", function (event) {
          console.log(event.target);
        });
      }
    }
    detailsShow();
  }
};
