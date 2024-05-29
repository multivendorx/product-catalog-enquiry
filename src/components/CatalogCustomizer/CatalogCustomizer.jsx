
import React, { useState } from 'react';
import './CatalogCustomizer.scss';
import ButtonCustomizer from '../AdminLibrary/Inputs/Special/ButtonCustomizer';
import SubTabSection from '../SubTabSection/SubTabSection';

const CatalogCustomizer = () => {

    const [menu, setMenu] = useState([
        {
            name: "Enquiry", link: "hi", id: 1, icon: 'font-info',
            setting: [
                {
                    name: 'name1',
                    id: 2,
                    value: 3,
                    description: "Allow backorder subscription"
                },
                {
                    name: 'name2',
                    id: 2,
                    value: 3,
                    description: "Allow backorder subscription"
                },
                {
                    name: 'name3',
                    id: 2,
                    value: 3,
                    description: "Allow backorder subscription"
                },
                {
                    name: 'name4',
                    id: 2,
                    value: 3,
                    description: "Allow backorder subscription"
                },
            ]
        },
        {
            name: "Enquiry Cart", link: "hi", id: 2, icon: 'font-store',
            setting: [
                {
                    name: 'name1',
                    id: 2,
                    value: 3,
                    description: "Allow backorder subscription"
                },
                {
                    name: 'name2',
                    id: 2,
                    value: 3,
                    description: "Allow backorder subscription"
                },
            ]
        },
        {
            name: "Quote", link: "hi", id: 3, icon: 'font-payment',
            setting: [
                {
                    name: 'name1',
                    id: 2,
                    value: 3,
                    description: "Allow backorder subscription"
                },
                {
                    name: 'name2',
                    id: 2,
                    value: 3,
                    description: "Allow backorder subscription"
                },
            ]
        },
    ]);

    return (
        <>
            <SubTabSection menuitem={menu} />
            <section className='catelog-customizer'>
                <div className='product-img'>
                    <img src="https://rb.gy/owvfpe" alt="" />
                </div>
                <div className='product-data'>
                    <h1 className='product-name'>V-Neck T-Shirt</h1>
                    <div className='drag-drop-component'>
                        <div className='additional-input'><input placeholder='Additional input(optional)' type="text" /></div>
                        <p className='product-price'>₹15.00 – ₹20.00</p>
                        <p className='product-description'>This is a variable product.</p>
                        <div className='additional-input'><input placeholder='Additional input(optional)' type="text" /></div>
                        <div className="add-to-cart-section">
                            <select>
                                <option value="1">1</option>
                                <option value="1">3</option>
                                <option value="1">2</option>
                            </select>
                            <button className='add-to-cart-button'>Buy Now</button>
                        </div>
                        <div className='custom-button'>
                            <ButtonCustomizer />
                            <ButtonCustomizer />
                            <ButtonCustomizer />
                            <ButtonCustomizer />
                        </div>
                    </div>
                    <div className='product-sku-category'>
                        <p>SKU: <span>WOO-ALBUM</span></p>
                        <p>Category: <span>Music</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CatalogCustomizer;