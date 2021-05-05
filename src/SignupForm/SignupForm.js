import './signup.css';
import Input from '../Input/Input';
import { Link } from 'react-router-dom'
import togglePassword from '../assets/Eye-off.svg';
import FormContainer from '../FormContainer/FormContainer';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
// import InputSelect from '../InputSelect/InputSelect';
import axios from 'axios';

const SignupForm = () => {
    const style = {
        maxHeight: 'fit-content'
    };
    const {register, handleSubmit, formState : {errors}} = useForm({
        criteriaMode: 'all',
        mode: "all"
    });
    const onRegister = async (data) => {
        console.log(data);
        await axios.post("https://wallet-by-ruqayaah.herokuapp.com/register", data)
        .then((res) => alert(`You have successfully signed up. Your details are ${JSON.stringify(data)}`))
        .catch((err) => console.log(err))
    };
   
    return (
            <FormContainer onSubmit={handleSubmit(onRegister)} style={style}>
                    <div className="width d-flex-signup">
                        <div className="inline-form">
                            <ErrorMessage errors={errors} name="firstname" render={({messages}) => {
                                console.log(messages);
                                return messages
                                ? Object.entries(messages).map(([type, value]) => (<small key={type}>{value}</small>))
                                : null
                            }}/>
                            <Input label="First Name" {...register('firstname', {
                                required: "This field is required",
                                pattern: {
                                    value: /^[A-Za-z]+$/i ,
                                    message: "Firstname can only be letters"
                                }})} type="text" placeholder="Kingsley" name="firstname" />
                        </div>
                        <div className="inline-form">
                            <ErrorMessage errors={errors} name="lastname" render={({messages}) => {
                                console.log(messages);
                                return messages
                                ? Object.entries(messages).map(([type, value]) => (<small key={type}>{value}</small>))
                                : null
                            }}/>
                            <Input label="Last Name" {...register('lastname', {
                                required: "This field is required",
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: "Lastname can only be letters"
                                }})} type="text" placeholder="Omin" name="lastname" />
                        </div>
                    </div>
                    <div className="width d-flex-signup">
                        <div className="inline-form">
                            <ErrorMessage errors={errors} name="dob" render={({messages}) => {
                                console.log(messages);
                                return messages
                                ? Object.entries(messages).map(([type, value]) => (<small key={type}>{value}</small>))
                                : null
                            }}/>
                            <Input label="Date of Birth" {...register('dob', {
                                required: "This field is required",
                                pattern: {
                                    message: "Date of Birth is invalid"
                                }})} type="date" placeholder="Kingsley" name="dob" />
                        </div>
                        <div className="inline-form">
                            <ErrorMessage errors={errors} name="gender" render={({messages}) => {
                                console.log(messages);
                                return messages
                                ? Object.entries(messages).map(([type, value]) => (<small key={type}>{value}</small>))
                                : null
                            }}/>
                            {/* <InputSelect label="Gender" {...register('gender', {
                                required: "This field is required",
                                })} placeholder="Input your gender" name="gender" /> */}
                                {/* {errors.gender && <small>This field is Required</small>} */}
                                <div>
                                    <label className="text-label">Gender</label>
                                    <select {...register("gender", { required: "This field is required" })}>
                                        <option value="">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                        </div>
                    </div>
                    <div className="width d-flex-signup">
                        <div className="inline-form">
                        <ErrorMessage errors={errors} name="email" render={({messages}) => {
                            console.log(messages);
                            return messages
                            ? Object.entries(messages).map(([type, value]) => (<small key={type}>{value}</small>))
                            : null
                        }} />
                            <Input label="Email Address" {...register('email', {
                                required: "This field is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Email address is not valid"
                                }})} type="email" placeholder="Kingsleyomin@letshego.com" name="email"/>
                        </div>
                        <div className="inline-form">
                            <ErrorMessage errors={errors} name="phone" render={({messages}) => {
                                console.log(errors);
                                return messages
                                ? Object.entries(messages).map(([type, value]) => (<small key={type}>{value}</small>))
                                : null
                            }}/>
                            <Input label="Phone Number" {...register('phone', {
                                required: "This field is required",
                                pattern: {
                                   value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
                                   message: "Telephone is invalid"
                                }})} type="tel" placeholder="070 33322 9900" name="phone" />
                        </div>
                    </div>
                        <div className="width relative">
                            <ErrorMessage errors={errors} name="password" render={({messages}) => {
                                console.log(messages);
                                return messages
                                ? Object.entries(messages).map(([type, value]) => (<small key={type}>{value}</small>))
                                : null
                            }}/>
                            <Input label="Password" {...register('password', {
                                required: "This field is required",
                                minLength: {
                                    value: 8,
                                    message: "Password cannot be less than 8 characters"
                                }})} type="password" placeholder="•••••••••" name="password"></Input>
                            <img src={togglePassword} alt="password-icon" className="password-icon"></img>
                        </div>
                        <br></br>
                        <div className="width">
                            <Button type="submit" title="Create Account" />
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
