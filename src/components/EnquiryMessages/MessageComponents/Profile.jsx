import React,{ useState } from 'react'
import Products from './Products';
import EnquiryControlsBtn from './EnquiryControlsBtn';

const Profile = ({ showProfile, handleProfile, enquiry }) => {
  // console.log(enquiry)
  const [ showControlsBtn, setShowControlsBtn ] = useState(false);

  const handleShowControlsBtn = ()=>{
    setShowControlsBtn(!showControlsBtn);
  };
  return (
    <>
        <div className="profile-container">
          <div className="profile-pic-meta">
            <img src="https://shorturl.at/gGILQ" alt="" />
            <div className='profile-pic-controls'>
              <button onClick={handleProfile} className="controls-button">
                  <i className="admin-font font-close" />
              </button>
              <button onClick={handleShowControlsBtn} className="controls-button">
                  <i className="admin-font font-more-vertical" />
              </button>
              { showControlsBtn && <EnquiryControlsBtn enquiry={enquiry} />}
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
                  return <Products productKey={index} productItems={items} />
                })}
              </div>
          </div>
        </div>
    </>
  )
}

export default Profile;