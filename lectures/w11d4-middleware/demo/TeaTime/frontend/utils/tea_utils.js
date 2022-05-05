export const fetchAllTeas = () => (
    $.ajax({
        url: '/api/teas',
        method: 'GET'
    })
);

export const createTea = (tea) => (
    $.ajax({
        url: '/api/teas',
        method: 'POST',
        data: {
            tea
        }
    })
)