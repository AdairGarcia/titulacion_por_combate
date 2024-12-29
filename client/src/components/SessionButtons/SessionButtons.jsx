import register from '../../assets/Register.png';
import login from '../../assets/Login.png';

import './sessionButton.css'
import {useNavigate} from "react-router-dom";

export const SessionButtons = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/signup');
    }
    const handleLoginClick = () => {
        navigate('/signin');
    }

    return (
        <div className={"row"}>
            <div className={"col-6"}>
                <div className={"row"}>
                    <div className={"col-md-auto"}>
                        <img
                            alt={"register"}
                            src={register}
                            className={"icons"}
                        />
                    </div>
                    <div className={"col align-content-center"}>
                        <button className={"rounded-3 boton px-5 py-2"} type={"button"} onClick={handleRegisterClick}>
                            Registrarse
                        </button>
                    </div>
                </div>
            </div>
            <div className={"col"}>
                <div className={"row"}>
                    <div className={"col-md-auto"}>
                        <img
                            alt={"login"}
                            src={login}
                            className={"icons"}
                        />
                    </div>
                    <div className={"col align-content-center"}>
                        <button className={"rounded-3 boton px-5 py-2"} type={"button"} onClick={handleLoginClick}>
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}