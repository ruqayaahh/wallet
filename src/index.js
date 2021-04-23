import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App2 from './App2';
// import Home from './Views/Home/empty-state';
// import History from './Views/Home/non-empty-state';
// import Transfer from './Views/Home/transfer';
// import FundWallet from './Views/Home/fund-wallet';
// import Transactions from './Views/Transactions/transactions';
// import SearchFilter from './Views/Transactions/searchFilter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();