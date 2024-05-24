import React from 'react'
import Products from './Products';

const CartComponents = ( { enquiry } ) => {
  return (
    <>
        <div className='cart-products-container'>
            <h3>Products</h3>
            <div className="container-wrapper">
                {enquiry.product.map((items, index)=>{
                    return (
                        <Products productKey={index} productItems={items} />
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default CartComponents;