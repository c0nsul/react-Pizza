const initialState = {
    items: [],
    isLoaded: false
}

const pizzas = (state  = initialState, action) => {

    switch (action.type){
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
            break

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }
            break;

        default:
            return state
            break
    }
}

export default pizzas