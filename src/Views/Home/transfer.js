import DashboardLayout from '../UserLayout/UserDashboardLayout';
import Initial from '../../Initial/Initial';
import Transactions from '../../Transactions/Transactions';

function Transfers() {
    return (
        <DashboardLayout>
            <Initial message="Recent Transaction">
                <Transactions />
            </Initial>
        </DashboardLayout>   
    );
}

export default Transfers;