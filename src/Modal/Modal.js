import './modal.css';

const Modal = ({children,open}) => {
    return (
     <div>
         <div className="overlay" id="overlay">
                <div className="transfer overlay-content">
                    <div className="header">
                        <div>
                            <h3>Transfer</h3>
                        </div>
                        <div id="close-overlay">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9997 10.5862L16.9497 5.63623L18.3637 7.05023L13.4137 12.0002L18.3637 16.9502L16.9497 18.3642L11.9997 13.4142L7.04974 18.3642L5.63574 16.9502L10.5857 12.0002L5.63574 7.05023L7.04974 5.63623L11.9997 10.5862Z"
                                    fill="#3A434B" />
                            </svg>
                        </div>
                    </div>
                    {children}
                    {/* <div className="content">
                        <div className="options">
                            <div>
                                <p>Select Wallet Type to Transfer From</p>
                            </div>
                            <div className="radios">
                                <div className="mr-85 radio">
                                    <input type="radio" checked></input>
                                    <label for="walletType">
                                        Naira
                            </label>
                                </div>
                                <div className="radio">
                                    <input type="radio"></input>
                                    <label for="walletType">
                                        Dollar
                            </label>
                                </div>
                            </div>
                        </div>
                        <div className="acct-number">
                            <label for="">Account Number</label>
                            <input type="text" name="" id="" placeholder="23456788901"></input>
                        </div>
                        <div className="amount">
                            <label for="">Amount</label>
                            <input type="text" name="" id="" placeholder="₦ 00.00"></input>
                        </div>
                        <div className="submit-transfer">
                            <button>Transfer</button>
                        </div>
                    </div> */}
                </div>
            </div>
     </div>
    );
}

export default Modal;