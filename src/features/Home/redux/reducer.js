const INITIAL_STATE = {
    loggedAs : null,
};

const loginReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'USER_LOGIN':
            return Object.assign( {}, state, { loggedAs : action.payload } );
        default:
            return state
        }
};

export default loginReducer;