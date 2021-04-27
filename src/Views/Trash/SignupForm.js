import '../Styles/signup.css';
import Input from '../Input/Input';
import { Link } from 'react-router-dom'
import togglePassword from '../assets/Eye-off.svg';
import FormContainer from '../FormContainer/FormContainer';

const SignupForm = () => {
    const styles = {
        width: '224px'
    }, style = {
        height: '552px'
    };
    return (
            <FormContainer style={style}>
                    <div className="width d-flex">
                        <div className="inline-form">
                            <Input label="First Name" type="text" placeholder="First Name" name="firstname" style={styles.width} />
                        </div>
                        <div className="inline-form">
                            <Input label="Last Name" type="text" placeholder="Last Name" name="lastname" style={styles.width} />
                        </div>
                    </div>
                    <div className="width">
                            <Input label="Email Address" type="email" placeholder="Kingsleyomin@letshego.com" name="email"/>
                        </div>
                        <div className="width">
                            <Input label="Phone Number" type="tel" placeholder="070 33322 9900" name="phone" />
                        </div>
                        <div className="width relative">
                            <Input label="Password" type="password" placeholder="•••••••••" name="password"></Input>
                            <img src={togglePassword} alt="password-icon" className="password-icon"></img>
                        </div>
                        <div className="width">
                            <button type="submit">Create Account</button>
                        </div>
                        <div>
                            <p className="width">
                                Already have an account? <Link to="/login" href="#">Sign In</Link>
                            </p>
                        </div>  
            </FormContainer>
    );
};

export default SignupForm;
