import '../../Styles/Authscreens/signup.css';
import '../../Styles/Authscreens/password-reset-inbox.css';

const ResetInbox = () => {
    return (
        <div className="container">
            <div className="logo">
                <svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8106 10.5907C12.681 6.902 13.9051 2.18687 17.5602 0L34.3952 29.2874L30.0333 36.9571L14.8106 10.5907ZM0.196289 7.50381C3.86165 5.38761 8.54852 6.64335 10.6649 10.3086L21.6232 29.2873L17.2259 37L0.196289 7.50381ZM29.9678 6.88521C29.14 6.88521 28.3634 7.28567 27.8834 7.96003C27.3106 8.76481 27.2522 9.82747 27.7335 10.6901L34.0605 22.0306L42.8047 6.88521L29.9678 6.88521Z" fill="#1F6AEC" />
                </svg>
            </div>
            <div className="main">
                <div>
                    <h2>Reset Password</h2>
                    <p>We have sent a reset link to your registered email address.</p>
                </div>
                <div className="form-container">
                    <div className="sub-container">
                        <div className="img-div">
                            <svg width="166" height="161" viewBox="0 0 166 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.44" d="M129.078 40.25H113.811V161H129.078V40.25Z" fill="#233C67" />
                                <path d="M165.174 111.956H60.939V34.7466H138.706C153.324 34.7466 165.172 46.5967 165.172 61.2128V111.956H165.174Z" fill="#5E9CEA" />
                                <path d="M86.3087 111.956H35.5698V58.2481C35.5698 45.2684 46.0916 34.7466 59.0713 34.7466H62.8073C75.7869 34.7466 86.3087 45.2684 86.3087 58.2481V111.956Z" fill="#73B0F4" />
                                <path d="M81.8976 111.956H39.9829V61.2189C39.9829 49.6441 49.3665 40.2627 60.9391 40.2627C72.514 40.2627 81.8954 49.6462 81.8954 61.2189V111.956H81.8976Z" fill="#3473B7" />
                                <path d="M65.2145 40.6977C63.8337 40.4115 62.4049 40.2607 60.9411 40.2607C49.3662 40.2607 39.9849 49.6443 39.9849 61.217V111.956H48.5338V61.2192C48.5317 51.1081 55.6889 42.6727 65.2145 40.6977Z" fill="#2B69A0" />
                                <path d="M165.174 106.442H86.3086V111.956H165.174V106.442Z" fill="#73B0F4" />
                                <path d="M165.174 62.0449H86.3086V106.441H165.174V62.0449Z" fill="#3473B7" />
                                <path d="M165.174 62.0449H86.3086V64.2515H165.174V62.0449Z" fill="#2467A3" />
                                <path opacity="0.1" d="M109.75 34.7466H107.543V73.0761H109.75V34.7466Z" fill="black" />
                                <path d="M142.287 24.2682H104.785V4.41309H142.287L132.637 14.6159L142.287 24.2682Z" fill="#E8553E" />
                                <path d="M108.371 73.3512H101.2V3.58519C101.2 1.6058 102.806 0 104.785 0C106.765 0 108.371 1.6058 108.371 3.58519V73.3512Z" fill="#27455B" />
                                <path d="M102.854 4.6885C102.854 2.70911 104.46 1.1033 106.439 1.1033C106.815 1.1033 107.178 1.16229 107.519 1.26935C106.861 0.493757 105.88 0 104.785 0C102.806 0 101.2 1.6058 101.2 3.58519V73.3512H102.854V4.6885Z" fill="#27455B" />
                                <path d="M110.025 4.41309H108.371V24.2682H110.025V4.41309Z" fill="#D84435" />
                                <path d="M104.648 80.2451C107.617 80.2451 110.024 77.8379 110.024 74.8684C110.024 71.8989 107.617 69.4917 104.648 69.4917C101.678 69.4917 99.271 71.8989 99.271 74.8684C99.271 77.8379 101.678 80.2451 104.648 80.2451Z" fill="#AAAAAA" />
                                <path d="M105.474 80.2441C108.443 80.2441 110.851 77.8369 110.851 74.8674C110.851 71.898 108.443 69.4907 105.474 69.4907C102.504 69.4907 100.097 71.898 100.097 74.8674C100.097 77.8369 102.504 80.2441 105.474 80.2441Z" fill="#C9C9C9" />
                                <path d="M105.612 77.4875C107.134 77.4875 108.369 76.2531 108.369 74.7303C108.369 73.2076 107.134 71.9731 105.612 71.9731C104.089 71.9731 102.854 73.2076 102.854 74.7303C102.854 76.2531 104.089 77.4875 105.612 77.4875Z" fill="#AAAAAA" />
                                <path d="M86.8618 118.852H4.13575C1.85049 118.852 0 116.999 0 114.716C0 112.431 1.85268 110.58 4.13575 110.58H86.8618C89.1471 110.58 90.9975 112.433 90.9975 114.716C90.9975 116.999 89.1449 118.852 86.8618 118.852Z" fill="#70B2ED" />
                                <path d="M65.2852 65.1366L58.8904 97.0013C58.7681 97.6152 58.1716 98.0129 57.5577 97.8883L8.48796 88.0394C7.87404 87.9171 7.47642 87.3206 7.60095 86.7067L13.9958 54.842C14.1181 54.228 14.7145 53.8304 15.3285 53.955L64.3982 63.8039C65.01 63.9262 65.4076 64.5226 65.2852 65.1366Z" fill="#FFAC27" />
                                <path opacity="0.5" d="M59.3791 94.552L58.8875 96.9989C58.7652 97.6128 58.1687 98.0105 57.5548 97.8859L8.48504 88.037C7.87112 87.9147 7.47349 87.3182 7.59802 86.7043L8.08959 84.2574C13.4663 77.8254 24.4972 74.7056 36.214 77.0564C47.9309 79.4094 56.8994 86.5448 59.3791 94.552Z" fill="#FDCD56" />
                                <path d="M63.6835 63.66L38.2288 81.5183C36.4089 82.7308 33.9292 82.2327 32.7166 80.4128L15.9639 54.082L63.6835 63.66Z" fill="#ED9718" />
                                <path d="M63.7642 63.6749L38.4232 80.5435C36.6033 81.756 34.1236 81.2579 32.911 79.438L16.0425 54.0991L63.7642 63.6749Z" fill="#FDCD56" />
                            </svg>

                        </div>
                        <div className="text-div">
                            <h3>Check Your Inbox</h3>
                            <span>Password reset link has been sent to your inbox</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetInbox;