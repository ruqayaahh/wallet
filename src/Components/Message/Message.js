import './message.css';

function Message(props) {
    return (
        <div style={props.style}>
            <h2 className="auths">{props.message}</h2>
            <p className="auths">{props.submessage}</p>
        </div>
    );
};

export default Message;