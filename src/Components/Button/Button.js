import './button.css';

const Button = ({title, type, className, ...rest}) => {
    return (
            <button {...rest} type={type} className={className}>
                {title}
            </button>
    );
}

export default Button;