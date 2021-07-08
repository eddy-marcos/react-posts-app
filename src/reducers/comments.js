// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_COMMENTS':
        return action.payload;

        case 'POST_ALL':
            return [...state, action.payload];
        
        default:
            return state;
    }
}