export const counterReducer = (state= 0,action) => {
    switch (action.type) {
        case "INCREMENT_NUMBER_VALUE":
            return state+1
        case "DECREMENT_NUMBER_VALUE": // ✅ Tambahkan case decrement
            return state - 1;
        default:
            return state; // ✅ Jangan ubah state jika action tidak dikenali
    }
}