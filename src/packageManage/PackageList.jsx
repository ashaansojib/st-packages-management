import React from 'react';
import { useRemoveComboMutation } from '../redux/features/api/baseApi';

const PackageList = ({ item }) => {
    const { _id, name, date, price, quantity, model, time } = item;
    const [removeCombo] = useRemoveComboMutation();
    const handleClickRemove = () => {
        removeCombo(_id)
    };
    return (
        <tr className='border-gray-400'>
            <th>{name}</th>
            <td>{model}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{date} <br /> {time}</td>
            <td>
                <button onClick={handleClickRemove} className='p-1 border-gray-500 border'>X</button>
            </td>
            <td>
                <button className='p-1 border border-gray-500'>Pay</button>
            </td>
        </tr>
    );
};

export default PackageList;