function getNutritionalFactsHTML(recipe){
    // returns the nutritional facts table html
    let nutFactsHTML = "";
    const nutFacts = recipe.totalNutrients;
    const servings = recipe.yield;
    const totalFat = Math.floor(nutFacts.FAT.quantity/servings);
    const satFat = Math.floor(nutFacts.FASAT.quantity/servings);
    const transFat = Math.floor(nutFacts.FATRN.quantity/servings);
    const cholestrol = Math.floor(nutFacts.CHOLE.quantity/servings);
    const sodium = Math.floor(nutFacts.NA.quantity/servings);
    const carbs = Math.floor(nutFacts.CHOCDF.quantity/servings);
    const fiber = Math.floor(nutFacts.FIBTG.quantity/servings);
    const protien = Math.floor(nutFacts.PROCNT.quantity/servings);
    const sugar = Math.floor(nutFacts.SUGAR.quantity/servings);
    const vitaminA = Math.floor(nutFacts.VITA_RAE.quantity/servings);
    const vitaminC = Math.floor(nutFacts.VITC.quantity/servings);
    const calcium = Math.floor(nutFacts.CA.quantity/servings);
    const iron = Math.floor(nutFacts.FE.quantity/servings);

    nutFactsHTML = `    
        <div class="facts-header-wrapper">
            <h2 class="facts-header bold">
                Nutrional Facts
            </h2>
            <p>Serving Size ${recipe.yield} </p>
            <p>Total Calories ${Math.floor(recipe.calories)} kcal</p>
        </div>
        <div calss="facts-per-serving">
            <p class="header">
                Amounts Per Serving
            </p>
            <div class="facts-cal-wrapper bold-brdr facts-flex">
                <p class="facts-cal-text">
                    Calories
                </p>
                <p class="facts-cal-num">
                    ${Math.floor(recipe.calories/servings)}
                </p>
            </div>
            <p class="daily-val brd-btm bold">
                % Daily Value*
            </p>
            <div class="facts-flex brd-btm bold">
                <p>
                    Total Fat ${totalFat}${nutFacts.FAT.unit}
                </p>
                <p>
                    ${Math.floor((totalFat/65)*100)}%
                </p>
            </div>
            <div class="facts-flex brd-btm mrgn-left">
                <p>
                    Saturated Fat ${satFat}${nutFacts.FASAT.unit}
                </p>
                <p>
                    ${Math.floor((satFat/20)*100)}%   
                </p>
            </div>
            <div class="facts-flex brd-btm mrgn-left">
                <p>
                    Trans Fat ${transFat}${nutFacts.FATRN.unit}
                </p>
                <p>
                    ${Math.floor((transFat/20)*100)}%   
                </p>
            </div>
            <div class="facts-flex brd-btm bold">
                <p>
                    Cholesterol ${cholestrol}${nutFacts.CHOLE.unit}
                </p>
                <p>
                    ${Math.floor((cholestrol/300)*100)}%   
                </p>
            </div>
            <div class="facts-flex brd-btm bold">
                <p>
                    Sodium ${sodium}${nutFacts.NA.unit}
                </p>
                <p>
                    ${Math.floor((sodium/2400)*100)}%   
                </p>
            </div>
            <div class="facts-flex brd-btm bold">
                <p>
                    Total Carbohydrates ${carbs}${nutFacts.CHOCDF.unit}
                </p>
                <p>
                    ${Math.floor((carbs/300)*100)}%   
                </p>
            </div>
            <div class="facts-flex brd-btm mrgn-left">
                <p>
                    Dietary Fiber ${fiber}${nutFacts.FIBTG.unit}
                </p>
                <p>
                    ${Math.floor((fiber/25)*100)}%   
                </p>
            </div>
            <div class="facts-flex brd-btm mrgn-left">
                <p>
                    Sugars ${sugar}${nutFacts.FIBTG.unit}
                </p>
            </div>
            <div class="facts-flex bold-brdr bold">
                <p>
                    Protien ${protien}${nutFacts.CHOCDF.unit}
                </p>
            </div>
            <div class="facts-flex brd-btm">
                <p>
                    Vitamin A ${vitaminA}${nutFacts.VITA_RAE.unit}
                </p>
                <p>
                    ${Math.floor((vitaminA/900)*100)}%   
                </p>
            </div>
            <div class="facts-flex brd-btm">
                <p>
                    Vitamin C ${vitaminC}${nutFacts.VITC.unit}
                </p>
                <p>
                    ${Math.floor((vitaminC/60)*100)}%   
                </p>
            </div>
            <div class="facts-flex brd-btm">
                <p>
                    Calcium ${calcium}${nutFacts.CA.unit}
                </p>
                <p>
                    ${Math.floor((calcium/1100)*100)}%   
                </p>
            </div>
            <div class="facts-flex brd-btm">
                <p>
                    Iron ${iron}${nutFacts.CA.unit}
                </p>
                <p>
                    ${Math.floor((iron/14)*100)}%   
                </p>
            </div>
            <div class="facts-sub">
                <p class="sub-p">
                * Percent Daily Values are based on a 2,000 calorie diet.
                Your Daily Values may be higher or lower depending on your calorie needs:
                </p>
                <div class="sub-div-1 facts-flex">
                    <p class="sub-p-1">
                    </p>
                    <p class="sub-p-2">
                        Calories:
                    </p>
                    <p class="sub-p-3">
                        2,000
                    </p>
                    <p class="sub-p-4">
                        2,500
                    </p>
                </div>
                <div class="sub-div facts-flex">
                    <p class="sub-p-1">
                        Total Fat
                    </p>
                    <p class="sub-p-2">
                        Less Than:
                    </p>
                    <p class="sub-p-3">
                        65g
                    </p>
                    <p class="sub-p-4">
                        80g
                    </p>
                </div>
                <div class="sub-div facts-flex">
                    <p class="sub-p-1 sub-tab">
                        Saturated Fat
                    </p>
                    <p class="sub-p-2">
                        Less Than:
                    </p>
                    <p class="sub-p-3">
                        20g
                    </p>
                    <p class="sub-p-4">
                        25g
                    </p>
                </div>
                <div class="sub-div facts-flex">
                    <p class="sub-p-1">
                        Cholestrol
                    </p>
                    <p class="sub-p-2">
                        Less Than:
                    </p>
                    <p class="sub-p-3">
                        300mg
                    </p>
                    <p class="sub-p-4">
                        300mg
                    </p>
                </div>
                <div class="sub-div facts-flex">
                    <p class="sub-p-1">
                        Sodium
                    </p>
                    <p class="sub-p-2">
                        Less Than:
                    </p>
                    <p class="sub-p-3">
                        2400mg
                    </p>
                    <p class="sub-p-4">
                        2400mg
                    </p>
                </div>
                <div class="sub-div facts-flex">
                    <p class="sub-p-1">
                        Total Carbohydrates
                    </p>
                    <p class="sub-p-2">
                        
                    </p>
                    <p class="sub-p-3">
                        300g
                    </p>
                    <p class="sub-p-4">
                        375g
                    </p>
                </div>
                <div class="sub-div facts-flex">
                    <p class="sub-p-1 sub-tab">
                        Dietary Fiber
                    </p>
                    <p class="sub-p-2">
                        
                    </p>
                    <p class="sub-p-3">
                        25g
                    </p>
                    <p class="sub-p-4">
                        30g
                    </p>
                </div>
            </div>
            

            

        </div>

    `;

    return nutFactsHTML;
}

