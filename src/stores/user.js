const default_state = {
    Username:"",
    Id:""
}


export const userReducer = (state = default_state, action) => {
    switch (action.type) {
        case "SET_USER_LOGIN":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};