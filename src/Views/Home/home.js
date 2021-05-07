import DashboardLayout from '../UserLayout/UserDashboardLayout';
import Initial from '../../Components/Initial/Initial';
import Box from '../../assets/Empty state image.svg';

function Landing() {
    return (
        <DashboardLayout>
            <Initial message="Transaction History">
                <div className="transaction-history">
                    <div className="empty-state">
                        <img src={Box} alt=""></img>
                    </div>
                    <p>No Transactions</p>
                </div>
            </Initial>
        </DashboardLayout>   
    );
}

export default Landing;