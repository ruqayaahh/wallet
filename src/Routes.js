import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';

// pages
import App2 from './App2';
import Transfer from './Views/Home/transfer';
import FundWallet from './Views/Home/fund-wallet';
import Transactions from './Views/Transactions/transactions';
import SearchFilter from './Views/Transactions/searchFilter';
import ScrollToTop from './ScrollToTop';
import Landing from './landing';
import Admin from './Views/Home';


const AppRoutes = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	return (
		<>
		<ScrollToTop/>
			<Route exact path='/admin' component={Admin} />
			<Route exact path='/app' component={App2} />
			<Route exact path='/transfer' component={Transfer} />
			<Route exact path='/fund' component={FundWallet} />
			<Route exact path='/transactions' component={Transactions} />
			<Route exact path='/search' component={SearchFilter} />
			<Route exact path='/' component={Landing} />
		</>
	);
};

export default AppRoutes;