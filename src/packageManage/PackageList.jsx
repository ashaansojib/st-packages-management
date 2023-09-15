import React from 'react';

const PackageList = ({ item }) => {
    const { brand, date, price, quantity, model } = item;
    return (
        <tr className='border-gray-400'>
            <th>{brand}</th>
            <td>{model}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{date}</td>
            <td>
                <button className='p-1 border rounded-full'>X</button>
            </td>
            <td>
            <button className='p-1 border rounded-full'>Pay</button>
            </td>
        </tr>
    );
};

export default PackageList;