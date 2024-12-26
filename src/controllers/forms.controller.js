import Form from '../models/forms.model.js';

export const getForms = async (req, res) => {
    try{
        const forms = await Form.find({
            user: req.user.id
        });
        res.json(forms);
    }catch (error){
        console.error('Hubo un error al obtener los formularios', error);
        res.status(500).json({message: 'Error al obtener los formularios: ' + error.message});
    }
}

export const getForm = async (req, res) => {
    const idForm = req.params.id_form;
    try {
        const form = await Form.findById(idForm);
        if(!form) return res.status(404).json({message: 'Formulario no encontrado'});
        res.send(form);
    } catch (error) {
        console.error('Hubo un error al obtener el formulario', error);
        res.status(500).json({message: 'Error al obtener el formulario: ' + error.message});
    }
}

export const createForm = async (req, res) => {
    const {title, color} = req.body;
    try {
        const newForm = new Form({
            title,
            color,
            user: req.user.id
        });

        const savedForm = await newForm.save();
        res.json(savedForm);
    } catch (error) {
        console.error('Hubo un error al crear el formulario', error);
        res.status(500).json({message: 'Error al crear el formulario: ' + error.message});
    }
}

export const updateForm = async (req, res) => {
    const idForm = req.params.id_form;
    console.log("idForm: ", idForm);
    const {title, color} = req.body;
    try {
        const updatedForm = await Form.findByIdAndUpdate(
            idForm,
            {
                title,
                color
            },
            {
                new: true
            }
        );
        res.send(updatedForm);
    } catch (error) {
        console.error('Hubo un error al actualizar el formulario', error);
        res.status(500).json({message: 'Error al actualizar el formulario: ' + error.message});
    }
}

export const deleteForm = async (req, res) => {
    const idForm = req.params.id_form;
    console.log("idForm: ", idForm);
    try {
        const deletedForm = await Form.findByIdAndDelete(idForm);
        if(!deletedForm) return res.status(404).json({message: 'Formulario no encontrado'});
        res.sendStatus(204);
    } catch (error) {
        console.error('Hubo un error al eliminar el formulario', error);
        res.status(500).json({message: 'Error al eliminar el formulario: ' + error.message});
    }
}
