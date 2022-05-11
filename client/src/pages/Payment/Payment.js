import { Link } from 'react-router-dom';
import CheckoutProduckt from '../../component/CheckoutProduct/CheckoutProduct';
import "./Payment.css"
import { useStateValue } from '../../StateProvider';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { getBasketTotal } from '../../reducer'
import Product from '../../component/Product/Product';


export default function Payment() {
    const[{basket,user},dispatch] = useStateValue();
    
  return (
    <div className="payment flex-col m-0 p-0 bg-purple-300">
        
        <div className="payment__container justify-center">
            <h1 className='bg-purple-300 font-bold'>
                Checkout(<Link to="/checkout" className='font-normal'>{basket?.length} items</Link>)
            </h1>

            <div className="payment__section justify-center">
                <h2 className='bg-green-200 rounded p-2 px-4'>TOTAL : {getBasketTotal(basket)}</h2>
            </div>

            <div className="paypal__container flex justify-center items-center my-6">
                <PayPalScriptProvider options={{ "client-id": "test" }} className='justify-center'>
                    <PayPalButtons style={{ layout: "vertical" }} className='justify-center'/>
                </PayPalScriptProvider>
            </div>

            <div className="payment__items grid md:grid-cols-2 xl:grid-cols-3">
    
                {basket.map(item=>(
                    <div className="prodct h-[1000px] mx-2 rounded-lg shadow-none outline-none">
                        <Product id={item.id}
                        itemIssueTitle={item.itemIssueTitle}
                        itemDescription ={item.itemDescription}
                        itemPublisher = {item.itemPublisher}
                        username = {item.username}
                        itemPrice = {item.itemPrice}
                        itemCondition = {item.itemCondition}
                        itemImage = {item.itemImage}
                        createdAt = {item.createdAt}
                    />
                    </div>
                ))}
            </div>
            
            
            <div className="payment__section">
                <div className="payment__title">
                
                </div>
                <div className="payment__details">
                     
                </div>
            </div>
        </div>
        

       

    </div>
  )
}