import '../Styles/dashboard.css';
import Box from '../assets/Empty state image.svg';

function Dashboard({message}) {
    return (
        <div class="transaction-history">
        <div class="h3">
            <h3>{message}</h3>
        </div>
        <div class="transaction-history">
            <div class="empty-state">
                <img src={Box} alt=""></img>
            </div>
            <p>No Transactions</p>
        </div>
    </div>
    );
};

export default Dashboard;