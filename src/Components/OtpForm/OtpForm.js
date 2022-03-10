import React from 'react';
import './otp-form.css';
import Input from '../Input/Input';
import FormContainer from '../FormContainer/FormContainer';
import { useForm } from 'react-hook-form';
// import { ErrorMessage } from '@hookform/error-message';

const OtpForm = () => {
    const style = {
        height: '290px'
    };
    const { register } = useForm({
        criteriaMode: 'all',
        mode: 'all'
    })
    // const verifyOTP = () => {

    // };
    return (
        <FormContainer style={style}>
            <div>
                <h3 className="otp-title">
                    Kindly enter your OTP to <br></br>
                    verify account
                </h3> 
            </div>
            <div className="otp-input-container d-flex-otp">
                <div className="inline-input-otp"><Input {...register('firstdigit',)} type="text" name="firstdigit" placeholder="0"/></div>
                <div className="inline-input-otp"><Input {...register('seconddigit',)} type="text" name="seconddigit" placeholder="0"/></div>
                <div className="inline-input-otp"><Input {...register('thirddigit',)} type="text" name="thirddigit" placeholder="0"/></div>
                <div className="inline-input-otp"><Input {...register('fourthdigit',)} type="text" name="fourthdigit" placeholder="0"/></div>
            </div>
            <div>
                <p className="small-otp">
                {/* eslint-disable-next-line */}
                    Didn't get the code? <a className="span-otp" onClick={() => alert('OTP has been resent')}>Resend</a>
                </p>
                <p className="otp-timer">00:59</p>
            </div>
        </FormContainer>
    );
};

export default OtpForm;