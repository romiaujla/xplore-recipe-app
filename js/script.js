// Returns the property values of the api
// stored under 
// we are using digest = facts
// digest: [ (array of objects)
//     {
//         tag: "",
//         total: "",
//         daily: ""
//         sub: [ (array of objects)
//             {
//                 tag: "",
//                 total: "",
//                 daily: ""
//             }
//         ]
//     }
// ]
function findObjectUsingTag(facts, tag){
    // finds the object whose tag property matches in the object array
    return facts.find(fact => fact.tag === tag);
}

function getFactsValue(factObj, prop, servings){
    // if property is "total", return the total value with the unit
    // else return the daily value with the "%" for formatting
    return `${Math.floor(factObj[prop]/servings)}${prop === "total"? factObj.unit : "%"}`
}
function getSubPropertyValue(facts, tag, subtag, prop, servings){
    // returns the fact values for the sub object array for a given tag
    let factSubObj = findObjectUsingTag(findObjectUsingTag(facts,tag).sub, subtag);
    return getFactsValue(factSubObj, prop, servings);
}
function getPropertyValue(facts, tag, prop, servings){
    // returns the fact values for the facts object array for a given tag
    const factObj = findObjectUsingTag(facts, tag);
    const factValue = getFactsValue(factObj, prop, servings);
    return factValue;
}

