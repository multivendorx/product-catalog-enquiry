import React from 'react'
import Products from './Products';

const Profile = ({ showProfile, handleProfile, enquiry }) => {
  // console.log(enquiry)
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
              <p className='enquiry-no'>#{enquiry.id}</p>
              <p className='enquiry-status'>{enquiry.name}</p>
            </div>
          </div>

          <hr />

          <div className='products-list-section'>
            <div className='title'>All products</div>
              <div className='products-container'>
                {enquiry.product.map((items, index)=>{
                  return <Products key={index} items={items} />
                })}
              </div>
          </div>
        </div>
    </>
  )
}

export default Profile;