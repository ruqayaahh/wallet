import Mailbox from '../assets/Group.svg';
import FormContainer from '../FormContainer/FormContainer';
import './inbox-reset.css';

const InboxReset = () => {
    const style ={
        height: '421px'
    }
    return (
        <FormContainer style={style}>
                <div className="form-sub-container">
                    <div className="img-div">
                        <img src={Mailbox} alt=""></img>
                    </div>
                    <div className="text-div">
                        <h3 className="inbox-message">Check Your Inbox</h3>
                        <span className="inbox-message">Password reset link has been sent to your inbox</span>
                    </div>
                </div>
    </FormContainer>
    );
};

export default InboxReset;