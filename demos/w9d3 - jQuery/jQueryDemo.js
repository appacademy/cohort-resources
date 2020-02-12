// document.addEventListener('DOMContentLoaded', () => {
//     let $ul = $('ul');
//     let $li = $('<li>Rick is a pickle</li>');
//     $ul.append($li);
// })


// $(document).ready(() => {  // sto;;
//         let $ul = $('ul'); 
//         let $li = $('<li>Pickle Rick</li>');
//         $ul.append($li);
//     }
// )

// does same as above
// this style is called ready style
$(() => { // this version of invoking $ takes a callback as arg
    let $ul = $('ul'); // not exist yet
    let $li = $('<li>Pickle Rick</li>');
    $ul.append($li);

    $('form').on('submit', (e) => {
        e.preventDefault();
        
        const $input = $("#add-bucket-text");
        const inputVal = $input.val();
        const $li = $('<li>').html(inputVal);

        $input.val('')
        $('ul').append($li);
    })
})