function getFactsHTML(recipe){
    // returns the nutritional facts table html
    let factsHTML = "";

    // getting digest to store under facts which will have all the nutritional data
    const facts = recipe.digest;
    // all the information is given in total, so servings is stored and then
    // divide the total value with the serving to "Amount per serving"
    const servings = recipe.yield;
    const totalFat = getPropertyValue(facts, "FAT", "total", servings);
    const totalFatDV = getPropertyValue(facts, "FAT", "daily", servings);
    const satFat = getSubPropertyValue(facts, "FAT", "FASAT", "total", servings);
    const satFatDV = getSubPropertyValue(facts, "FAT", "FASAT", "daily", servings);
    const transFat = getSubPropertyValue(facts, "FAT", "FATRN", "total", servings);
    const transFatDV = getSubPropertyValue(facts, "FAT", "FATRN", "daily", servings);
    const cholestrol = getPropertyValue(facts, "CHOLE", "total", servings);
    const cholestrolDV = getPropertyValue(facts, "CHOLE", "daily", servings);
    const sodium = getPropertyValue(facts, "NA", "total", servings);
    const sodiumDV = getPropertyValue(facts, "NA", "daily", servings);
    const carbs = getPropertyValue(facts, "CHOCDF", "total", servings);
    const carbsDV = getPropertyValue(facts, "CHOCDF", "daily", servings);
    const fiber = getSubPropertyValue(facts, "CHOCDF", "FIBTG", "total", servings);
    const fiberDV = getSubPropertyValue(facts, "CHOCDF", "FIBTG", "daily", servings);
    const protien = getPropertyValue(facts, "PROCNT", "total", servings);
    const protienDV = getPropertyValue(facts, "PROCNT", "daily", servings);
    const sugar = getSubPropertyValue(facts, "CHOCDF", "SUGAR", "total", servings);
    const vitaminA = getPropertyValue(facts, "VITA_RAE", "total", servings);
    const vitaminADV = getPropertyValue(facts, "VITA_RAE", "daily", servings);
    const vitaminC = getPropertyValue(facts, "VITC", "total", servings);
    const vitaminCDV = getPropertyValue(facts, "VITC", "daily", servings);
    const calcium = getPropertyValue(facts, "CA", "total", servings);
    const calciumDV = getPropertyValue(facts, "CA", "daily", servings);
    const iron = getPropertyValue(facts, "FE", "total", servings);
    const ironDV = getPropertyValue(facts, "FE", "daily", servings);

    factsHTML = `    
        <div class="facts-header-wrapper">
            <h2 class="facts-header bold">
                Nutritional Facts
            </h2>
            <p>Serving Size ${recipe.yield} (Total Weight ${Math.floor(recipe.totalWeight)}g)</p>
            <p>Total Calories ${Math.floor(recipe.calories)} kcal</p>
        </div>
        <div calss="facts-per-serving">
            <p class="header">
                Amounts Per Serving (${Math.floor(recipe.totalWeight/servings)}g)
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
                    Total Fat ${totalFat}
                </p>
                <p>
                    ${totalFatDV}
                </p>
            </div>
            <div class="facts-flex brd-btm mrgn-left">
                <p>
                    Saturated Fat ${satFat}
                </p>
                <p>
                    ${satFatDV}
                </p>
            </div>
            <div class="facts-flex brd-btm mrgn-left">
                <p>
                    Trans Fat ${transFat}
                </p>
                <p>
                    ${transFatDV}
                </p>
            </div>
            <div class="facts-flex brd-btm bold">
                <p>
                    Cholesterol ${cholestrol}
                </p>
                <p>
                    ${cholestrolDV}
                </p>
            </div>
            <div class="facts-flex brd-btm bold">
                <p>
                    Sodium ${sodium}
                </p>
                <p>
                    ${sodiumDV}
                </p>
            </div>
            <div class="facts-flex brd-btm bold">
                <p>
                    Total Carbohydrates ${carbs}
                </p>
                <p>
                    ${carbsDV}
                </p>
            </div>
            <div class="facts-flex brd-btm mrgn-left">
                <p>
                    Dietary Fiber ${fiber}
                </p>
                <p>
                    ${fiberDV}
                </p>
            </div>
            <div class="facts-flex brd-btm mrgn-left">
                <p>
                    Sugars ${sugar}
                </p>
            </div>
            <div class="facts-flex bold-brdr bold">
                <p>
                    Protien ${protien}
                </p>
                <p>
                    ${protienDV}
                </p>
            </div>
            <div class="facts-flex brd-btm">
                <p>
                    Vitamin A ${vitaminA}
                </p>
                <p>
                    ${vitaminADV}
                </p>
            </div>
            <div class="facts-flex brd-btm">
                <p>
                    Vitamin C ${vitaminC}
                </p>
                <p>
                    ${vitaminCDV}
                </p>
            </div>
            <div class="facts-flex brd-btm">
                <p>
                    Calcium ${calcium}
                </p>
                <p>
                    ${calciumDV}
                </p>
            </div>
            <div class="facts-flex">
                <p>
                    Iron ${iron}
                </p>
                <p>
                    ${ironDV}
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

    return factsHTML;
}

function getIngredientsHTML(recipe){
    // renders the ingredient list to the recipe page
    const ingredients = recipe.ingredientLines;
    let ingredientsHTML = "";
    for(let i = 0; i < ingredients.length; i++){
        ingredientsHTML += `
            <li class="ing-list-item">
                <div class="ing-name">${ingredients[i]}</div>
                <button type="button" class="add-ing-button" value="${i}">
                    +
                </button>
            </li>  
        `;
    }

    return ingredientsHTML;
}

function removeItemFromGroceryList(item){
    // removes an item from the grocery list
    let itemIndex = "";
    STORE.groceryList.find((gItem, index) => {
        if(gItem.name === item){
            itemIndex = index;
        }
    });
    STORE.groceryList.splice(itemIndex, 1);
}

function addItemToGroceryList(item){
    // adds item to the grocery list
    
    let hasItem = false;
    // Check If item already exists
    STORE.groceryList.forEach(gItem =>{
        if(gItem.name === item){
            console.log("item exists");
            hasItem = true;
        }
    });
    
    // Add item only if it does not exist in the list already
    if(!hasItem){
        STORE.groceryList.push({
            id: cuid(),
            name: item
        });
    }
}

function handleRemovingOneIngredient(ingredients){
    $('.search-result-wrapper').on('click', '.remove-button', function(e){
        removeItemFromGroceryList(ingredients[$(this).val()]);
        console.log(STORE.groceryList);
        $(this).html('+');
        $(this).attr('class', 'add-ing-button');
    })
}

function handleAddAllIngredientsbutton(ingredients){
    // adds all ingredients to the grocery list
    $('.search-result-wrapper').on('click','.add-all-button',function(e){
        ingredients.map(ingredient => addItemToGroceryList(ingredient));
        $('.search-result-wrapper .add-ing-button').html('-');
        $('.search-result-wrapper .add-ing-button').attr('class', 'remove-button');
        console.log(STORE.groceryList);
    });
}

function handleAddOneIngredient(ingredients){
    // adds only selected ingredient to the grocery list
    $('.search-result-wrapper').on('click', '.add-ing-button', function(e){
        addItemToGroceryList(ingredients[$(this).val()]);
        console.log(STORE.groceryList);
        $(this).html("-");
        $(this).attr('class','remove-button');
    });
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
                ${getFactsHTML(recipe)}
            </div>
        </div>
    `);

    handleAddAllIngredientsbutton(recipe.ingredientLines);
    handleAddOneIngredient(recipe.ingredientLines);
    handleRemovingOneIngredient(recipe.ingredientLines);
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
        $('.search-result-wrapper').html("");
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
            //     .then(response => response.json())
            //     .then(responseJson => {
                    // console.log(responseJson);
                    displayResults(respJson);
                    // displayResults(responseJson);
                // })
                // .catch(err => {
                //     alert(`We have encountered an error: ${err}`);
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