export const selectTeasByFlavor = (teas, flavor) => {
    const teasArray = Object.values(teas);

    // Sudo code for adding users who purchased this tea
    // store users who purchased green teas in array []
    // grab purchase from state Object.values(state.purchase)
    // iterate through purchase
        // if purchase was of a green tea state.teas[purachase.teaID].flavor.toLowerCase() === 'green'
            //add state.users[purcahse.userId] to users array

    // output objec with uers and green teas as key value pairs
    // return {greenTeas: teasArray....., users: usersPurArray}
    // const usersPur = Object.values(state.purchase)
    return teasArray.filter(tea => tea.flavor.toLowerCase() === flavor);
}