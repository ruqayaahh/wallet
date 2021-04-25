import React from 'react';
import svg from '../../src/assets/Union.svg';
import dashboardIcon from '../../src/assets/Dashboard.svg';
import clipboard from '../../src/assets/Clipboard list.svg';
import user from '../../src/assets/Add user.svg';
import '../Styles/sidebar.css';

class Sidebar extends React.Component {
    state = {
        navItems: ['Home', 'History', 'Profile']
    };

    render() {
        // const { navItems } = this.state;
        return (
            <aside>
            <div className="sidebar">
                <div className="logo-div">
            {/* eslint-disable-next-line */}
                    <a href="">
                        <img src={svg} alt=""></img>
                        <span className="logo-text">Wallet</span>
                    </a>
                </div>
                <div className="menu">
                    <div className="menu-flex">
                        <div className="menu-flex-item">
                            {/* <span className="item-one"></span> */}
                        <img src={dashboardIcon} alt="" className="item-one"></img>
                        </div>
                        <div>
                            <p className="sidebar-menu">Home</p>
                        </div>
                    </div>
                    <div className="menu-flex">
                        <div className="menu-flex-item">
                        {/* <span className="item-two"></span> */}
                        <img src={clipboard} alt="" className="item-two"></img>
                        </div>
                        <div>
                            <p className="sidebar-menu">History</p>
                        </div>
                    </div>
                    <div className="menu-flex">
                        <div className="menu-flex-item">
                        <img src={user} alt="" className="item-three"></img>
                        {/* <span className="item-three"></span> */}
                        </div>
                        <div>
                            <p className="sidebar-menu">Profile</p>
                        </div>
                    </div>
                </div>
            </div>
    </aside>
        );
    };
};

export default Sidebar;