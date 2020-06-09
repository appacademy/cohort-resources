
// DOM method to add a listener to the document
// callback is invoked once the event 'DOMContentLoaded' occurs

// document.addEventListener('DOMContentLoaded', () => {
//   let $li = $('<li>');
//   $li.html('Swim with Sharks');
//   $('ul').append($li);
// });


// jQuery method that invokes the callback once the document is ready!
// Same functionality as above

// Allows you to be specific in what you want to target ie: It doesn't have to 
// be the document

// $(document).ready(() => {
//   let $li = $('<li>');
//   $li.html('Swim with Sharks');
//   $('ul').append($li);
// });

// jQuery method that will wait until the document is ready
// Shorthand for the same functionality as above
// Does not allow us to specifically target html elements

$(() => {
  let $li = $('<li>');
  $li.html('Swim with Sharks');
  $('ul').append($li);

  $('form').on('submit', () => {
    event.preventDefault(); // prevent the default behavior which was to add the
    //value to the query string and refresh the page.

    const $input = $('#add-bucket-text'); // grab the input by id

    const inputValue = $input.val(); // save the value of the input field to
    // a variable

    const $li = $('<li>'); // create a new li

    const $newLi = $li.html(inputValue); // put the saved input value into the li

    $('ul').append($newLi); // append the li to our ul

    $input.val(''); // reset the value of the input to an empty string
  })
})