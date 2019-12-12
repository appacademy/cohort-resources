$(document).ready(function() { 
    // GETTER method for displaying CSS 'color' attribute the element 
    // with ID 'ronil'
    console.log($('#ronil').css('color'));

    // SETTER method for changing the CSS styling of a selected element
    $('#ronil').css('color', 'red');

    // console.log($('li'));
    let $li = $('li');
    console.log($li instanceof Array); // False
    console.log($li instanceof jQuery); // True
    
    let firstEl = $li[0]; // incorrect naming convention
    console.log(firstEl instanceof HTMLElement); // True
    console.log(firstEl instanceof jQuery); // False
    
    let firstEl = $li[0];
    $(firstEl).css('color', 'red'); v

    // set display to 'none'
    $('#angela').hide();
    
    // remove a class
    $('#joe').removeClass('TA');
    // add a class
    $('#joe').addClass('marquee');

    // select all elements with class .TA and set a 1px green border
    $('.TA').css('border', '1px solid green');
    
    // Selects the element with id mike and adds a <p> tag containing the text Andy
    $('#mike').html('<p>Andy</p>');

    // As above, but appends literal text '<p>Andy</p>'
    $('#mike').text('<p>Andy</p>');
    
    // appends a new <li> element to the element with class .gift-givers
    $('.gift-givers').append('<li class="TA">Elliot</li>')

    // selects the #carlos element, and appends it to the #ronil element
    // NOTE: this will cause the #carlos element to inherit styling from
    // its parent.
    $('#ronil').append($('#carlos'));

    $('.gift-givers').on('click', (e) => {
        // e refers to the event that triggered the callback

        // currentTarget is the element that the event is attached to
        console.log(e.currentTarget);

        // target is the specific element that was 'clicked' to trigger the event
        console.log(e.target);
    } )

    // Gets the value of gift-form-input
    $('#gift-form-input').attr('value');

    // changes the value of gift-form-input
    $('#gift-form-input').attr('value', 'Andy');
    $('#gift-form-input').attr('value', '');

    // NOTE: data is hidden in the browser
    $('#gift-form-input').data('giver','santa');

    const $list = $('.gift-givers');
    const $form = $('form');
    const $inputEl = $('#gift-form-input');

    $form.on('submit', (e) => {
        e.preventDefault();

        const name = $inputEl.val();
        const $newEl = $('<li></li>');
        $newEl.text(name);
        $list.append($newEl);
        $inputEl.val('');
    })

 })