import React from 'react';
import DashboardLayout from '../UserLayout/UserDashboardLayout';
import Initial from '../../Components/Initial/Initial';
import Transactions from '../../Components/Transactions/Transactions';

function RecentTransactions() {
    return (
        <DashboardLayout>
            <Initial message="Recent Transactions">
                <Transactions />
            </Initial>
        </DashboardLayout>   
    );
}

export default RecentTransactions;