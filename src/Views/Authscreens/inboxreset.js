import '../../Styles/base.css';
import InboxReset from '../../Components/InboxResetForm';
import DashboardLayout from '../Layout';

function Inbox() {
    return (
        <DashboardLayout message="Reset Password" submessage="We have sent a reset link to your registered email address.">
            <InboxReset />
        </DashboardLayout>
    );
}

export default Inbox;