import React from 'react';
import logo from '../../assets/logo.svg';
import dashboardIcon from '../../assets/Dashboard.svg';
import clipboard from '../../assets/Clipboardlist.svg';
import user from '../../assets/Adduser.svg';
import './sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar({navItems}) {
        return (
            <aside className="sidebar-container">
            <div className="sidebar">
                <div className="logo-div">
            {/* eslint-disable-next-line */}
                    <Link to="">
                        <img src={logo} alt=""></img>
                    </Link>
                </div>
                <div>
                    <ul className="sidebar-menu">
                        <li className="sidebar-menu-list">
                            <div className="menu-flex-item">
                                {/* <span className="item-one"></span> */}
                            <img src={dashboardIcon} alt="" className="item-one"></img>
                            </div>
                            <div>
                                <Link to="/dashboard" className="sidebar-item">Home</Link>
                            </div>
                        </li>
                        <li className="sidebar-menu-list">
                            <div className="menu-flex-item">
                            {/* <span className="item-two"></span> */}
                            <img src={clipboard} alt="" className="item-two"></img>
                            </div>
                            <div>
                                <Link to="/transactions" className="sidebar-item">History</Link>
                            </div>
                        </li>
                        <li className="sidebar-menu-list">
                            <div className="menu-flex-item">
                            <img src={user} alt="" className="item-three"></img>
                            {/* <span className="item-three"></span> */}
                            </div>
                            <div>
                                <Link to="/dashboard" className="sidebar-item">Profile</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    </aside>
        );
    };

export default Sidebar;