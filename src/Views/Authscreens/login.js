import LoginForm from '../../LoginForm/LoginForm';
import AuthscreenLayout from '../Layout';

function Login() {
    return (
        <AuthscreenLayout message="Log In" submessage="Great to have you back">
           <LoginForm />
        </AuthscreenLayout>
    );
}

export default Login;