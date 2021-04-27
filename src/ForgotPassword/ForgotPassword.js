import Input from '../Input/Input';
import { Link } from 'react-router-dom';
import FormContainer from '../FormContainer/FormContainer';
import Button from '../Button/Button';
import { useHistory } from 'react-router-dom';

const ForgotPasswordForm = () => {
    const style = {
        height: '264px'
    };
    const history = useHistory();
    function handleClick() {
        history.push("/reset-inbox");
    }
    return (
        <FormContainer style={style}>
                    <div className="width">
                        <Input label="Email Address" type="email" placeholder="Kingsleyomin@letshego.com" />
                    </div>
                    <div className="width">
                        <Button type="submit" title='Recover Password' onClick={handleClick} />
                    </div>
                    <div className="width">
                            <p className="mb-0 mt-0"><span className="span-signup span-forgot-password"><Link to="/login" href="#">Return to Login</Link></span>
                            </p>
                        </div>  
                </FormContainer>
    );
};

export default ForgotPasswordForm;