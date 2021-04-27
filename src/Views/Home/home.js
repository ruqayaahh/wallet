import '../../App2.css';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import HeaderTwo from '../../Components/HeaderTwo';
import Balance from '../../Components/Balance';
import Initial from '../../Components/Initial';

const Dashboard = () => {
    return (
        <div className="container">
            <Sidebar />
            <div className="main">
                <Header />
                <HeaderTwo />
                <Balance />
                <Initial message="Transaction History"/>
            </div>
        </div>
        
    );
}

export default Dashboard;