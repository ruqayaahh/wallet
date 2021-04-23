import '../Styles/message.css';

export default function Message(props) {
    return (
        <div>
            <h2>{props.message}</h2>
            <p>{props.submessage}</p>
        </div>
    );
};