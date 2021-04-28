import ResetPasswordForm from '../../ResetPassword/ResetPasswordForm';
import DashboardLayout from '../Layout';

function ResetPassword() {
    const style = {
        maxWidth: '415px',
    }
    return (
        <DashboardLayout style={style}  message="Reset Password" submessage="Create a unique password to keep your account protected">
           <ResetPasswordForm />
        </DashboardLayout>
    );
}

export default ResetPassword;