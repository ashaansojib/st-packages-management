import React, { Fragment, useEffect, useState } from 'react';
import PackageList from './PackageList';
import { ScaleLoader } from 'react-spinners';
import { useGetPackagesQuery } from '../redux/features/api/baseApi';

const Packages = () => {
    const { data: packages, isLoading } = useGetPackagesQuery();
    return (
        <div className="my-container py-3">
            <h2 className='font-medium text-slate-100 pb-2'>All Packages List :</h2>
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
                                    packages?.length === 0 ? <tr><td className='text-[#FF014F] text-center py-3'>No package list found...</td></tr> : packages?.map((item) => <PackageList
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

export default Packages;