import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./enquiryMessages.scss";

const EnquiryDetails = (props) => {
    const {enquiry, onDelete} = props;
    const [enquiryDetails, setEnquiryDetails] = useState([]);
    const replyMsg = useRef(null);

    useEffect(() => {
        if (enquiry) {
            fetchData(); 
        }
    }, [enquiry]);

    const fetchData = () => {
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

    const handleSendMessage = () => {
        var msgReply = replyMsg.current.value;
        console.log(msgReply)
        axios({
            method: "post",
            url: `${appLocalizer.apiUrl}/catalog/v1/send-messages`,
            data: { 
                msgReply : msgReply,
                enquiry : enquiry,
             },
        } ).then( ( response ) => {
            fetchData();
        } );
    };

    console.log(enquiry)
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
                    {enquiryDetails.map((enquiryDetail, index) => (
                        <ul className="wrapper" key={index}>
                            <li className="send message-box">
                                <div className="message-box-wrapper">
                                    <div className="sender-img">
                                        <img src="https://shorturl.at/gGILQ" alt="" />
                                    </div>
                                        {enquiryDetail.to_user == 1 &&
                                        <>
                                        <div className="chat-content-wrapper">
                                            <div className="chat-content">
                                                <div className="content">
                                                        <>
                                                            <div dangerouslySetInnerHTML={{ __html: enquiryDetail.msg }} />
                                                            <div className="status">
                                                                <i className="fa-solid fa-check" />
                                                            </div>
                                                        </>
                                                    
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
                                            <div className="chat-time">{enquiryDetail.date}</div>
                                        </div>
                                        </>
                                    }
                                </div>
                            </li>
                            <li className="receive message-box">
                                <div className="message-box-wrapper">
                                    {enquiryDetail.from_user == 1 &&
                                    <>
                                    <div className="chat-content-wrapper">
                                        <div className="chat-content">
                                            <div className="content">
                                                <>
                                                    <div dangerouslySetInnerHTML={{ __html: enquiryDetail.msg }} />
                                                    <div className="status">
                                                        <i className="fa-solid fa-check" />
                                                    </div>
                                                </>
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
                                        <div className="chat-time">{enquiryDetail.date}</div>
                                    </div>
                                    </>
                                    }
                                </div>
                            </li>
                        </ul>
                    ))}
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
                        <textarea name="reply_msg" id="reply_msg" ref={replyMsg} defaultValue={""} />
                    </div>
                    <div className="send">
                        <button className="message-send-btn" id="send_msg" onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EnquiryDetails;