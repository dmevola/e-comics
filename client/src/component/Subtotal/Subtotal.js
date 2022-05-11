import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import {useNavigate} from 'react-router-dom';
export default function Subtotal() {
    const navigate = useNavigate();
    const [{basket},dispatch] = useStateValue();
    

    
    return (
        <div className="subtotal rounded-md mb-5 pb-7 pt-3 mx-3 outline outline-1 flex justify-center bg-yellow-50">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>Subtotal({basket.length} item):
                        <strong>{value}</strong>
                        </p> 
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order
                            contains a gift    
                        </small> 
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType ={"text"}
                thousandSeparator = {true}
                prefix={"$"}
            />
            <button onClick={e=>navigate('/payment')} className='p-1.5 my-2 font-bold text-gray-800 bg-blue-300 leading-tight uppercase rounded shadow-md hover:bg-purple-200 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out items-center sm:px-3'>Proceed to Checkout</button>
                 
            {getBasketTotal(basket)}     
        </div>
    )
}