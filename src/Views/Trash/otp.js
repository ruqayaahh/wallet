import '../../Styles/Authscreens/signup.css'
import '../../Styles/Authscreens/otp.css'

const Otp = () => {
    return (
        <div className="container">
        <div className="logo">
        <svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8106 10.5907C12.681 6.902 13.9051 2.18687 17.5602 0L34.3952 29.2874L30.0333 36.9571L14.8106 10.5907ZM0.196289 7.50381C3.86165 5.38761 8.54852 6.64335 10.6649 10.3086L21.6232 29.2873L17.2259 37L0.196289 7.50381ZM29.9678 6.88521C29.14 6.88521 28.3634 7.28567 27.8834 7.96003C27.3106 8.76481 27.2522 9.82747 27.7335 10.6901L34.0605 22.0306L42.8047 6.88521L29.9678 6.88521Z" fill="#1F6AEC" />
                </svg>
        </div>
        <div className="main">
            <div>
                <h2>OTP Verification</h2>
                <p>A code has been sent to your email</p>
            </div>
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
                            <label for="digit-one"></label>
                            <input type="text" name="firstname" placeholder='0' required></input>
                        </div>
                        <div className="inline-input">
                            <label for='digit-two'></label>
                            <input type="text" name="lastname" placeholder='0' required></input>
                        </div>
                        <div className="inline-input">
                            <label for="digit-three"></label>
                            <input type="text" name="lastname" placeholder='0' required></input>
                        </div>
                        <div className="inline-input">
                            <label for="digit-four"></label>
                            <input type="text" name="lastname" placeholder='0' required></input>
                        </div>
                    </div>
                    <div>
                        <span>
                            Didn't get the code? <a href="#">Resend</a>
                        </span>
                    </div>
                    <div>
                        <span>00:59</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Otp;