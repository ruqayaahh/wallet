import ResetPasswordForm from '../../Components/ResetPassword/ResetPasswordForm';
import AuthscreenLayout from '../Layout';

function ResetPassword() {
    const style = {
        maxWidth: '415px',
    }
    return (
        <AuthscreenLayout style={style}  message="Reset Password" submessage="Create a unique password to keep your account protected">
           <ResetPasswordForm />
        </AuthscreenLayout>
    );
}

export default ResetPassword;