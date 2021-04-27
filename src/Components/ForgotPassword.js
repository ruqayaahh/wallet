import '../Styles/signup.css';
import '../Styles/forgot-password.css';
import Input from '../Input/Input'
import { Link, useHistory } from 'react-router-dom';

const ForgotPasswordForm = () => {
    const history = useHistory();
    function handleClick() {
        history.push("/reset-inbox");
    }
    return(
        <div className="form-container">
                <form>
                    <div className="width">
                        <Input label="Email Address" placeholder="Kingsleyomin@letshego.com" type="email" />
                    </div>
                    <div className="width">
                        <button onClick={handleClick} type="submit">Recover Password</button>
                    </div>
                    <div>
                        <span>
            {/* eslint-disable-next-line */}
                            <Link to="/login">Return to Log In</Link>
                        </span>
                    </div>
                </form>
            </div>
    );
};

export default ForgotPasswordForm;