import React from 'react';
import '../../Styles/base.css';
import InboxReset from '../../Components/InboxReset/InboxReset';
import AuthscreenLayout from '../Layout';

function Inbox() {
    const style = {
        maxWidth: '462px',
    }
    return (
        <AuthscreenLayout style={style} message="Reset Password" submessage="We have sent a reset link to your registered email address.">
            <InboxReset />
        </AuthscreenLayout>
    );
}

export default Inbox;