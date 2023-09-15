import React, { Fragment, useEffect, useState } from 'react';
import PackageList from './PackageList';
import { ScaleLoader } from 'react-spinners';
import { Dialog, Transition } from '@headlessui/react';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const handleAdd = (data) => {
        console.log(data)
        closeModal()
    }
    useEffect(() => {
        fetch('/PackageList.json')
            .then(res => res.json())
            .then(data => {
                setPackages(data)
                setLoading(false)
            })
    }, []);
    return (
        <div className="my-container">
            <h2 className='font-medium text-slate-100 pb-2'>All Packages List :</h2>
            {
                loading ? (<ScaleLoader className='h-[200px] w-20 mx-auto' color="#e01616" />) : (
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className='text-white bg-[#070A2D]'>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Date</th>
                                    <th>Delete</th>
                                    <th>Pay</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    packages.map((item) => <PackageList
                                        key={item._id}
                                        item={item}
                                    />)
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
            <div className='flex justify-end gap-2 items-center p-4'>
                <button onClick={openModal} className='text-center px-4 py-2 bg-[#353333] text-white rounded-md'>Add Package</button>
                <button className='text-center px-4 py-2 bg-[#FF014F] rounded-md'>Total: {packages.length}</button>
            </div>
            {/* modal area */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Product Details
                                    </Dialog.Title>
                                    <div className="mt-2 grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="Name" className="input input-bordered w-full" />
                                    <input type="text" placeholder="Model" className="input input-bordered w-full" />
                                    <input type="text" placeholder="Price" className="input input-bordered w-full" />
                                    <input type="text" placeholder="Quantity" className="input input-bordered w-full" />
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => handleAdd("sojib")}
                                        >Done
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Packages;