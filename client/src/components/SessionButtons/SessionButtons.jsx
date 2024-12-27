import register from '../../assets/Register.png';
import login from '../../assets/Login.png';

import './sessionButton.css'

export const SessionButtons = () => {
    return (
        <div className={"row"}>
            <div className={"col-6"}>
                <div className={"row"}>
                    <div className={"col-md-auto"}>
                        <img
                            alt={"register"}
                            src={register}
                        />
                    </div>
                    <div className={"col align-content-center"}>
                        <button className={"rounded-3 boton px-5 py-2"}>
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
                        />
                    </div>
                    <div className={"col align-content-center"}>
                        <button className={"rounded-3 boton px-5 py-2"}>
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}