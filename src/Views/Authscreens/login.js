import LoginForm from '../../LoginForm/LoginForm';
import DashboardLayout from '../Layout';

function Login() {
    return (
        <DashboardLayout message="Log In" submessage="Great to have you back">
           <LoginForm />
        </DashboardLayout>
    );
}

export default Login;