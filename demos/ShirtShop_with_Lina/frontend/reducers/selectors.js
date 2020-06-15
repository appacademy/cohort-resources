export const getReviews = (state, shirtId) => {
    let result = Object.values(state.reviews).filter(review => review.shirtId === shirtId)
    return result 
}