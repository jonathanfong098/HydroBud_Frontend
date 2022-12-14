import React, { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition} from '@headlessui/react'
import Image from 'next/image'

// importing custom components
import AddData from '../Devices/AddData/AddData'
import AddAlarm from './Alarm/AddAlarm'
import AlarmList from './Alarm/AlarmList'

// importing custom hooks
import useAlert from '../../hooks/use-alert'

const DataCardMenu = ({device}) => {
    const { alertIsOpen: addDataIsOpen, openAlert: openAddData, closeAlert: closeAddData} = useAlert()
    const { alertIsOpen: addAlarmIsOpen, openAlert: openAddAlarm, closeAlert: closeAddAlarm} = useAlert()
    const { alertIsOpen: alarmListIsOpen, openAlert: openAlarmList, closeAlert: closeAlarmList} = useAlert() 

    const confirmHandler = (deviceID) => {
        deleteDeviceRequest(deviceID)
        closeAlert()
    }

    const doNotConfirmHandler = () => {
        closeAlert()
    }

    const copyDeviceIDHandler = () => {
        navigator.clipboard.writeText(device.id)
    }

    return (
        <>
            <AddData 
                isOpen={addDataIsOpen} 
                closeModal={closeAddData}
                deviceID={device.id}
                deviceMetrics={device.metrics}
            />
            <AddAlarm 
                isOpen={addAlarmIsOpen} 
                closeModal={closeAddAlarm}
                deviceID={device.id}
                deviceMetrics={device.metrics}
            />
            <AlarmList 
                isOpen={alarmListIsOpen} 
                closeModal={closeAlarmList}
                deviceID={device.id}
                deviceMetrics={device.metrics}
            />            
            <Menu>
                <Menu.Button>
                    <img   
                        src='/images/horizontal_dots.svg'
                        layout='fill'
                        alt='open_menu'
                        className='w-[2rem] h-[2rem]'
                    />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                >
                    <Menu.Items className='flex flex-col absolute w-[10rem] divide-y divide-gray-100 mt-[-0.8rem] rounded-[1rem] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <Menu.Item>
                            <div 
                                className={`flex flex-row justify-center items-center py-[0.8rem] space-x-[0.5rem] w-full leading-[2.5rem] hover:bg-[#B6CB9E] hover: cursor-pointer hover:rounded-t-[1rem]`}
                                onClick={copyDeviceIDHandler}
                            >
                                <div className='relative w-[1.5rem] h-[1.5rem]'>
                                    <Image
                                        src='/images/duplicate.svg'
                                        layout='fill'
                                        alt='copy'
                                    />
                                </div>
                                <div>Copy ID</div>
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div 
                                className={`flex flex-row justify-center items-center py-[0.8rem] space-x-[0.5rem] w-full leading-[2.5rem] hover:bg-[#B6CB9E] hover: cursor-pointer`}
                                onClick={openAddData}
                            >
                                <div className='relative w-[1.5rem] h-[1.5rem]'>
                                    <Image
                                        src='/images/plus.svg'
                                        layout='fill'
                                        alt='add data'
                                    />
                                </div>
                                <div>Add Data</div>
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div 
                                className={`flex flex-row justify-center items-center py-[0.8rem] space-x-[0.5rem] w-full leading-[2.5rem] hover:bg-[#B6CB9E] hover: cursor-pointer`}
                                onClick={openAddAlarm}
                            >
                                <div className='relative w-[1.5rem] h-[1.5rem]'>
                                    <Image
                                        src='/images/plus_circle.svg'
                                        layout='fill'
                                        alt='add alert'
                                    />
                                </div>
                                <div>Add Alarm</div>
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div 
                                className={`flex flex-row justify-center items-center py-[0.8rem] space-x-[0.5rem] w-full leading-[2.5rem] hover:bg-[#B6CB9E] hover:rounded-b-[1rem] hover: cursor-pointer`}
                                onClick={openAlarmList}
                            >
                                <div className='relative w-[1.5rem] h-[1.5rem]'>
                                    <Image
                                        src='/images/alerts.svg'
                                        layout='fill'
                                        alt='notifications'
                                    />
                                </div>
                                <div>View Alarms</div>
                            </div>
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}

export default DataCardMenu