const default_state = {
    Username:"arifin",
    Email:"arifin@lenna.ai",
    Id:1
}


export const userReducer = (state = default_state, action) => {
    return state
};
// export const userReducer = (state, action) => {
//     switch (action.type) {
//         case "SET_USER":
//             return action.payload;
//         default:
//             return state;
//     }
// };