import './form-container.css';

const FormContainer = ({children, style}) => {
    return (
        <form className="form-container" style={style}>
           {children}
        </form>
    );
}
export default FormContainer;