import * as actionTypes from './actions';

// setup initial redux store state
const initialState = {
    authorised: false,
    player: {
        name: '',
        avatar: '',
        event: ''
    }
}

// initialize root reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH:
        console.log(action.player)
            return {
                authorised: action.status,
                player: {...action.player}
            }
        default: return state;
    }
}

export default reducer;