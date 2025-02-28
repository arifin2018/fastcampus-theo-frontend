import { useSelector } from "react-redux"
import { Navigate,Outlet } from "react-router";

export const AdminPage = () => {
    const userSelector = useSelector(state => state.user) || {}; // Tambahkan default empty object
    
    if (!userSelector.Role) {
        return <div>Loading...</div>; // Atau bisa tambahkan spinner/loading indicator
    }

    if (userSelector.Role !== "admin") {
        return <Navigate to="/counter" />;
    }

    return (
        <div>
            <Outlet /> {/* Tambahkan Outlet untuk menampilkan child routes */}
        </div>
    );
}
