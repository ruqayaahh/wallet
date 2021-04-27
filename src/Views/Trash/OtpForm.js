// import '../Styles/signup.css';
import '../Styles/otp.css';
import Input from '../../Input/Input'

const OtpForm = () => {
    return (
        <div className="form-container">
    <form>
        <div>
           <h3>
            Kindly enter your OTP to <br></br>
            verify account
           </h3> 
        </div>
        <div className="width d-flex">
            <div className="inline-input">
                <Input type="text" name="firstdigit" placeholder="0"/>
                {/* <label for="digit-one"></label> */}
            </div>
            <div className="inline-input">
            <Input type="text" name="seconddigit" placeholder="0"/>
            </div>
            <div className="inline-input">
            <Input type="text" name="thirddigit" placeholder="0"/>
            </div>
            <div className="inline-input">
            <Input type="text" name="fourthdigit" placeholder="0"/>
            </div>
        </div>
        <div>
            <span>
            {/* eslint-disable-next-line */}
                Didn't get the code? <a onClick={() => alert('OTP has been resent')} href="#">Resend</a>
            </span>
        </div>
        <div>
            <span>00:59</span>
        </div>
    </form>
</div>
    );
};

export default OtpForm;