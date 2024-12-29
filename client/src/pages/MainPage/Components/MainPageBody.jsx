import '../mainPage.css';
import misFormularios from '../../../assets/Mis cuestionarios.png';
import {Form} from './Form.jsx';

export const MainPageBody = () => {
    return (
        <div className="container-fluid fondo-pantalla-principal h-100">
            <div className="row pt-5">
                <div className="col">
                    <img
                        alt="Formularios"
                        src={misFormularios}
                        className="img-fluid img-formularios ps-5"
                    />
                </div>
                <div className="col text-end align-content-center pe-5">
                    <button className="btn-crear-cuestionario rounded-4 p-3">
                        Crear cuestionario
                    </button>
                </div>
            </div>
            <div className="row m-5 d-flex justify-content-evenly forms-container flex-wrap rounded-5">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Form form={{title: "Formulario 1", color: "#FFD700"}}/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Form form={{title: "Formulario 2", color: "#FFD700"}}/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Form form={{title: "Formulario 3", color: "#FFD700"}}/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Form form={{title: "Formulario 1", color: "#FFD700"}}/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Form form={{title: "Formulario 2", color: "#FFD700"}}/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Form form={{title: "Formulario 3", color: "#FFD700"}}/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Form form={{title: "Formulario 1", color: "#FFD700"}}/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Form form={{title: "Formulario 2", color: "#FFD700"}}/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Form form={{title: "Formulario 3", color: "#FFD700"}}/>
                </div>
            </div>
        </div>
    );
};