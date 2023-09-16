import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSetPackageMutation } from '../redux/features/api/baseApi';
import moment from 'moment';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm();
    const [setPackages] = useSetPackageMutation();

    const onSubmit = (data) => {
        data.quantity = parseInt(data.quantity);
        //collect date
        const time = moment().format('h:mmA');
        const date = moment().format('DD/MM/YY');
        data.time = time;
        data.date = date;
        setPackages(data)
        closeModal();
        reset();
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            {/* modal area */}
            < div className='my-container flex justify-end gap-2 items-center p-4' >
                <button onClick={openModal} className='text-center px-4 py-2 bg-[#353333] text-white rounded-md'>Add Package</button>
                <button className='text-center px-4 py-2 bg-[#FF014F] rounded-md'>Total: 5</button>
            </div >
            < Transition appear show={isOpen} as={Fragment}>
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
                                            <input type="number" {...register("quantity", { required: true })} placeholder="Quantity" className="input input-bordered w-full" />
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
            </Transition >
        </>
    );
};

export default Modal;