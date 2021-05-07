import React from 'react';
import './header-two.css';
import Button from '../Button/Button';
import { useState } from 'react';
import Modal from '../../Modal/Modal';
import Transfer from '../../Transfer/Transfer';
import FundWallet from '../Funding/Funding';

const HeaderTwo = () => {
    const [openTransfer, setOpenTransfer] = useState(false);
    const [openFunding, setOpenFunding] = useState(false);

    return(
        <div className="welcome-flex">
                    <div className="align-bottom">
                        <h2>
                            Hello Kingsley 👋🏿
                        </h2>
                    </div>
                    <div className="header-flex">
                        <div className="btn-transfer">
                            <Button type="button" title="Transfer Funds" className="btn-transfer-btn" 
                            onClick={() => setOpenTransfer(true)}></Button>
                        </div>
                        <div className="btn-funds">
                            <Button type="button" title="+ Fund Wallet" className="btn-funds-btn" onClick={() => setOpenFunding(true)}></Button>
                        </div>
                    </div>
                    <Modal title="Transfer" showModal={openTransfer} setShowModal={setOpenTransfer}>
                        <Transfer />
                    </Modal>
                    <Modal title="Fund Wallet" showModal={openFunding} setShowModal={setOpenFunding}>
                        <FundWallet />
                    </Modal>
                </div>
    );
};

export default HeaderTwo;