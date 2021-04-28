import '../../Styles/base.css';
import InboxReset from '../../InboxReset/InboxReset';
import DashboardLayout from '../Layout';

function Inbox() {
    const style = {
        maxWidth: '462px',
    }
    return (
        <DashboardLayout style={style} message="Reset Password" submessage="We have sent a reset link to your registered email address.">
            <InboxReset />
        </DashboardLayout>
    );
}

export default Inbox;