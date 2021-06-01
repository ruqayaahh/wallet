// import './transfer.css';
import Input from '../Input/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputRadio from '../InputRadio/InputRadio';
import Button from '../Button/Button';
import axios from '../../api.js';

const FundWallet = () => {
    const styles = {
        width: '15px',
        height: '15px',
        margin: '0px'
    }

    const { register }= useForm({
        mode: 'all',
    });

    const payIntoWallet = (data) => {
        // const email = localStorage.getItem('userEmail');
        // const amount = e.target.name
        axios.post("fund-wallet", data);
    };
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
            <div className="amount">
                <Input label="Amount" { ...register('amount', {
                    required: "",
                    pattern: {
                       value: /\d{}\.d{2}/,
                       message: 'Input a valid amount',
                    }
                })} type="text" id="amount" placeholder="₦ 00.00" name="amount"/>
            </div>
            <div className="submit-transfer">
                <Button type="button" title="Fund Wallet" onClick={payIntoWallet} />
            </div>
        </>
    )
}

export default FundWallet;