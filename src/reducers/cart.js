const cartReducer = (cart = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...cart, action.payload];
        case "REMOVE_FROM_CART":
            const newCart = cart.filter((item) => {
                return item._id !== action.payload._id;
            })
            return newCart;
        default:
            return cart;
    }
}

export default cartReducer;
