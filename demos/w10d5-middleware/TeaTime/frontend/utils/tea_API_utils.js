export const fetchAllTeas = () => {
    return $.ajax({
        url: '/api/teas', 
        method: 'GET'
    })
};

// can't throw debuggers in implicitly returned functions 
export const createTea = tea => {
    debugger; 
    // since we're using an explicit return, can throw a console.log
    // or debugger here 
    return $.ajax({
        url: '/api/teas', 
        method: 'POST', 
        data: {
            tea: tea 
        }
    })
};
