$(() => {

    const bucketList = $('.bucket-list');

    const inputEl = $('#add-bucket-text');
    const pEl = $('form p');

    inputEl.on('input', (e) => {
        const value = inputEl.val();
        pEl.text(value.split("").reverse().join(""));
    });

    const form = $('form');

    form.on('submit', (e) => {
        console.log(e);
        e.preventDefault();
        const value = inputEl.val();
        const newEl = $(`<li></li>`);
        newEl.text(value);
        bucketList.append(newEl);
        // inputEl.val("");  // Add these after testing once
        // pEl.text("");
    });

});
