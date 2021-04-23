import './App.css'
import Home from "./Home";
import Message from './Components/Message';

import SignupPage from './Components/SingupPage';
// import OTPPage from './Components/OTPPage';
// import LoginPage from './Components/LoginPage';
// import ForgotPasswordPage from './Components/ForgotPasswordPage';
// import ResetPasswordInboxPage from './Components/ResetPasswordInboxPage';
// import ResetPasswordPage from './Components/ResetPassworPage';

function Landing() {
    return (
        <div className="container">
            <Home />
            <div className="main">
            <Message message="Create Your Account" submessage="Let's get you started"/>
            <SignupPage />
            {/* <Message message="OTP Verification" submessage="A code has been sent to your email"/>
            <OTPPage /> */}
            {/* <Message message="Log In" submessage="Great to have you back"/>
            <LoginPage /> */}
            {/* <Message message="Forgot Password" submessage="Kindly enter your registered email
            to reset your passsword"/> */}
            {/* <ForgotPasswordPage /> */}
            {/* <Message message="Reset Password" submessage="we have sent a reset link to your
registered email address."/> */}
            {/* <ResetPasswordInboxPage /> */}
            {/* <Message message="Reset Password" submessage="we have sent a reset link to your
registered email address."/>
            <ResetPasswordPage /> */}
            </div>
        </div>
    );
}

export default Landing;