function getIngredientsHTML(recipe){
    // renders the ingredient list to the recipe page
    const ingredients = recipe.ingredientLines;
    let ingredientsHTML = "";
    for(let i = 0; i < ingredients.length; i++){
        ingredientsHTML += `
            <li class="ing-list-item">
                <div class="ing-name">
                    ${ingredients[i]}
                </div>
                <button type="button" class="add-ing-button" value="${i}">
                    +
                </button>
            </li>  
        `;
    }

    return ingredientsHTML;
}

function renderRecipePage(recipe){
    // renders the recipe page to the browser
    $('.search-result-wrapper').html("");
    $('.search-result-wrapper').append(`
        <div class="recipe-info-div">
            <h2 class="recipe-page-name">
                ${recipe.label}
            </h2>
            <img src="${recipe.image}" alt="picture of a ${recipe.label}" class="recipe-page-image">
            <div class="ingredients">
                <div class="ing-heading-wrapper">
                    <h3 class="ing-header">
                        Ingredients: 
                    </h3>
                    <button type="button" class="add-all-button">
                        Add All
                    </button>
                </div>
                <div class="ing-list-wrapper">
                    <ul class="ing-list">
                        ${getIngredientsHTML(recipe)}
                    </ul>
                </div>
            </div>
        </div>
        <div class="recipe-info-div">
            <h3 class="instruction-header">
                Instructions:
            </h3>
            <p class="ins-link-wrapper">
                <a href="${recipe.url}" target="_blank">Source: ${recipe.source}</a>
            </p>
            <div class="nutritional-facts-chart-wrapper">
                ${getNutritionalFactsHTML(recipe)}
            </div>
        </div>
    `);
}


