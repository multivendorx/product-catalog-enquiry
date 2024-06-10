import React from 'react';
const Products = ({ productKey, productItems, quantity }) => {
    // console.log(productItems)
    // console.log(quantity)
    return (
        <>
            <article key={productKey} className='product-item'>
                <section className='item-meta-wrapper'>
                    <div className='product-img'>
                        <img src="https://shorturl.at/gGILQ" alt="" />
                    </div>
                    <div className='item-meta-data'>
                        <p className='product-name'>{productItems.name}</p>
                        {Object.entries(quantity).map(([key, value], index) => {
                            if (key == productItems.id) {
                                return (
                                    <p className='product-qty'> Qty <span>{value}</span></p>
                                );
                            }
                        })}
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