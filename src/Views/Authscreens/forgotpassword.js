import React from 'react';
import AuthscreenLayout from '../Layout';
import ForgotPasswordForm from '../../Components/ForgotPassword/ForgotPassword';

function ForgotPassword() {
    const style = {
        maxWidth: '484px'
    }
    return (
        <AuthscreenLayout style={style} message="Forgot Password" submessage="Kindly enter your registered email to reset your passsword">
            <ForgotPasswordForm />
        </AuthscreenLayout>
    );
}

export default ForgotPassword;