import '../Styles/base.css';
import Home from '../Home/Home';
import Message from '../Message/Message';

function AuthscreenLayout({style, message, submessage, children}) {
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

export default AuthscreenLayout;