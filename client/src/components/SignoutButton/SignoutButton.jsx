import {useAuth} from "../../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

export const SignoutButton = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();

    const handleSignoutClick = () => {
        signout();
        navigate('/');
    }

    return (
        <div className={"col d-flex justify-content-end"}>
            <button className={"rounded-3 boton px-5 py-2"} type={"button"} onClick={handleSignoutClick}>
                Cerrar Sesión
            </button>
        </div>
    )
}