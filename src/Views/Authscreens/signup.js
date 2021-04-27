import SignupForm from '../../SignupForm/SignupForm';
import DashboardLayout from '../Layout';

function Signup() {
    const style = {
        maxWidth: '475px',
        minHeight: '120px'
    }
    return (
        <DashboardLayout style={style} message="Create Your Account" submessage="Let's get you started">
            <SignupForm />
        </DashboardLayout>
    );
}

export default Signup;