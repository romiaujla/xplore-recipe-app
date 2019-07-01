function displayresults(responseJson){
    


}

function watchForm(){
    // Handles the search query submission by the user (Find Button Click)
    $('form').on('submit', function(e){
        e.preventDefault();

        const appID = "9f0ec4b3";
        const apiKey = "ebacde04674e74870f8fb6567ee11ce7";

        displayresults(respJson);

    })
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