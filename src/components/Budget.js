import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,dispatch,expenses,currency } = useContext(AppContext);
    
    const changeBudget = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if(val < totalExpenses)
            alert('You cannot reduce the budget value lower than the spending');
        else if (val > 20000)
            alert(`You cannot exceed the budget value more than ${currency} 20,000`);
        else
            dispatch({
                type: 'SET_BUDGET',
                payload: val
            });
    };
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {`${currency} `}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    step="10"
                    value={budget}
                    onChange={(event) => changeBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;