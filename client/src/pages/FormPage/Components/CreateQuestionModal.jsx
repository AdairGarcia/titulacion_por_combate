import agregarPregunta from '../../../assets/CrearPregunta.png';

export const CreateQuestionModal = () => {
    return (
        <div className={"modal fade"} id={"createQM"}>
            <div className={"modal-header"}>
                <img
                    alt={"agregarPregunta"}
                    src={agregarPregunta}
                />
            </div>
            <div className={"modal-body"}>
                hola
            </div>
        </div>
    )
}