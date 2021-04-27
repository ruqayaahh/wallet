import '../../Styles/base.css';
import ResetPasswordForm from '../../Components/ResetPasswordForm';
import DashboardLayout from '../Layout';

function ResetPassword() {
    return (
        <DashboardLayout message="Reset Password" submessage="Create a unique password to keep your account protected">
           <ResetPasswordForm />
        </DashboardLayout>
    );
}

export default ResetPassword;