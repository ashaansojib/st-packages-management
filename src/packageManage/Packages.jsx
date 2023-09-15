import React, { useEffect, useState } from 'react';
import PackageList from './PackageList';
import { ScaleLoader } from 'react-spinners';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true)

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
                                    <th>Actions</th>
                                    <th></th>
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
            <div className='flex justify-end gap-2 items-center'>
                <button className='text-center px-4 py-2 bg-[#353333] text-white rounded-md'>Add Package</button>
                <button className='text-center px-4 py-2 bg-[#FF014F] rounded-md'>Total: {packages.length}</button>
            </div>
        </div>
    );
};

export default Packages;