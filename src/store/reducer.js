import * as actionTypes from './actions';

// setup initial redux store state
const initialState = {
    authorised: false,
    player: {
        username: '',
        name: '',
        avatar: '',
        event: ''
    }
}

// initialize root reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH:
            return {
                authorised: action.status,
                player: {
                    ...action.player,
                    username: action.username
                }
            }
        default: return state;
    }
}

export default reducer;