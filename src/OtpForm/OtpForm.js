import './otp-form.css';
import Input from '../Input/Input';
import FormContainer from '../FormContainer/FormContainer';

const OtpForm = () => {
    const style = {
        height: '290px'
    };
    return (
        <FormContainer style={style}>
            <div>
           <h3 className="otp-title">
            Kindly enter your OTP to <br></br>
            verify account
           </h3> 
        </div>
        <div className="otp-input-container d-flex-otp">
            <div className="inline-input-otp"><Input type="text" name="firstdigit" placeholder="0"/></div>
            <div className="inline-input-otp"><Input type="text" name="seconddigit" placeholder="0"/></div>
            <div className="inline-input-otp"><Input type="text" name="thirddigit" placeholder="0"/></div>
            <div className="inline-input-otp"><Input type="text" name="fourthdigit" placeholder="0"/></div>
        </div>
        <div>
            <p className="small-otp">
            {/* eslint-disable-next-line */}
                Didn't get the code? <a className="span-otp" onClick={() => alert('OTP has been resent')}>Resend</a>
            </p>
            <p className="otp-timer">00:59</p>
        </div>
        </FormContainer>
    );
};

export default OtpForm;