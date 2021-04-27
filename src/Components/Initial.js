import '../Styles/dashboard.css';
import Box from '../assets/Empty state image.svg';

function Initial({message}) {
    return (
        <div className="transaction-history">
        <div className="h3">
            <h3>{message}</h3>
        </div>
        <div className="transaction-history">
            <div className="empty-state">
                <img src={Box} alt=""></img>
            </div>
            <p>No Transactions</p>
        </div>
    </div>
    );
};

export default Initial;