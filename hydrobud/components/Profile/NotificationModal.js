import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { serverTimestamp } from 'firebase/firestore'
import { useRouter } from 'next/router'

import { createNotificationsListener } from '../../services/firebase/firebase-auth'

// importing custom components
// import NotificationList from './NotificationList'
import Notification from './Notification'
import Button from '../Button'
import Input from '../Input'
import Alert from '../Alert'

// importing custom context 
import { useAuthContext } from '../../context/AuthContext'

// importing custom hooks
import useAlert from '../../hooks/use-alert'
import useInput from '../../hooks/use-input'

const NotificationModal = ({isOpen, closeModal, user}) => {
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        // if (user) {
            const unsubscribeDevices = createNotificationsListener(user.uid, setNotifications)
        // }
    }, [])

    console.log('notifications in modal: ', notifications)

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div 
                            className='flex h-full items-center justify-center'
                        >
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <div className='flex items-center h-2/3'>
                                    <Dialog.Panel className='flex flex-col h-fit max-h-full w-[38rem] px-[3rem] py-[2rem] space-y-[1rem] rounded-[1.5rem] bg-[#F0F0F0] text-left shadow-xl transition-all overflow-y-auto'>
                                        { notifications.length > 0 ?
                                            (notifications.map((notification) => {
                                                return (
                                                    <Notification
                                                        key={notification.id}
                                                        message={notification.message}
                                                        description={notification.description}
                                                    />
                                                )
                                            })) : (<></>)
                                        }
                                    
                                    </Dialog.Panel>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default NotificationModal