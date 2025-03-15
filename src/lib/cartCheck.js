import { axiosInstance } from "./axios";

async function getCartData(dispatch) {
    try {
        const data = await axiosInstance.get("carts?_embed=product")
        dispatch(
            { type: "SET_CART", payload: data.data }
        )
    } catch (error) {
        console.log(error);
    }
}

export default getCartData