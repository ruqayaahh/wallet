import '../../Styles/base.css';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import HeaderTwo from '../../HeaderTwo/HeaderTwo';
import Balance from '../../Balance/Balance';
import Modal from '../../Modal/Modal';
// import { useState } from 'react';

// import Initial from '../../Components/Initial';

const DashboardLayout = ({children}) => {
    // const [open,setOpen] = useState(false);

    return (
        <div className="dashboard-container">
            <Modal />
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