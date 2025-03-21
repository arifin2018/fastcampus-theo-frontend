const default_state = {
    data:[]
}

export const cartReducer = (state= default_state,action) => {
    switch (action.type) {
        case "SET_CART":
            return {...state,data:action.payload}; // ✅ Buat state baru
        case "REMOVE_CART":
            return { 
                ...state, 
                data: state.data.filter(cart => cart.id !== action.payload) 
            }; // ✅ Hapus item dari state tanpa perlu refresh
        default:
            return state; // ✅ Jangan ubah state jika action tidak dikenali
    }
}