import React from 'react';
import Mailbox from '../../assets/Group.svg';
import FormContainer from '../FormContainer/FormContainer';
import './inbox-reset.css';

const InboxReset = () => {
    const style = {
        height: '421px',
        padding: '58px 62px 61px 62px'
    }
    return (
        <FormContainer style={style}>
                    <div className="img-div">
                        <img src={Mailbox} alt=""></img>
                    </div>
                    <div className="text-div">
                        <h3 className="inbox-message">Check Your Inbox</h3>
                        <span className="inbox-message">Password reset link has been sent to your inbox</span>
                    </div>
    </FormContainer>
    );
};

export default InboxReset;