// will export a bunch of ajax request functions

export const fetchTeas = () => {
    return $.ajax({
        url: '/api/teas',
        method: 'GET'
    });
};

export const createTea = (tea) => {
    return $.ajax({
        url: '/api/teas',
        method: 'POST',
        data: { tea }
    });
};

export const fetchTea = (id) => {
    return $.ajax({
        url: `/api/teas/${id}`,
        method: 'GET'
    });
};

// tea = { flavor: 'stuff', amount: 2.25 }