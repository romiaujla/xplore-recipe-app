function getAllergies(){
    // returns the parameter value for allergies
    let allergiesParam = "";
    
    return allergiesParam;
}
function getDiet(){
    // returns the parameter value for diet
    let dietParam = "";
    console.log($('#vegetarian').checked());
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
    const params = [
        {
            q : $('.search-textbox').val(),
            cal : getCalories(),
            diet: getDiet(),
            allergies: getAllergies()
        }
    ];

    console.log(params);
}

function getFetchURL(){
    // return the string for the fetch url
    let params = getParameters();
}

function watchForm(){
    // Handles the search query submission by the user (Find Button Click)
    $('form').on('submit', function(e){
        e.preventDefault();

        const appID = "9f0ec4b3";
        const apiKey = "ebacde04674e74870f8fb6567ee11ce7";
        let fetchURL = getFetchURL();

    });
}

function filterMenuShowToggle(){
    // this function checks if filtermenu is visible then hides it
    // else otherwise displays it
    $('.filter-button').toggleClass('clicked');
    if($('.filter-drop-down-menu').css('display') === 'none'){
        $('.filter-drop-down-menu').slideDown(150);
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