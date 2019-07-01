function getHealth(){
    // returns the parameter value for allergies
    let healthParam = [];

    if($('#vegetarian:checked').val() === "on"){
        healthParam.push("vegetarian");
    }
    if($('#gluten:checked').val() === "on"){
        healthParam.push("gluten");
    }
    if($('#dairy:checked').val() === "on"){
        healthParam.push("dairy");
    }
    if($('#peanuts:checked').val() === "on"){
        healthParam.push("peanuts");
    }
    if($('#wheat:checked').val() === "on"){
        healthParam.push("wheat");
    }

    return healthParam;
}
function getDiet(){
    // returns the parameter value for diet
    let dietParam = [];

    if($('#high-fiber:checked').val() === "on"){
        dietParam.push("high-fiber")
    }
    if($('#high-protein:checked').val() === "on"){
        dietParam.push("high-protien");
    }
    if($('#low-carbs:checked').val() === "on"){
        dietParam.push("low-carbs");
    }
    if($('#low-fat:checked').val() === "on"){
        dietParam.push("low-fat");
    }
    if($('#low-sodium:checked').val() === "on"){
        dietParam.push("low-sodium");
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
        return `${minCal}+`;
    }else if(minCal === "" && maxCal !== ""){
        return maxCal;
    }else{
        return `${minCal}-${maxCal}`;
    }
}

function getParameters(){
    // return an object with all the parameters
    const params = {
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
    console.log(params);
}

function watchForm(){
    // Handles the search query submission by the user (Find Button Click)
    $('form').on('submit', function(e){
        e.preventDefault();

        const appID = "9f0ec4b3";
        const apiKey = "ebacde04674e74870f8fb6567ee11ce7";
        if($('.cal-error').css('display') === "none"){
            let fetchURL = getFetchURL();
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
            console.log(`${minCal} > ${maxCal}`);
            console.log(typeof minCal);
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

    }else{
        $('.filter-drop-down-menu').slideUp(150);
    }
}

function handleFilterMenuClicks(){
    let searchTextBoxValue = "";
    // Handles the Reset Button and Done Button Click
    $('.reset-button').on('click', function(e){
        e.preventDefault();

        // only reset the filter drop down menu and not the serch box text. 
        $('.filter-drop-down-menu input[type="number"]').val("");
        $('.filter-drop-down-menu input[type="checkbox"]').prop('checked', false);
        $('.cal-error').hide();
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
    watchForm()

}

$(main);