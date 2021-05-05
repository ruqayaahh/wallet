import '../../Styles/base.css';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import HeaderTwo from '../../HeaderTwo/HeaderTwo';
import Balance from '../../Balance/Balance';


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