function handleViewRecipeButtonClick(responseJson){

    // handles the button click on the receipe thumbnails to take user the detailed info about the recipe
    $('.search-result-wrapper').on('click', '.recipe-button', function(e){

        let recipeIndex = $(this).val();
        let recipe = responseJson.hits[recipeIndex].recipe;
        console.log(recipe);
        renderRecipePage(recipe);

    });
}


function renderSearchResult(recipe, i){
    // renders the search result to the browser
    $('.search-result-wrapper').append(`
            
        <button type="button" class="recipe-button" value="${i}">
            <div class="recipe">
                <div class="recipe-info-container">
                    <img src="${recipe.image}" alt="Image of a ${recipe.label}" class="recipe-image">
                    <h2 class="recipe-name">
                        ${recipe.label}
                    </h2>   
                    <div class="recipe-info-wrapper">
                        <div class="recipe-cal">
                            Calories per serving : ${Math.floor(recipe.calories/recipe.yield)}
                        </div>
                        <div class="servings">
                            Servings : ${recipe.yield}
                        </div>
                    </div>
                </div>
            </div>
            <div class="view-recipe-wrapper">
                <span class="view-recipe">
                    View Details
                </span>
            </div>
        </button>

    `);
}

function displayResults(responseJson){
    
    // this function handles the functionality for displaying the search result to the user
    $('.search-result-wrapper').html("");

    let recipesFound = responseJson.hits.length;

    // if no recipes aer found display no result page
    if(recipesFound === 0){
        $('.search-result-wrapper').html(`
            <div class="no-recipe-found">
                Sorry we were not able to find anything related to <span class="q">${responseJson.q}</span>. Try another search.
            </div>
        `);

        // then set the focus to the search textbox and empty it
        $('.search-textbox').focus();
        $('.search-textbox').val("");
    }else{
        // when results are found loop thru all the recipes to be displayed in the browser
        for(let i = 0;i < responseJson.hits.length; i++){

            // getting the recipe object form the edamam api
            let recipe = responseJson.hits[i].recipe;

            // call back for the function to render search result
            renderSearchResult(recipe, i);
        }
        // callback to the function for handling the button clicks on the recipe thumbnails
        handleViewRecipeButtonClick(responseJson);
    }
}

function styleForRecipePage(){
    // this function handles changing some styles for the result page
    $('.app-info').hide();
    $('main').removeClass('landing-page');
    $('.header-section').removeClass('landing-page');
    $('.header-section').addClass('recipe-page');
    $('.header-section')
        .css('display', 'block');
}

function getHealth(){
    // returns an array with health value parameters
    let healthParam = [];

    if($('#vegetarian:checked').val() === "on"){
        healthParam.push("vegetarian");
    }
    if($('#vegan:checked').val() === "on"){
        healthParam.push("vegan");
    }
    if($('#sugar-conscious:checked').val() === "on"){
        healthParam.push("sugar-conscious");
    }
    if($('#peanut-free:checked').val() === "on"){
        healthParam.push("peanut-free");
    }
    if($('#tree-nut-free:checked').val() === "on"){
        healthParam.push("tree-nut-free");
    }

    return healthParam;
}

function getDiet(){
    // returns an array with diet value parameters
    let dietParam = [];

    if($('#high-protein:checked').val() === "on"){
        dietParam.push("high-protien");
    }
    if($('#low-carbs:checked').val() === "on"){
        dietParam.push("low-carb");
    }
    if($('#low-fat:checked').val() === "on"){
        dietParam.push("low-fat");
    }
    if($('#balanced:checked').val() === "on"){
        dietParam.push("balanced");
    }

    return dietParam;
}

function getCalories(){
    // returns the parameter value for calories
    let minCal = $('.min-calorie-textbox').val();
    let maxCal = $('.max-calorie-textbox').val();

    if(minCal === "" && maxCal === ""){
        return "";
    }else if(minCal !== "" && maxCal === ""){
        return `${minCal}%2B`;
    }else if(minCal === "" && maxCal !== ""){
        return `0-${maxCal}`;
    }else{
        return `${minCal}-${maxCal}`;
    }
}

