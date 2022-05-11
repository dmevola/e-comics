import React from 'react'
import './Checkout.css'
import { useStateValue } from '../../StateProvider';
import Subtotal from '../../component/Subtotal/Subtotal'
import CheckoutProduckt from '../../component/CheckoutProduct/CheckoutProduct'




export default function Checkout() {
    
    const [{basket,user},dispatch] = useStateValue();


  return (
    <div className="checkout m-0 p-0 bg-orange-300 flex-col">
        <div className="checkout__left m-0 lg:px-9">
            {/* <img className="checkout__add" src="https://m.media-amazon.com/images/I/A1tmfYAtb+L._AC_UY436_FMwebp_QL65_.jpg" alt=""></img> */}
            <div className=''>
              <h2 className="checkout__title">
                  Shopping Cart
              </h2>

              <div className="checkout__right">
                <Subtotal/>
              </div>  

              {/* Container for checkout products */}
              <div className='grid md:grid-cols-2 xl:grid-cols-3'>
                {basket.map(item=>(
                  <div className="product h-[1000px] px-9 mx-2 rounded-lg shadow-none outline-none bg-yellow-50">    
                    <CheckoutProduckt  id={item.id}
                    itemTitle={item.itemTitle}
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

                
            </div>
        </div>   
    </div>
  )
}