// used to filter/select specific things from redux state

export const selectAllTeas = (state) => {
    return Object.values(state.teas);
}