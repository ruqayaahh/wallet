import SignupForm from '../../Components/SignupForm/SignupForm';
import AuthscreenLayout from '../Layout';

function Signup() {
    const style = {
        maxWidth: '475px',
        minHeight: '120px'
    }
    return (
        <AuthscreenLayout style={style} message="Create Your Account" submessage="Let's get you started">
            <SignupForm />
        </AuthscreenLayout>
    );
}

export default Signup;