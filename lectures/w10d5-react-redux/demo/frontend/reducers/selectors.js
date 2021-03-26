
export const selectTeasByFlavor = (teas, flavor) => {
    const teasArray = Object.values(teas);
    return teasArray.filter(tea => tea.flavor === flavor);
}