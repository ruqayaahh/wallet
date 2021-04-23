import '../Styles/signup.css';
import '../Styles/forgot-password.css';
import Input from './Input'

const ForgotPasswordPage = () => {
    return(
        <div className="form-container">
                <form>
                    <div className="width">
                        <Input label="Email Address" placeholder="Kingsleyomin@letshego.com" type="email" />
                    </div>
                    <div className="width">
                        <button type="submit">Recover Password</button>
                    </div>
                    <div>
                        <span>
            {/* eslint-disable-next-line */}
                            <a href="#">Return to Log In</a>
                        </span>
                    </div>
                </form>
            </div>
    );
};

export default ForgotPasswordPage;