import React, { useState, useEffect } from 'react';
import './SubTabSection.scss';

const SubTabSection = ({ menuitem }) => {
    const [menuIndex, setMenuIndex] = useState(1);
    const [metaMenu, setMetaMenu] = useState(menuitem[0]);

    const handleMenu = (e, index, meta) => {
        e.preventDefault();
        setMenuIndex(index);
        setMetaMenu(meta)
    }


    return (
        <>
            <div className='tab-section'>
                {menuitem.map((menu, index) => (
                    <button
                        key={index}
                        className={`tab-section-menu ${menu.id === menuIndex ? 'active' : ''}`}
                        onClick={(e) => handleMenu(e, menu.id, menu)}
                    >
                        <span><i className={`admin-font ${menu.icon}`}></i></span>
                        {menu.name}
                    </button>
                ))}
            </div>
            <div className='tab-menu-setting-section'>
                <div className='tab-menu-setting-wrapper'>
                    <p className='tab-heading'>{metaMenu.name}</p>
                    <div>
                        <div className='tab-menu-setting-item'>
                            <p>Setting 1</p>
                            <div className='toggle-checkbox-content'>
                                <input type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubTabSection;
