import React, { useEffect, useState } from 'react';
import PackageList from './PackageList';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect( ()=>{
        fetch('/PackageList.json')
        .then( res => res.json())
        .then( data => setPackages(data))
    }, []);
    return (
        <div className='p-4'>
            <div className="my-container">
                <h2>All Packages List :</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                                {
                                    packages.map( (item) => <PackageList 
                                    key={item._id}
                                    item={item}
                                    />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;