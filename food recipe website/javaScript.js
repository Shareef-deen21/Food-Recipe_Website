const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailContent = document.querySelector('.meal-details-content');
const RecipeCloseBtn = document.getElementById('recipe-close-btn');

//eventlisteners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
RecipeCloseBtn.addEventListener('click', () => {
    mealDetailContent.parentElement.classList.remove('showRecipe');
});

//get meal list that matches with the ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `<div class="meal-item" data-id="${meal.idMeal}">
                            <div class="meal-img">
                                <img src="${meal.strMealThumb}" alt="food">
                            </div>
                            <div class="meal-name">
                                <h3>${meal.strMeal}</h3>
                              <button class="btn-1">
                              <div class="original">Get Recipe</div>
                              <div class="letters">
                                <span>G</span>
                                <span>E</span>
                                <span>T</span>
                                <span>&nbsp</span>
                                <span>R</span>
                                <span>E</span>
                                <span>C</span>
                                <span>I</span>
                                <span>P</span>
                                <span>E</span>
                              </div>
                            </button>
                            </div>
                        </div>
                `;
                });
            } else {
                html = "Sorry, we didn't find any meal";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}

//get recipe of the meal
function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-1')) {
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then(data => MealRecipeModal(data.meals));
    }
}

//create a modal
function MealRecipeModal(meal) {
    console.log(meal);
    meal = meal[0];
    let html = `
              <h2 class="recipe-title">${meal.strMeal}</h2>
              <p class="recipe-category">${meal.strCategory}</p>
              <div class="recipe-instruct">
                <h3>Instructions</h3>
                <p>${meal.strInstructions}</p>
              </div>
              <div class="recipe-meal-img">
               <img src="${meal.strMealThumb}" alt="">
              </div>
              <div class="recipe-link">
               <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
              </div>
    `;
    mealDetailContent.innerHTML = html;
    mealDetailContent.parentElement.classList.add('showRecipe')
}