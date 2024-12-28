import '../formQuizPage.css'
import crearCuestionario from '../../../assets/CrearCuestionario.png'
import testGame from '../../../assets/TestGame.png'
import {FaIdCard} from "react-icons/fa";
import {useState} from "react";


export const FormQuizBody = () => {
    const [color, setColor] = useState('#000000');



    return(
        <div className={"container-fluid h-100"}>
            <div className={"row h-100"}>
                <div className={"col left-part"}>
                    <img
                        alt={"Goal"}
                        src={crearCuestionario}
                        className={"img-fluid pb-4 crear-cuestionario-img m-5"}
                    />
                    <form>
                        <div className={"mb-3 p-3"}>
                            <label htmlFor={"formName"} className={"form-label label-formulario"}>Nombre del cuestionario</label>
                            <div className={"input-group"}>
                                <FaIdCard className={"nombre-icono entrada-formulario"}/>
                                <input
                                    type={"text"}
                                    className={"form-control entrada-formulario rounded-0"}
                                    id={"formName"}
                                />
                            </div>
                        </div>

                        <div className={"mb-3 p-3"}>
                            <label htmlFor={"formName"} className={"form-label label-formulario"}>Color del cuestionario</label>
                            <div className={"input-group"}>
                                <input
                                    type={"color"}
                                    className={"form-control-color entrada-formulario rounded-0 "}
                                    id={"formColor"}
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                                <input
                                    type={"text"}
                                    className={"form-control entrada-formulario rounded-0 texto-color"}
                                    value={color}
                                    readOnly={true}
                                />
                            </div>
                        </div>
                        <div className={"btn-group-vertical mt-5 d-flex align-items-center"}>
                            <button className={"mb-3 rounded-4 btns btn-crear py-3"}>
                                Crear cuestionario
                            </button>
                            <button className={"mb-3 rounded-4 btns btn-cancelar py-3"}>
                                Cancelar
                            </button>
                        </div>

                    </form>
                </div>
                <div className={"col-7 right-part align-content-center text-center"}>
                    <img
                        alt={"Map"}
                        src={testGame}
                        className={"img-fluid map"}
                    />
                    <p className={"text-end pe-5 m-3"}>
                        Pregunta del cuestionario en el videojuego
                    </p>
                </div>
            </div>

        </div>
    )
}