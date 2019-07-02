function displayRecipePage(){
    
}

function handleViewRecipeButtonClick(responseJson){

    $('.search-result-wrapper').on('click', '.recipe-button', function(e){

        let recipeIndex = $(this).val();
        let recipe = responseJson.hits[recipeIndex].recipe;
        console.log(recipe);
        displayRecipePage(recipe);

    });
}

function displayResults(responseJson){
    
    $('.search-result-wrapper').html("");

    let recipesFound = responseJson.hits.length;

    if(recipesFound === 0){
        $('.search-result-wrapper').html(`
            <div class="no-recipe-found">
                Sorry we were not able to find anything related to <span class="q">${responseJson.q}</span>. Try another search.
            </div>
        `);
        $('.search-textbox').focus();
        $('.search-textbox').val("");
    }else{
        for(let i = 0;i < responseJson.hits.length; i++){
            let recipe = responseJson.hits[i].recipe;
    
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
        handleViewRecipeButtonClick(responseJson);
    }
}
function styleForRecipePage(){
    $('.app-info').hide();
    $('.header-section').removeClass('landing-page');
    $('.header-section').addClass('recipe-page');
    $('.header-section')
        .css('display', 'block');
}

function getHealth(){
    // returns the parameter value for allergies
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
    // returns the parameter value for diet
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

    return url;
}

function displayFetchingElement(){
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

            let fetchURL = getFetchURL();

            fetch(fetchURL)
                .then(response => response.json())
                .then(responseJson => {
                    console.log(responseJson);
                    displayResults(responseJson);
                })
                .catch(err => {
                    alert(`We have encountered an error: ${err}`);
                });

        }else{
            filterMenuShowToggle();
            $('.min-calorie-textbox').focus();
        }

    });
}

function checkMinMaxCal(){
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

function main(){

    handleFilterButtonClick();
    handleFilterMenuClicks();
    watchForm();
}

$(main);