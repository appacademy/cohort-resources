$(() => {
  // console.log('The DOM has loaded');
  const inputEle = $('#add-bucket-text');
  const formP = $('form p');
  
  inputEle.on('input', () => {
    const value = inputEle.val();
    formP.text(value.split('').reverse().join(''));
  })

  const form = $('.add-bucket-form');
  const bucketList = $('.bucket-list');

  bucketList.on('click', (e) => {
    console.log('currentTarget', e.currentTarget);
    console.log('target', e.target);
    $(e.target).addClass('complete');
  })

  form.on('submit', (e) => {
    // e === event
    e.preventDefault();
    const newLi = $('<li class="single-bucket"></li>');
    const value = inputEle.val();
    newLi.text(value);
    bucketList.append(newLi);

    // clear the form after submission
    inputEle.val('');
    formP.empty();
  })

  
  const listItems = $('.single-bucket');
  const collapse = $('#collapse');
  const completeAll = $('#complete-all');

  collapse.on('click', () => {
    if (collapse.data('isCollapsed')) {
      collapse.data('isCollapsed', false);
      listItems.show();
      completeAll.show();
      collapse.text('collapse');
    } else {
      collapse.data('isCollapsed', true);
      listItems.hide();
      completeAll.hide();
      collapse.text('expand');
    }
  })

  completeAll.on('click', () => {
    listItems.addClass('complete');
  })
})

// console.log('The DOM is not loaded yet');