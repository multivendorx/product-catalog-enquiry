import React from 'react';

const Products = ({key, items}) => {
    console.log(items)
    return (
        <>
            <article key={key} className='product-item'>
                <section>
                    <div>
                        <img src="https://shorturl.at/gGILQ" alt="" />
                    </div>
                    <div>
                        <p>{items.name}</p>
                        <p>Qty</p>
                    </div>
                </section>
                <section>
                    <p>{items.status}</p>
                </section>
                <section>
                    <p dangerouslySetInnerHTML={{ __html: items.price }}/>
                </section>
            </article>

            {/* <article key={key} className='product-item'>
                <main className='meta-data'>
                    <div className='product-images'>
                        <img src="https://shorturl.at/gGILQ" alt="" />
                    </div>
                    <div className='meta-details'>
                        <p className='product-name'>{items.name}</p>
                        <span className='product-status'>{items.status}</span>
                    </div>
                </main>
                <div className='price-section'>
                    <p dangerouslySetInnerHTML={{ __html: items.price }}/>
                </div>
            </article> */}
        </>
    )
}

export default Products;