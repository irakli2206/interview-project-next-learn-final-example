import clsx from 'clsx'
import React from 'react'

type Props = {
    activeTab: string
}

const Tabs = ({ activeTab }: Props) => {
    const tabs = ['All', 'Paid', 'Pending', 'Overdue', 'Canceled']


    return (
        <div className='flex w-full mt-6 relative '>
            <>
                {tabs.map((tab) => {
                    const isActive = activeTab === tab
                    return (
                        <Tab
                            key={tab}
                            label={tab}
                            isActive={isActive}
                        />
                    )
                })}
            </>
            <div className='absolute bottom-0 w-full h-[2px] bg-blue-100'></div>
        </div>
    )
}

type TabProps = {
    label: string
    isActive: boolean
}

const Tab = ({ label, isActive }: TabProps) => {

    return (
        <div className='flex flex-col relative w-full text-center cursor-pointer pb-1 group' >
            <p className={clsx('text-blue-400 text-sm', {
                'text-blue-600 font-medium': isActive
            })}>{label}</p>
            <div className={clsx('absolute w-full h-[2px] group-hover:bg-blue-200 transition bottom-0 z-50', {
                'bg-blue-500': isActive
            })}></div>
        </div>
    )
}

export default Tabs