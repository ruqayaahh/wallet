import React from "react";
import "./header.css";
import notif from "../../assets/notification-2-line.svg";
// import arrow from '../assets/Group 31000.svg';
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

// import Dropdown from 'react-simple-dropdown';
// import DropdownTrigger from 'Dropdown.DropdownTrigger';
// import DropdownContent from 'Dropdown.DropdownContent';
// var DropdownTrigger = Dropdown.DropdownTrigger;
// var DropdownContent = Dropdown.DropdownContent;

const Header = () => {
  const options = ["Profile", "Settings", "Logout"];

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
        {/* <Dropdown
          options={options}
          onChange={this._onSelect}
          className="myClassName"
        /> */}
      </div>
    </div>
  );
};

export default Header;
