import React from 'react';
import EnquiryMessages from '../enquiryMessages';

const EnquiryControlsBtn = ( { enquiry } ) => {
  // console.log(enquiry)
  const handleDeleteEnq = (id) => {
      console.log(id)
      axios({
        method: "post",
        url: `${appLocalizer.apiUrl}/catalog/v1/delete-enquiry`,
        data: {
            id: id,
        },
      }).then((response) => {
        <EnquiryMessages />
      });
  }

  return (
    <>
        <section className='enquiry-control-btn'>
            <button className='control-btn' onClick={(e) => { handleDeleteEnq(enquiry.id) }}>Delete Enquiry</button>
        </section>
    </>
  )
}

export default EnquiryControlsBtn;