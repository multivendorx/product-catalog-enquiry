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
        </>
    )
}
export default Products;