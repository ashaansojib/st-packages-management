import React from 'react';

const PackageList = ({item}) => {
    const {brand,date, price, quantity, model} = item;
    return (
        <tr className='border-gray-400'>
            <th>{brand}</th>
            <td>{model}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{date}</td>
        </tr>
    );
};

export default PackageList;