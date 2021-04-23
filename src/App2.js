import './App2.css';
// import Dashboard from './Views/Home/Dashboard';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import HeaderTwo from './Components/HeaderTwo';
import Balance from './Components/Balance';

import Dashboard from './Components/Dashboard';
// import Transactions from './Components/Transactions';
// import Transfer from './Components/Transfer.js';

function App2() {
    return(
        <div className="container">
           {/* <Dashboard />  */}
           <Sidebar /> 
           <div className="main">
               <Header />
               <HeaderTwo />
               <Balance />
               <Dashboard message="Transaction History" />
                {/* <Transactions message="Recent Transactions" /> */}
                {/* <Transfer /> */}
           </div>
        </div>
    );
}

export default App2;