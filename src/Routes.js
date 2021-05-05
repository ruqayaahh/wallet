import { Route, Switch } from 'react-router-dom';
import Signup from './Views/Authscreens/signup';
import Otp from './Views/Authscreens/otp';
import Login from './Views/Authscreens/login';
import  ForgotPassword from './Views/Authscreens/forgotpassword';
import InboxReset from './Views/Authscreens/inboxreset';
import ResetPassword from './Views/Authscreens/resetpassword';
import Landing from './Views/Home/home';
import RecentTransactions from './Views/Home/transactions';
// import Transfers from './Views/Home/transfer';

const Approutes = () => {
   return (
        <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/otp" component={Otp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-inbox" component={InboxReset} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/dashboard" component={Landing} />
            <Route exact path="/transactions" component={RecentTransactions} />
            {/* <Route exact path="/transfers" component098y65trea ? ={Transfers} /> */}
        </Switch>
   );
}

export default Approutes;
