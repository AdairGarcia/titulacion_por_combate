import '../mainPage.css';
import misFormularios from '../../../assets/Mis cuestionarios.png';
import {Form} from "./Form.jsx";

export const MainPageBody = () => {
    return(
        <div className={"container-fluid fondo-pantalla-principal h-100"}>
            <div className={"row pt-5"}>
                <div className={"col"}>
                    <img
                        alt={"Formularios"}
                        src={misFormularios}
                        className={"img-fluid img-formularios ps-5"}
                    />
                </div>
                <div className={"col text-end align-content-center pe-5"}>
                    <button className={"btn-crear-cuestionario rounded-4 p-3"}>
                        Crear cuestionario
                    </button>
                </div>
            </div>
            <div className={"m-5 d-flex justify-content-evenly forms-container flex-wrap rounded-5"}>
                <Form form={
                    {
                        title: "Formulario 1",
                        color: "#FFD700"
                    }
                }/>
                <Form form={
                    {
                        title: "Formulario 2hahdaghadghdashgdasghdhgdashgads",
                        color: "#FFD700"
                    }
                }
                />
                <Form form={
                    {
                        title: "Formulario 1",
                        color: "#FFD700"
                    }
                }/>

                <Form form={
                    {
                        title: "Formulario 2",
                        color: "#FFD700"
                    }
                }
                />
                <Form form={
                    {
                        title: "Formulario dajdasdagsdasghdhfsfafahfdshfasdhfashfadfdasf1",
                        color: "#FFD700"
                    }
                }/>
                <Form form={
                    {
                        title: "Formulariodsasjadhadhjdshjadshjasjhdhjasdhjsd 2",
                        color: "#FFD700"
                    }
                }
                />
                <Form form={
                    {
                        title: "Formulario 1",
                        color: "#FFD700"
                    }
                }/>

                <Form form={
                    {
                        title: "Formulario 2",
                        color: "#FFD700"
                    }
                }
                />
                <Form form={
                    {
                        title: "Formulario 1",
                        color: "#FFD700"
                    }
                }/>
                <Form form={
                    {
                        title: "Formulario 2",
                        color: "#FFD700"
                    }
                }
                />
                <Form form={
                    {
                        title: "Formulario 1",
                        color: "#FFD700"
                    }
                }/>

                <Form form={
                    {
                        title: "Formulario 2",
                        color: "#FFD700"
                    }
                }
                />
                <Form form={
                    {
                        title: "Formulario 1",
                        color: "#FFD700"
                    }
                }/>
                <Form form={
                    {
                        title: "Formulario 2",
                        color: "#FFD700"
                    }
                }
                />
                <Form form={
                    {
                        title: "Formulario 1",
                        color: "#FFD700"
                    }
                }/>

                <Form form={
                    {
                        title: "Formulario 2",
                        color: "#FFD700"
                    }
                }
                />
            </div>
        </div>
    )
}