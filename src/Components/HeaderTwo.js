import '../Styles/header-two.css';

const HeaderTwo = () => {
    return(
        <div className="welcome-flex">
                    <div className="align-bottom">
                        <h2>
                            Hello Kingsley 👋🏿
                    </h2>
                    </div>
                    <div className="header-flex">
                        <div>
                            <button>Transfer Funds</button>
                        </div>
                        <div>
                            <button className="btn">+ Fund Wallet</button>
                        </div>
                    </div>
                </div>
    );
};

export default HeaderTwo;