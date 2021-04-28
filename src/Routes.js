import { Route, Switch } from 'react-router-dom';
import Signup from './Views/Authscreens/signup';
import Otp from './Views/Authscreens/otp';
import Login from './Views/Authscreens/login';
import  ForgotPassword from './Views/Authscreens/forgotpassword';
import InboxReset from './Views/Authscreens/inboxreset';
import ResetPassword from './Views/Authscreens/resetpassword';
import Dashboard from './Views/Home/home';
import Transaction from './Views/Home/transactions';

const Approutes = () => {
   return (
        <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/otp" component={Otp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-inbox" component={InboxReset} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/transactions" component={Transaction} />
            {/* <Route exact path="/transfers" component={Dashboard} /> */}
        </Switch>
   );
}

export default Approutes;
