import React from 'react';
import OtpForm from '../../Components/OtpForm/OtpForm';
import AuthscreenLayout from '../Layout';

function Otp() {
        return (
            <AuthscreenLayout message="OTP Verification" submessage="A code has been sent to your email">
               <OtpForm />
            </AuthscreenLayout>
        );
}

export default Otp;