import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch} = useContext(AppContext);

    const changeCurrency = val => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });
    };

    return (
        <div className='alert alert-success'>
            <span>Currency: {` `}
                <select className='btn btn-success' name='currency' id='currency' onChange={event => changeCurrency(event.target.value)}>
                    <option value='$'>$ Dollar</option>
                    <option selected value='£'>£ Pound</option>
                    <option value='€'>€ Euro </option>
                    <option value='₹'>₹ Rupee</option>
                </select>
            </span>
        </div>
    );
};

export default Currency;