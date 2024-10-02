'use client'

import { Tab as TabT } from '@/app/dashboard/invoices/page'
import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

type Props = {
    activeTab: string
}

const tabs: string[] = ['All', 'Paid', 'Pending', 'Canceled']


const Tabs = ({ activeTab }: Props) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const onTabChange = (tab: string) => {
        const params = new URLSearchParams(searchParams);
        if (tab as string === 'all') params.delete('tab')
        else params.set('tab', tab);
        replace(`${pathname}?${params.toString()}`);
    }
  
    return (
        <div className='flex w-full mt-6 relative '>
            <>
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.toLowerCase()
                    return (
                        <Tab
                            key={tab}
                            label={tab}
                            isActive={isActive}
                            onTabClick={onTabChange}
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
    onTabClick: (tab: string) => void
}

const Tab = ({ label, isActive, onTabClick }: TabProps) => {

    return (
        <div onClick={() => {
            onTabClick(label.toLowerCase())
        }} className='flex flex-col relative w-full text-center cursor-pointer pb-1 group' >
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