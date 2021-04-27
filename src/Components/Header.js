import '../Styles/header.css';
import notif from '../assets/notification-2-line.svg';
// import arrow from '../assets/Group 31000.svg';
import Dropdown from 'react-dropdown';
import "react-dropdown/style.css"

// import Dropdown from 'react-simple-dropdown';
// import DropdownTrigger from 'Dropdown.DropdownTrigger';
// import DropdownContent from 'Dropdown.DropdownContent';
// var DropdownTrigger = Dropdown.DropdownTrigger;
// var DropdownContent = Dropdown.DropdownContent;


const Header = () => {
    const options = [
        'Profile', 'Settings', 'Logout'
    ];
    // const defaultOption = options[0];
    // value={defaultOption}
    return (
        <div className="header-flex">
                    <div className="margin-r-44">
                        <img src={notif} alt=""></img>
                    </div>
                    <div>
                        <p>Kingsley Omin</p>
                    </div>
                    <div className="round-bg">
                        <p className="">KO</p>
                    </div>
                    <div>
                        <Dropdown options={options}/>
                        {/* <img src={Dropdown} alt=""></img> */}
                        {/* <Dropdown>
                            <DropdownTrigger>
                                <img src={arrow} alt=""></img>
                            </DropdownTrigger>
                            <DropdownContent>
                                <ul>
                                    <li>
                                        <a href="/profiles">
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/settings">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/logout">
                                            Log Out
                                        </a>
                                    </li>
                                </ul>
                            </DropdownContent>
                        </Dropdown> */}
                    </div>
                </div>
    );
};

export default Header;