import { CheckIcon, ClockIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import moment from 'moment'

export default function InvoiceStatus({ status, date }: { status: string, date: string }) {
  const OVERDUE_DAYS = 14
  const isOverdue = moment().diff(moment(date), 'days') > OVERDUE_DAYS;

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending' || status === 'canceled',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'canceled' ? (
        <>
          Canceled
          <ArchiveBoxXMarkIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'pending' ? (
        <>
          {isOverdue ? 'Overdue' : 'Pending'}
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
