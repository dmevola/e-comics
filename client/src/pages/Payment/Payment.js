import { Link } from 'react-router-dom';
import CheckoutProduckt from '../../component/CheckoutProduct/CheckoutProduct';
import "./Payment.css"
import { useStateValue } from '../../StateProvider';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { getBasketTotal } from '../../reducer'


export default function Payment() {
    const[{basket,user},dispatch] = useStateValue();
    
  return (
    <div className="payment">
        
        <div className="payment__container">
            <h1>
                Checkout(<Link to="/checkout">{basket?.length} items</Link>)
            </h1>
            <div className="payment__section">
                <h2>TOTAL : {getBasketTotal(basket)}</h2>
            </div>
            <div className="payment__section">
                <div className="paument__title">
                        <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item=>(
                        <CheckoutProduckt
                            id ={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                ))}
                </div>
            </div>
            <div className="payment__section">
                <div className="paument__title">
                
                </div>
                <div className="payment__details">
                     
                </div>
            </div>
         </div>
         <div className="paypal__contrainer">

            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "vertical" }} />
            </PayPalScriptProvider>
        </div>

       

    </div>
  )
}