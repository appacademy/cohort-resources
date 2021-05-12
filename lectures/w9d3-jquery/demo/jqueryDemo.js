$( () => {
    // const $completeAll = $('#complete-all');

    // $completeAll.hide();
    // $completeAll.show();

    // const $bucketList = $('.bucket-list');

    // const $newBucketListItem = $("<li class='single-bucket'>Walk on the Moon</li>");

    // $bucketList.append($newBucketListItem);
    // $bucketList.append($newBucketListItem);
    // $bucketList.append($newBucketListItem);
    // $bucketList.append($newBucketListItem);

    // $bucketList.append("heyyyyy");
    // $bucketList.append("heyyyyy");
    // $bucketList.append("heyyyyy");
    // $bucketList.append("heyyyyy");
    // $bucketList.append("heyyyyy");
    // $bucketList.append("heyyyyy");
    // $bucketList.append("heyyyyy");
    // $bucketList.append("heyyyyy");

    // const $listItems = $('section li');
    // listItems.eq(0)

    // $listItems.addClass("blue");
    // $listItems.removeClass("blue");

    // $listItems.css("font-family", "cursive");


    // console.log($bucketList.html());
    // console.log($bucketList.text());

    // $bucketList.html("<h3>I'm an a sushi shop</h3>");
    // $bucketList.text("<h3>I'm an a sushi shop</h3>"); => don't do this
    // $bucketList.text("I'm an a sushi shop");
    // $newBucketListItem.text("Become a Jedi");

    // const $inputField = $("#add-bucket-text");

    // console.log($inputField.attr("type")); => single arg getter
    // $inputField.attr("type", "password"); => two args means setter
    // $inputField.attr("value",  "Eat a Taco");

    // console.log($inputField.data("fav-food"));
    // $inputField.data("fav-food", "carne asada fries");
    // console.log($inputField.data("fav-food"));

    // $inputField.data("id", "xXBananaXx");


    const $inputEl = $('#add-bucket-text');
    const $pEl = $('form p');

    $inputEl.on('input', (e) => {
        // debugger
        const value = $inputEl.val(); 
        $pEl.text(value.split('').reverse().join(''));
    })

    const $form = $('form.add-bucket-form');
    const $bucketList = $('.bucket-list');

    $form.on('submit', (e) => {
        e.preventDefault(); // have to prevent the default form submission request
        const value = $inputEl.val();
        const $newBucketListItem = $("<li class='single-bucket'></li>");

        $newBucketListItem.text(value);
        $bucketList.append($newBucketListItem);

        $inputEl.val('');
        $pEl.text('');
    })

    $bucketList.on('click', 'li', (e) => { // add the click event on the li elements which are children of the $bucketList element
        // debugger
        $(e.target).toggleClass('complete');
    })

    const $completeButton = $('#complete-all');

    // $completeButton.on('click', ()=> {})
    //.click is shorthand for .on('click',)
    $completeButton.click(() => {
        // const $listItems = $('ul.bucket-list li');
        // $listItems.addClass('complete');
        
        $('ul.bucket-list li').addClass('complete');
    })
})
