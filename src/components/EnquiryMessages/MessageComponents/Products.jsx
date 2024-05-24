import React from 'react';
const Products = ({ productKey, productItems }) => {
    console.log(productItems)
    return (
        <>
            <article key={productKey} className='product-item'>
                <section className='item-meta-wrapper'>
                    <div className='product-img'>
                        <img src="https://shorturl.at/gGILQ" alt="" />
                    </div>
                    <div className='item-meta-data'>
                        <p className='product-name'>{productItems.name}</p>
                        <p className='product-qty'>Qty <span></span></p>
                    </div>
                </section>
                <section className='product-price'>
                    <p dangerouslySetInnerHTML={{ __html: productItems.price }} />
                    <p className='instock'>{productItems.status}</p>
                </section>
            </article>
        </>
    )
}
export default Products;