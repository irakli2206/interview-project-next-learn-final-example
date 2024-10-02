
import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { updateInvoice } from '../lib/actions'

type Props = {
    isOpen: boolean
    onClose: () => void
    invoiceId: string
    amount: number
    customerId: string
}

const Dropdown = ({ isOpen, onClose, invoiceId, amount, customerId }: Props) => {
    const statuses = ['Paid', 'Canceled', 'Pending']

    return (
        <div className='relative'>
            {isOpen ?
                <form
                    action={(formData) => {
                        formData.append('customerId', customerId)
                        formData.append('amount', (amount / 100).toString())
                        console.log(Object.fromEntries(formData.entries()))
                        updateInvoice(invoiceId, {}, formData)
                    }}
                    className='absolute rounded-sm  drop-shadow-sm p-1 bg-white flex flex-col border border-gray-200 mt-0.5 -translate-x-1/2 left-1/2'>
                    <header className="flex justify-between items-center border-b pb-1 gap-4 border-gray-200">
                        <p className='font-medium  '>Set status</p>
                        <button onClick={onClose} className='ml-auto p-1 hover:bg-gray-200  rounded-sm'>
                            <XMarkIcon className=" w-4 text-gray-500" />
                        </button>
                    </header>
                    <footer className='flex flex-col gap-2 mt-1'>
                        {
                            statuses.map((status) => {
                                return (
                                    <button key={status} type='submit' className='hover:bg-gray-200 text-start px-2 rounded-sm '
                                        name="status"
                                        value={status.toLowerCase()}
                                    >
                                        {status}
                                    </button>
                                )
                            })
                        }
                    </footer>
                </form>
                :
                null
            }
        </div>
    )
}

export default Dropdown