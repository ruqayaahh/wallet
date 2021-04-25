import React from 'react';
import Transactions from './Transactions';
import '../Styles/transfer.css';

class Transfer extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    showModal() {
        this.setState({show : true});
    }
    hideModal() {
        this.setState({show: false});
    }
    
    render() {
        return (
            <Transactions />

        );
    }
};

export default Transfer;