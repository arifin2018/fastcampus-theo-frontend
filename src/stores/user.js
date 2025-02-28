const default_state = {
    Username:"",
    Role:"",
    Id:""
}


export const userReducer = (state = default_state, action) => {
    switch (action.type) {
        case "SET_USER_LOGIN":
            return {
                ...state,
                ...action.payload
            };
        case "SET_USER_LOGOUT":
            return default_state;
        default:
            return state;
    }
};