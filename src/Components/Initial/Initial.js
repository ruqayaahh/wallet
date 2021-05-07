import './initial.css';

function Initial({message, children}) {
    return (
        <div className="transaction-history">
            <div className="h3">
                <h3>{message}</h3>
            </div>
            {children}
        </div>
    );
};

export default Initial;