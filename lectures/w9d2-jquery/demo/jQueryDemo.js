$(() => {
  // const newBucket = $("<li class='single-bucket'>Walk on the moon</li>")
  // $('.bucket-list').append(newBucket)

  // const listItems = $('section li')
  // listItems.eq(0) // need to use eq instead of [] to maintain a jquery object

  // listItems.addClass('blue')
  // listItems.removeClass('blue')

  // listItems.css('font-family','cursive')

  // $('.bucket-list').html('<p>wassuuuuuup</p>')
  // $('.bucket-list').text('hi')

  // $('#add-bucket-text').data('favorite-food','carne asada fries')

  // $('.bucket-list').show()
  // $('.bucket-list').hide()

  const $inputEl = $('#add-bucket-text');
  const $pEl = $('form p');

  $inputEl.on('input',(e) => {
    // debugger
    let value = $inputEl.val();
    $pEl.text(value.split('').reverse().join(''));
  })

  const $form = $('form.add-bucket-form');
  const $bucketList = $('.bucket-list');

  $form.on('submit', (e) => {
    e.preventDefault() // <- prevents default behaviour of form submission
    let value = $inputEl.val();
    const $newLi = $("<li class='single-bucket'></li>");
    $newLi.text(value);
    $bucketList.append($newLi);
    $inputEl.val(''); // clears input
    $pEl.text('');
  })

  // $('.bucket-list').append('<div>text</div>')

  $bucketList.on('click','li', (e) => { // on bucketlist put click listener on only li elements
    $(e.target).toggleClass('complete') // toggles complete class
  })

  const $completeButton = $('#complete-all');
  $completeButton.click((e) => {
    const $listItems = $('ul.bucket-list li');
    $listItems.addClass('complete');
  });
})