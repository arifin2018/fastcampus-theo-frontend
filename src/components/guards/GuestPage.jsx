import { Navigate } from "react-router"
import { useSelector } from "react-redux"

export const GuestPage = (props) =>{
    const userSelector = useSelector(state => state.user)
    if (userSelector.Id) {
        return <Navigate to="/"></Navigate>
    }
    return props.children
}