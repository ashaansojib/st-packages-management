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
        <div className='p-4'>
            <div className="my-container">
                
                <h2 className='font-medium text-slate-100 pb-2'>All Packages List :</h2>
                <div>
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
                                <p className='text-center px-4 py-2 w-[180px] mx-auto bg-[#FF014F] rounded-md'>Total Packages: {packages.length}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;