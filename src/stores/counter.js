const default_state = {
    number:0,
    name:''
}

export const counterReducer = (state= default_state,action) => {
    switch (action.type) {
        case "INCREMENT_NUMBER_VALUE":
            return { ...state, number: state.number + 1 }; // ✅ Buat state baru
        case "DECREMENT_NUMBER_VALUE":
            return { ...state, number: state.number - 1 }; // ✅ Buat state baru
        case "CHANGES_NUMBER_INPUT_VALUE":
            return { ...state, number: action.payload}; // ✅ Buat state baru
        default:
            return state; // ✅ Jangan ubah state jika action tidak dikenali
    }
}