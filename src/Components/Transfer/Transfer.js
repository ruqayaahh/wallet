import React from 'react';
import './transfer.css';
import Input from '../Input/Input';
import InputRadio from '../InputRadio/InputRadio';
import Button from '../Button/Button';

const Transfer = () => {
    const styles = {
        width: '15px',
        height: '15px'

    }
    return(
        <>
            <div className="options">
                <div>
                    <p className="select-wallet-type-text">Select Wallet Type to Transfer From</p>
                </div>
                <div className="radios">
                    <InputRadio label="Naira" type="radio" name="currency" style={styles} />
                    <InputRadio label="Dollar" type="radio" name="currency" style={styles} />
                </div>
            </div>
            {/* <div className="acct-number">
                <Input label="Account Number" type="text" id="account-num" placeholder="23456788901"/>
            </div> */}
            <div className="amount">
                <Input label="Amount" type="text" id="amount" placeholder="₦ 00.00"/>
            </div>
            <div className="submit-transfer">
                <Button type="button" title="Transfer" />
            </div>
        </>
    )
}

export default Transfer;