function getParameters(){
    // return an object with all the parameters
    const params = {
        appid: "9f0ec4b3",
        apiKey: "ebacde04674e74870f8fb6567ee11ce7",
        q: $('.search-textbox').val(),
        cal: getCalories(),
        diet: getDiet(),
        health: getHealth()
    };

    return params;
}

function getFetchURL(){
    // return the string for the fetch url
    let params = getParameters();
    let url = `https://api.edamam.com/search?q=${params.q}&app_id=${params.appid}&app_key=${params.apiKey}`;
    // https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free

    if(params.cal !== ""){
        url += `&calories=${params.cal}`;
    }

    let diet = params.diet;
    if(diet.length != 0){
        for(let i = 0; i < diet.length; i++){
            url += `&deit=${diet[i]}`;
        }
    }

    let health = params.health;
    if(health.length != 0){
        for(let i = 0; i < health.length; i++){
            url += `&health=${health[i]}`;
        }
    }

    // return correctly formatted url for the fetch to work from the api
    return url;
}

function displayFetchingElement(){
    // A div that is displayed while the results are being gathered from the api
    $('.search-result-wrapper').html(`
        <div class=fetching-info>
            Fetching Recipes
        </div>
    `);
}

function watchForm(){

    // Handles the search query submission by the user (Find Button Click)
    $('form').on('submit', function(e){
        e.preventDefault();

        if($('.cal-error').css('display') === "none"){
            
            displayFetchingElement();

            if($('.filter-drop-down-menu').css('display') !== "none"){
                $('.filter-drop-down-menu').slideUp(150);
                $('.filter-button').toggleClass('clicked');
            }

            // call only if the header-section has the landing-page class in it
            if($('.header-section').hasClass('landing-page')){
                styleForRecipePage();
            }   

            // let fetchURL = getFetchURL();

            // fetch(fetchURL)
                // .then(response => response.json())
                // .then(responseJson => {
                    console.log(respJson);
                    displayResults(respJson);
                // })
                // .catch(err => {
                    // alert(`We have encountered an error: ${err}`);
                // });

        }else{
            filterMenuShowToggle();
            $('.min-calorie-textbox').focus();
        }

    });
}

function checkMinMaxCal(){
    // checked for the min and max calorie error, will show an error if min is greater than max cal
    let minCal = $('.min-calorie-textbox').val();
    let maxCal = $('.max-calorie-textbox').val();
    if(maxCal > 0){
        if(parseInt(minCal,10) > parseInt(maxCal,10)){
            $('.cal-error').slideDown(100);
        }else{
            console.log(`${minCal} < ${maxCal}`);
            $('.cal-error').slideUp(100);
        }
    }
    if(maxCal === "" || minCal === ""){
        $('.cal-error').slideUp(100);
    }
}

function handleCalorieError(){
    // checks for error when max and min cal box leave focus
    $('.max-calorie-textbox').on('focusout', function(e){
        checkMinMaxCal();
    })
    $('.min-calorie-textbox').on('focusout', function(e){
        checkMinMaxCal();
    })

}

function filterMenuShowToggle(){
    // this function checks if filtermenu is visible then hides it
    // else otherwise displays it
    $('.filter-button').toggleClass('clicked');
    if($('.filter-drop-down-menu').css('display') === 'none'){
        $('.filter-drop-down-menu').slideDown(150);
        handleCalorieError();
        $('.min-calorie-textbox').focus();
    }else{
        $('.filter-drop-down-menu').slideUp(150);
    }
}

function handleFilterMenuClicks(){

    // Handles the Reset Button and Done Button Click
    $('.reset-button').on('click', function(e){
        e.preventDefault();
        // only reset the filter drop down menu and not the serch box text. 
        $('.filter-drop-down-menu input[type="number"]').val("");
        $('.filter-drop-down-menu input[type="checkbox"]').prop('checked', false);
        $('.cal-error').hide();
        $('.min-calorie-textbox').focus();

    });

    $('.done-button').on('click', function(e){
        filterMenuShowToggle();
    })
}

function handleFilterButtonClick(){
    // Handles opening and closing the filter menu 

    $('.filter-button').on('click', function(e){
        filterMenuShowToggle();
    });
}

// main function that calls back all the functions required to work when the DOM is ready.
function main(){

    handleFilterButtonClick();
    handleFilterMenuClicks();
    watchForm();
}

$(main);