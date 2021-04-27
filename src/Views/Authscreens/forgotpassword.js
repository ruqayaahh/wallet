import DashboardLayout from '../Layout';
import ForgotPasswordForm from '../../ForgotPassword/ForgotPassword';

function ForgotPassword() {
    const style = {
        maxWidth: '484px'
    }
    return (
        <DashboardLayout style={style} message="Forgot Password" submessage="Kindly enter your registered email to reset your passsword">
            <ForgotPasswordForm />
        </DashboardLayout>
    );
}

export default ForgotPassword;