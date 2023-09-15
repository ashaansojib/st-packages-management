import React, { Fragment, useEffect, useState } from 'react';
import PackageList from './PackageList';
import { ScaleLoader } from 'react-spinners';
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { useSetPackageMutation } from '../redux/features/api/baseApi';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const [setPackage, { data: findPackage }] = useSetPackageMutation();
    console.log(findPackage)

    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm();

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const onSubmit = (data) => {
        setPackage(data)

        closeModal();
        reset();
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
        <div className="my-container py-3">
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
                        <div className="fixed inset-0" />
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
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mt-2 grid grid-cols-2 gap-4 text-black">
                                            <input type="text" {...register("name")} placeholder="Name" className="input input-bordered w-full" />
                                            <input type="text" {...register("model", { required: true })} placeholder="Model" className="input input-bordered w-full" />
                                            <input type="text" {...register("price")} placeholder="Price" className="input input-bordered w-full" />
                                            <input type="text" {...register("quantity", { required: true })} placeholder="Quantity" className="input input-bordered w-full" />
                                        </div>


                                        <div className="mt-4">
                                            <input
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" />
                                        </div>
                                    </form>
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