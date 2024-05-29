import React, { useState, useEffect, useRef } from 'react';
import './SubTabSection.scss';
import { Link } from 'react-router-dom';

const SubTabSection = ({ menuitem }) => {
    const [menuIndex, setMenuIndex] = useState(1);
    const [metaMenu, setMetaMenu] = useState(menuitem[0]);
    const [menuOpen, setMenuOpen] = useState(false);
    const buttonRef = useRef();


    const handleMenu = (e, index, meta) => {
        e.preventDefault();
        setMenuIndex(index);
        setMetaMenu(meta)
    }

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    // useEffect(() => {
    //     if (menuOpen) {
    //     document.body.addEventListener("click", (event) => {
    //         console.log("body")
    //         if (!buttonRef?.current?.contains(event.target)) {
    //             console.log("hello")
    //             setMenuOpen(false);
    //         }
    //     })
    //     }
    // }, [])


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
            <div ref={buttonRef} className={`tab-menu-setting-section ${menuOpen ? 'active' : ''}`} onClick={handleMenuOpen}>
                {
                    menuOpen ?
                        <div className='tab-menu-setting-wrapper'>
                            <p className='tab-heading'>{metaMenu.name}</p>
                            <div className='setting-wrapper-section'>
                                {metaMenu.setting?.map((setting, index) => {
                                    return (
                                        <div className='tab-menu-setting-item'>
                                            <p className='setting-title'>{setting.name} <i title={setting.description} className='admin-font font-info'></i></p>
                                            <div className='toggle-checkbox-content'>
                                                <input type="checkbox" id={setting.id} />
                                                <label htmlFor={setting.id}></label>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <Link to={''} className='advanced-setting-btn'>Advanced settings</Link>
                        </div>
                        :
                        <i className={`tab-slide-btn admin-font ${metaMenu.icon}`}></i>
                }
            </div>
        </>
    );
}

export default SubTabSection;
