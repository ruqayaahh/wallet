import OtpForm from '../../OtpForm/OtpForm';
import DashboardLayout from '../Layout';

function Otp() {
        return (
            <DashboardLayout message="OTP Verification" submessage="A code has been sent to your email">
               <OtpForm />
            </DashboardLayout>
        );
}

export default Otp;