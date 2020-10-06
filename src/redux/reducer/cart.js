const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state  = initialState, action) => {

    switch (action.type){
        case 'ADD_PIZZA_CART':
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id],action.payload]
            }

            //keys
            const allPizzasArr =  [].concat.apply([],Object.keys(newItems))
            //values
            const allPizzasVal =  [].concat.apply([],Object.values(newItems))

            return {
                ...state,
                items: newItems,
                totalCount: allPizzasArr.length,
                totalPrice: allPizzasVal.reduce((sum,obj) => obj.price  + sum,0)
            }

        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload,
            }


        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.payload,
            }


        default:
            return state
    }
}

export default cart