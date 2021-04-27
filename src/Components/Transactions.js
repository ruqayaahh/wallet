import '../Styles/transactions.css';
import Success from '../assets/Group 31119.svg';
import Fail from '../assets/Group 31018.svg'

const Transactions = ({message}) => {
    return (
        <div className="transaction-history">
            <div>
                <h3>{message}</h3>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Transaction Type</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Wallet Deposit</td>
                            <td>May 27, 2020 | <span>12:38 PM</span></td>
                            <td>
                                <img src={Success} alt=""></img>
                            </td>
                            <td>NGN 30,0000</td>
                        </tr>
                        <tr>
                            <td>Wallet Deposit</td>
                            <td>May 27, 2020 | <span>12:38 PM</span></td>
                            <td>
                            <img src={Fail} alt=""></img>
                            </td>
                            <td>NGN 30,0000</td>
                        </tr>
                        <tr>
                            <td>Wallet Deposit</td>
                            <td>May 27, 2020 | <span>12:38 PM</span></td>
                            <td>
                            <img src={Success} alt=""></img>
                            </td>
                            <td>NGN 30,0000</td>
                        </tr>
                        <tr>
                            <td>Wallet Deposit</td>
                            <td>May 27, 2020 | <span>12:38 PM</span></td>
                            <td>
                            <img src={Success} alt=""></img>
                            </td>
                            <td>NGN 30,0000</td>
                        </tr>
                        <tr>
                            <td>Wallet Deposit</td>
                            <td>May 27, 2020 | <span>12:38 PM</span></td>
                            <td>
                            <img src={Fail} alt=""></img>
                            </td>
                            <td>NGN 30,0000</td>
                        </tr>
                        <tr>
                            <td>Wallet Deposit</td>
                            <td>May 27, 2020 | <span>12:38 PM</span></td>
                            <td>
                            <img src={Success} alt=""></img>
                            </td>
                            <td>NGN 30,0000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;