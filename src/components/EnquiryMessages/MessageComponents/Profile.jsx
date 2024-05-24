import React from 'react'
import Products from './Products';

const Profile = ({ showProfile, handleProfile }) => {
  const product = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <>
        <div className="profile-container">
          <div className="profile-pic-meta">
            <img src="https://shorturl.at/gGILQ" alt="" />
            <div className='profile-pic-controls'>
              <button onClick={handleProfile} className="controls-button">
                  <i className="admin-font font-close" />
              </button>
              <button className="controls-button">
                  <i className="admin-font font-more-vertical" />
              </button>
            </div>
            <div className="profile-meta-details">
              <p className='enquiry-no'>#12345</p>
              <p className='enquiry-status'><span className='status-dot'></span><span className='status'>Online</span></p>
            </div>
          </div>

          <hr />

          <div className='products-list-section'>
            <div className='title'>All products</div>
              <div className='products-container'>
                {product.map((items, index)=>{
                  return <Products key={index} />
                })}
              </div>
          </div>
        </div>
    </>
  )
}

export default Profile;