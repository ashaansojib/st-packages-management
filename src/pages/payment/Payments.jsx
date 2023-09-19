import React from 'react';
import { useGetPaymentItemQuery } from '../../redux/features/api/baseApi';
import PackageList from '../../packageManage/PackageList';
import { ScaleLoader } from 'react-spinners';

const Payments = () => {
    const { data: paymentItem, isLoading} = useGetPaymentItemQuery();
    console.log(paymentItem)
    return (
        <div className='my-container pb-10'>
            <h2 className='py-4 text-center'>Payments history...</h2>
            {
                isLoading ? (<ScaleLoader className='h-[200px] w-20 mx-auto' color="#e01616" />) : (
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
                                    paymentItem?.length === 0 ? <tr><td className='text-[#FF014F] text-center py-3'>No package list found...</td></tr> : paymentItem?.map((item) => <PackageList
                                        key={item._id}
                                        item={item}
                                    />)

                                }
                            </tbody>

                        </table>
                    </div>
                )
            }
        </div>
    );
};

export default Payments;