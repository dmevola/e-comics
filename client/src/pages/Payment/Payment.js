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
                    <br></br>
                    <br></br>
                    {basket.map(item=>(
                        
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