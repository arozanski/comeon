import * as actionTypes from './actions';

// setup initial redux store state
const initialState = {
    authorised: false
}

// initialize root reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH:
            return {
                authorised: action.status
            }
        default: return state;
    }
}

export default reducer;