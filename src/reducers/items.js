const reducer = (items = [], action) => {
    switch(action.type) {
        case "FETCH_ALL":
            return action.payload;
        default:
            return items;
    }
}

export default reducer