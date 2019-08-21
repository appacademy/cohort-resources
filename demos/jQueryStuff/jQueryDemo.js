
// document.addEventListener("DOMContentLoaded", () => {

//*** Shortcut version of document ready callback below ***
// $( () => {
    // jQuery code here 
// });

$(document).ready( () => {

    // adds/removes 'complete' class to e.currentTarget
    $(".to-learn-list").on( "click", "li", (e) => { 
        let $li = $(e.currentTarget);   
        $li.toggleClass("complete");
    });

    $(".to-learn-form").on( "submit", (e) => {
        e.preventDefault();  // stop default form behavior
        let $form = $(e.currentTarget);
        let $input = $form.find("#to-learn-text");
        let inputText = $input.val();  
        let jQueryEle = $("<li>").text(inputText);  // creating an li
        $(".to-learn-list").append(jQueryEle);
        $input.val("");
    })

    $("#complete-all").on( "click" , (e) => {
        Array.from($(".to-learn-list > li")).forEach( (btn) => {
            debugger;
            if (!$(btn).hasClass("complete")) {
                btn.click();
            }
        });
    });


});













// target = what you click on 
// currentTarget = what the LISTENER is on