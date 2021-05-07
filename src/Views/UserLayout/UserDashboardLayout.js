import '../../Styles/base.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import HeaderTwo from '../../Components/HeaderTwo/HeaderTwo';
import Balance from '../../Components/Balance/Balance';


const DashboardLayout = ({children}) => {

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-main">
                <Header />
                <HeaderTwo />
                <Balance />
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;