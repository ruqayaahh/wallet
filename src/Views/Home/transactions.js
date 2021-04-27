import '../../App2.css';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import HeaderTwo from '../../Components/HeaderTwo';
import Balance from '../../Components/Balance';
import Transactions from '../../Components/Transactions';

const Transaction = () => {
    return (
        <div className="container">
            <Sidebar />
            <div className="main">
                <Header />
                <HeaderTwo />
                <Balance />
                <Transactions message="Recent Transactions"/>
            </div>
        </div>
        
    );
}

export default Transaction;