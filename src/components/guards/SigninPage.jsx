import { Navigate } from "react-router"
import { useSelector } from "react-redux"

export const SigninPage = (props) => {
    const userSelector = useSelector(state => state.user)
    if (!userSelector.Id) {
        return <div>Loading...</div>; // Atau bisa tambahkan spinner/loading indicator
    }

    if (!userSelector.Id) {
        return <Navigate to="/" />;
    }

    return (
        // <div>
        //     <Outlet /> {/* Tambahkan Outlet untuk menampilkan child routes */}
        // </div>
        props.children
    );
}