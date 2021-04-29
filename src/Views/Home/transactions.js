import DashboardLayout from '../UserLayout/UserDashboardLayout';
import Initial from '../../Initial/Initial';
import Transactions from '../../Transactions/Transactions';

function RecentTransactions() {
    return (
        <DashboardLayout>
            <Initial message="Recent Transaction">
                <Transactions />
            </Initial>
        </DashboardLayout>   
    );
}

export default RecentTransactions;