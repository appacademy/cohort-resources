// These will return promises with data from the backend in format JSON

// get all teas from database
export const getAllTeas = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/teas`
    });
}

// post a new tea to the database
export const postTea = (tea) => {
    return $.ajax({
        method: 'POST',
        url: `/api/teas`,
        data: {
            tea: tea
        }
    })
}