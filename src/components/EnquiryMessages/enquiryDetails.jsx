import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./enquiryMessages.scss";

const EnquiryDetails = (props) => {
    const {enquiry, onDelete} = props;
    // console.log(enquiry)
    const [enquiryDetails, setEnquiryDetails] = useState(null);

    useEffect(() => {
        if (enquiry) {
            fetchData(); 
        }
    }, [enquiry]);

    const fetchData = async () => {
        try {
            axios({
                method: "post",
                url: `${appLocalizer.apiUrl}/catalog/v1/get-messages-list`,
                data: { enquiry : enquiry },
            } ).then( ( response ) => {
                setEnquiryDetails(response.data);
            } );
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    console.log(enquiryDetails)

    return(
        <div className="chatting-container">
                <div className="chat-wrapper">
                <div className="header">
                    <div className="chat-meta">
                    <div className="back-btn">
                        <i className="fa-solid fa-arrow-left" />
                    </div>
                    <div className="chat-meta-data">
                        <div className="chat-img">
                        <img src="https://shorturl.at/gGILQ" alt="" />
                        <span className="user-status online" />
                        </div>
                        <div className="chat-meta">
                        <p className="enquery-id">#{enquiry.id}</p>
                        <p>{enquiry.name}</p>
                        </div>
                    </div>
                    </div>
                    <div className="chat-more-option">
                    <ul>
                        <li className="chat-more-option-item">
                        <button className="chat-more-option-button">
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                        </li>
                        <li className="chat-more-option-item">
                        <button className="chat-more-option-button">
                            <i className="fa-solid fa-circle-info" />
                        </button>
                        </li>
                        <li className="chat-more-option-item">
                        <button className="chat-more-option-button">
                            <i className="fa-solid fa-cart-shopping" />
                        </button>
                        </li>
                        <li className="chat-more-option-item">
                        <button className="chat-more-option-button">
                            <i className="fa-solid fa-ellipsis-vertical" />
                        </button>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="chatting-main-container">
                    <ul className="wrapper">
                    <li className="send message-box">
                        <div className="message-box-wrapper">
                        <div className="sender-img">
                            <img src="https://shorturl.at/gGILQ" alt="" />
                        </div>
                        <div className="chat-content-wrapper">
                            <div className="chat-content">
                            <div className="content">
                                Hello ! this is a text
                                <div className="status">
                                <i className="fa-solid fa-check" />
                                </div>
                            </div>
                            <div className="section-reaction">
                                <button>
                                <i className="fa-regular fa-face-smile" />
                                </button>
                                <button>
                                <i className="fa-solid fa-ellipsis-vertical" />
                                </button>
                            </div>
                            </div>
                            <div className="chat-time">8:34 AM</div>
                        </div>
                        </div>
                    </li>
                    <li className="receive message-box">
                        <div className="message-box-wrapper">
                        <div className="chat-content-wrapper">
                            <div className="chat-content">
                            <div className="content">
                                Hello ! this is a text
                                <div className="status">
                                <i className="fa-solid fa-check" />
                                </div>
                            </div>
                            <div className="section-reaction">
                                <button>
                                <i className="fa-regular fa-face-smile" />
                                </button>
                                <button>
                                <i className="fa-solid fa-ellipsis-vertical" />
                                </button>
                            </div>
                            </div>
                            <div className="chat-time">8:34 AM</div>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="chat-controls">
                <div className="wrapper">
                    <div className="attachment">
                    <div className="attachment-wrapper">
                        <button>
                        <i className="fa-solid fa-ellipsis" />
                        </button>
                        <button>
                        <i className="fa-regular fa-face-smile" />
                        </button>
                    </div>
                    </div>
                    <div className="typing-section">
                    <textarea name="" id="" defaultValue={""} />
                    </div>
                    <div className="send">
                    <button className="message-send-btn">Send</button>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default EnquiryDetails;