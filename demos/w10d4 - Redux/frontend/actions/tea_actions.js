export const RECEIVE_TEA = 'RECEIVE_TEA';

export const addHerbal = () => {
    return {
        type: RECEIVE_TEA,
        tea: {
            id: 5,
            flavor: 'mint',
            description: 'decaf and refreshing'
        }
    }
};

export const addTea = (tea) => ({
    type: RECEIVE_TEA,
    tea: tea
});