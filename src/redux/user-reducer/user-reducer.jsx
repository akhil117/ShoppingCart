const INITIAL_REDUCER = {
    current_user: null
}

const userReducer = (state = INITIAL_REDUCER,action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                current_user: action.payload
            }

        default:
            return state
    }

}


export default userReducer;