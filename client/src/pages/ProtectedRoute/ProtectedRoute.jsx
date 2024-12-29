import {useAuth} from "../../context/AuthContext.jsx";
import {Navigate, Outlet} from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


function ProtectedRoute() {
    const {loading, isAuthenticated} = useAuth();

    if(loading){
        return(
            <div className={"vh-100 fondo-pantalla-principal align-content-center"}>
                <h1 className={"text-center"}>
                    <AiOutlineLoading3Quarters className={"spin text-white"} size={100}/>
                </h1>
            </div>

        )
    }

    if (!isAuthenticated && !loading) {
        return <Navigate to='/signin' replace/>
    }
    return(
        <Outlet/>
    )
}

export default ProtectedRoute;