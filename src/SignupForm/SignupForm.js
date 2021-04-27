import './signup.css';
import Input from '../Input/Input';
import { Link } from 'react-router-dom'
import togglePassword from '../assets/Eye-off.svg';
import FormContainer from '../FormContainer/FormContainer';
import Button from '../Button/Button';

const SignupForm = () => {
    const style = {
        height: '552px'
    };
    return (
            <FormContainer style={style}>
                    <div className="width d-flex-signup">
                        <div className="inline-form">
                            <Input label="First Name" type="text" placeholder="First Name" name="firstname" />
                        </div>
                        <div className="inline-form">
                            <Input label="Last Name" type="text" placeholder="Last Name" name="lastname" />
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
                            <Button type="submit" title="Create Account"/>
                        </div>
                        <div className="width">
                            <p className="small-signup">
                                Already have an account? <span className="span-signup"><Link to="/login" href="#">Sign In</Link></span>
                            </p>
                        </div>  
            </FormContainer>
    );
};

export default SignupForm;
