import React, { Component } from 'react';
import '../Styles/dropdown.css';

class Dropdown extends Component {
    constructor(properties){
        super(properties);
        this.state = {
            title: this.props.title,
            isDropdownOpen: false,
        }
    }
    render () {
        return (
            <div className="wrapper">
            <div className="title"></div>
        </div>
        );
    }
};

export default Dropdown;