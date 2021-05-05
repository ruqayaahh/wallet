import './form-container.css';

const FormContainer = ({children, style, ...rest}) => {
    return (
        <form className="form-container" style={style} {...rest}>
           {children}
        </form>
    );
}
export default FormContainer;