import './header-two.css';
import Button from '../Button/Button';
import { useState } from 'react';
import Modal from '../Modal/Modal'

const HeaderTwo = () => {
    const [open,setOpen] = useState(false);
    // const openTransferModal() =
    const handleOpen = () => {
        console.log("clicked");
    }
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
                            onClick={() => setOpen(true)}></Button>
                        </div>
                        <div className="btn-funds">
                            <Button type="button" title="+ Fund Wallet" className="btn-funds-btn" ></Button>
                        </div>
                    </div>
                    {/* <Modal open={open} setOpen={setOpen} /> */}
                </div>
    );
};

export default HeaderTwo;