import React from 'react'

import { TransactionStatusType } from 'contexts/TransactionWatcher'

import ApprovingTransaction from './components/ApprovingTransaction'
import CompletedTransaction from './components/CompletedTransaction'
import FailedTransaction from './components/FailedTransaction'
import LongTransaction from './components/LongTransaction'
import PendingTransaction from './components/PendingTransaction'

interface TransactionWatcherProps {
    transactionStatus?: TransactionStatusType
    startTransactionComponent?: any
    pendingTransactionComponent?: any
    approvingTransactionComponent?: any
    completedTransactionComponent?: any
    failedTransactionComponent?: any
    longTransactionComponent?: any
}


const TransactionWatcher: React.FC<TransactionWatcherProps> = ({
    transactionStatus,
    startTransactionComponent,
    approvingTransactionComponent = <ApprovingTransaction />,
    pendingTransactionComponent = <PendingTransaction />,
    completedTransactionComponent = <CompletedTransaction />,
    failedTransactionComponent = <FailedTransaction />,
    longTransactionComponent = <LongTransaction />
}) => {
    switch (transactionStatus) {
        case TransactionStatusType.IS_UNSTARTED:
            return startTransactionComponent
        case TransactionStatusType.IS_APPROVING:
            return approvingTransactionComponent

        case TransactionStatusType.IS_PENDING:
            return pendingTransactionComponent

        case TransactionStatusType.IS_COMPLETED:
            return completedTransactionComponent

        case TransactionStatusType.IS_FAILED:
            return failedTransactionComponent

        case TransactionStatusType.IS_LONG:
            return longTransactionComponent

        default:
            return null
    }
}

export default TransactionWatcher