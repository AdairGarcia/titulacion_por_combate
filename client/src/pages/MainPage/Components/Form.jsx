import '../mainPage.css';

export const Form = ({ form }) => {
    return (
        <div className="rounded-4 d-flex flex-column p-4 m-3" style={{ backgroundColor: form.color }}>
            <a href="#" className="text-decoration-none text-form text-center">
                {form.title}
            </a>
        </div>
    );
};