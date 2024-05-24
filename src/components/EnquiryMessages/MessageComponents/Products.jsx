import React from 'react'

const Products = ({key}) => {
    return (
        <>
            <article key={key} className='product-item'>
                <main className='meta-data'>
                    <div className='product-images'>
                        <img src="https://shorturl.at/gGILQ" alt="" />
                    </div>
                    <div className='meta-details'>
                        <p className='product-name'>Bag</p>
                        <span className='product-status'>Out of stock</span>
                    </div>
                </main>
                <div className='price-section'>
                    <p>$785</p>
                </div>
            </article>
        </>
    )
}

export default Products;