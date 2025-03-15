const default_state = {
    data:[]
}

export const cartReducer = (state= default_state,action) => {
    switch (action.type) {
        case "SET_CART":
            return {...state,data:action.payload}; // ✅ Buat state baru
        default:
            return state; // ✅ Jangan ubah state jika action tidak dikenali
    }
}