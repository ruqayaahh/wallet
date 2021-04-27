import '../Styles/base.css';
import Home from '../Components/Home';
import Message from '../Components/Message';

function DashboardLayout({style, message, submessage, children}) {
    return (
        <div className="container-box">
            <div className="content">
            <Home />
            <div className="hero">
            <Message style={style} message={message} submessage={submessage}/>
            {children}
            </div>
            </div>
        </div>
    );
}

export default DashboardLayout;