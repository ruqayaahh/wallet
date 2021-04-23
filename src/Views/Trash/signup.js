import '../../Styles/Authscreens/signup.css'

const Signup = () => {
    return (
        <div className="container">
            <div className="logo">
                <svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8106 10.5907C12.681 6.902 13.9051 2.18687 17.5602 0L34.3952 29.2874L30.0333 36.9571L14.8106 10.5907ZM0.196289 7.50381C3.86165 5.38761 8.54852 6.64335 10.6649 10.3086L21.6232 29.2873L17.2259 37L0.196289 7.50381ZM29.9678 6.88521C29.14 6.88521 28.3634 7.28567 27.8834 7.96003C27.3106 8.76481 27.2522 9.82747 27.7335 10.6901L34.0605 22.0306L42.8047 6.88521L29.9678 6.88521Z" fill="#1F6AEC" />
                </svg>
            </div>
            <div className="main">
                <div>
                    <h2>Create Your Account</h2>
                    <p>Let's get you started</p>
                </div>
                <div className="form-container">
                    <form>
                        <div className="width d-flex">
                            <div className="inline-form">
                                <label for="firstname">First Name</label>
                                <input type="text" name="firstname" placeholder='First Name' required></input>
                                <small></small>
                            </div>
                            <div className="inline-form">
                                <label for="lastname">Last Name</label>
                                <input type="text" name="lastname" placeholder='Last Name' required></input>
                            </div>
                        </div>
                        <div className="width">
                            <label for="email">Email Address</label>
                            <input type="email" placeholder="Kingsleyomin@letshego.com" required></input>
                        </div>
                        <div className="width">
                            <label for="phone">Phone Number</label>
                            <input type="tel" placeholder="070 33322 9900" required></input>
                        </div>
                        <div className="width relative">
                            <label for="password">Password</label>
                            <input className="password" type="password" placeholder="•••••••••" required></input>
                            <svg className="password-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L16.2339 14.8197C17.7715 13.5924 18.939 11.9211 19.5424 9.99996C18.2681 5.94288 14.4778 3 10.0002 3C8.37665 3 6.84344 3.38692 5.48779 4.07358L3.70711 2.29289ZM7.96813 6.55391L9.48201 8.0678C9.6473 8.02358 9.82102 8 10.0003 8C11.1048 8 12.0003 8.89543 12.0003 10C12.0003 10.1792 11.9767 10.353 11.9325 10.5182L13.4463 12.0321C13.7983 11.4366 14.0003 10.7419 14.0003 10C14.0003 7.79086 12.2094 6 10.0003 6C9.25838 6 8.56367 6.20197 7.96813 6.55391Z" fill="#B3BECF" />
                                <path d="M12.4541 16.6967L9.74965 13.9923C7.74013 13.8681 6.1322 12.2601 6.00798 10.2506L2.33492 6.57754C1.50063 7.57223 0.856368 8.73169 0.458008 10C1.73228 14.0571 5.52257 17 10.0002 17C10.8469 17 11.6689 16.8948 12.4541 16.6967Z" fill="#B3BECF" />
                            </svg>
                        </div>
                        <div className="width">
                            <button type="submit">Create Account</button>
                        </div>
                        <div>
                            <span>
                                Already have an account? <a href="#">Sign In</a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;