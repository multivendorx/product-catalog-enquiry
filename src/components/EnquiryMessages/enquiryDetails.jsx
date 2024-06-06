import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Profile from './MessageComponents/Profile';
import "./enquiryMessages.scss";
import CartComponents from './MessageComponents/CartComponents';
import EnquiryControlsBtn from './MessageComponents/EnquiryControlsBtn';
import EmojiPicker from 'emoji-picker-react';

const EnquiryDetails = (props) => {
    const { enquiry, onDelete } = props;
    const [enquiryDetails, setEnquiryDetails] = useState([]);
    const [showProfile, setShowProfile] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showControlsBtn, setShowControlsBtn] = useState(false);
    const scrollDiv = useRef(null);
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [reactionOpen, setReactionOpen] = useState(null);
    const [chatTextBtnOpen, setChatTextBtnOpen] = useState(null);

    const handleShowControlsBtn = () => {
        setShowCart(false);
        setShowProfile(false);
        setShowControlsBtn(!showControlsBtn);
    };

    const handleCart = () => {
        setShowControlsBtn(false);
        setShowProfile(false);
        setShowCart(!showCart);
    };

    const handleProfile = () => {
        setShowCart(false);
        setShowControlsBtn(false);
        setShowProfile(!showProfile);
    };

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
                data: { enquiry: enquiry },
            }).then((response) => {
                setEnquiryDetails(response.data);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSendMessage = () => {
        axios({
            method: "post",
            url: `${appLocalizer.apiUrl}/catalog/v1/send-messages`,
            data: {
                msgReply: message,
                enquiry: enquiry,
            },
        }).then((response) => {
            setMessage('');
            fetchData();
        });
    };

    // console.log(enquiry)
    // console.log(enquiryDetails)
    // useEffect(() => {
    //     console.log("hit");
    //     scrollDiv.current.scrollIntoView({ behavior: "smooth", block: "end" })
    //     console.log("hit again");
    // }, [enquiry])

    // Function to handle emoji click
    const onEmojiClick = (emojiData, event) => {
        if (emojiData && emojiData.emoji) {
            setMessage((prevMessage) => prevMessage + emojiData.emoji);
        } else {
            console.error('No emoji object received.');
        }
    };

    // Function to toggle emoji picker visibility
    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleReactionOpen = (index) => {
        if (reactionOpen === index) {
            setReactionOpen(null);
        }
        else {
            setReactionOpen(index);
        }
        setChatTextBtnOpen(null);
    };
    const handleChatTextBtnOpen = (index) => {
        if (chatTextBtnOpen === index) {
            setChatTextBtnOpen(null);
        }
        else {
            setChatTextBtnOpen(index);
        }
        setReactionOpen(null);
    };


    return (
        <>
            <div className="chatting-container">
                <div className="chat-wrapper">
                    <div className="header">
                        <div className="chat-meta">
                            <div className="back-btn">
                                <i className="admin-font font-arrow-left" />
                            </div>
                            <button onClick={handleProfile} className="chat-meta-data">
                                <div className="chat-img">
                                    <img src="https://shorturl.at/gGILQ" alt="" />
                                    <span className="user-status online" />
                                </div>
                                <div className="chat-meta">
                                    <p className="enquery-id">#{enquiry.id}</p>
                                    <p>{enquiry.name}</p>
                                </div>
                            </button>
                        </div>
                        <div className="chat-more-option">
                            <ul>
                                <li className="chat-more-option-item">
                                    <div class="input-container">
                                        <input placeholder="Search..." class="input" name="text" type="text" />
                                        <i className="admin-font icon font-search" />
                                    </div>
                                </li>
                                <li className="chat-more-option-item">
                                    <button onClick={handleProfile} className="chat-more-option-button">
                                        <i className="admin-font font-info" />
                                    </button>
                                </li>
                                <li className="chat-more-option-item">
                                    <button onClick={handleCart} className="chat-more-option-button">
                                        <i className="admin-font font-cart" />
                                    </button>
                                    {showCart && <CartComponents showCart={showCart} handleCart={handleCart} enquiry={enquiry} />}
                                </li>
                                <li className="chat-more-option-item">
                                    <button onClick={handleShowControlsBtn} className="chat-more-option-button">
                                        <i className="admin-font font-more-vertical" />
                                    </button>
                                    {showControlsBtn && <EnquiryControlsBtn enquiry={enquiry} />}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="chatting-main-container" ref={scrollDiv} >
                        <ul className="wrapper" >
                            {enquiryDetails.map((enquiryDetail, index) => (
                                <>
                                    {enquiryDetail.to_user == 1 &&
                                        <li key={index} className="send message-box">
                                            <div className="message-box-wrapper">
                                                <div className="sender-img">
                                                    <img src="https://shorturl.at/gGILQ" alt="" />
                                                </div>
                                                <div className="chat-content-wrapper">
                                                    <div className="chat-content">
                                                        <div className="content">
                                                            <>
                                                                <div dangerouslySetInnerHTML={{ __html: enquiryDetail.msg }} />
                                                                <div className="status">
                                                                    <i className="admin-font font-check" />
                                                                </div>
                                                                <div className='reaction-view'>
                                                                    😆
                                                                </div>
                                                            </>
                                                        </div>
                                                        <div className={`${(reactionOpen === index || chatTextBtnOpen === index) ? 'active' : ''} section-reaction`}>
                                                            {reactionOpen === index &&
                                                                <div className='reaction-wrapper'>
                                                                    <EmojiPicker allowExpandReactions={false} reactionsDefaultOpen={true} />
                                                                </div>
                                                            }
                                                            {chatTextBtnOpen === index &&
                                                                <div className='chat-text-control-wrapper'>
                                                                    <button>Reply on this</button>
                                                                    <button>Delete this message</button>
                                                                </div>
                                                            }
                                                            <button onClick={() => handleReactionOpen(index)}>
                                                                <i className="admin-font font-smile-o" />
                                                            </button>
                                                            <button onClick={() => handleChatTextBtnOpen(index)}>
                                                                <i className="admin-font font-more-vertical" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="chat-time">{enquiryDetail.date}</div>
                                                </div>
                                            </div>
                                        </li>
                                    }
                                    {enquiryDetail.from_user == 1 &&
                                        <li key={index} className="receive message-box">
                                            <div className="message-box-wrapper">
                                                <div className="chat-content-wrapper">
                                                    <div className="chat-content">
                                                        <div className="content">
                                                            <>
                                                                <div dangerouslySetInnerHTML={{ __html: enquiryDetail.msg }} />
                                                                <div className="status">
                                                                    <i className="admin-font font-check" />
                                                                </div>
                                                                <div className='reaction-view'>
                                                                    😆
                                                                </div>
                                                            </>
                                                        </div>
                                                        <div className={`${(reactionOpen === index || chatTextBtnOpen === index) ? 'active' : ''} section-reaction`}>
                                                            {reactionOpen === index &&
                                                                <div className='reaction-wrapper'>
                                                                    <EmojiPicker allowExpandReactions={false} reactionsDefaultOpen={true} />
                                                                </div>
                                                            }
                                                            {chatTextBtnOpen === index &&
                                                                <div className='chat-text-control-wrapper'>
                                                                    <button>Reply on this</button>
                                                                    <button>Delete this message</button>
                                                                </div>
                                                            }
                                                            <button onClick={() => handleReactionOpen(index)}>
                                                                <i className="admin-font font-smile-o" />
                                                            </button>
                                                            <button onClick={() => handleChatTextBtnOpen(index)}>
                                                                <i className="admin-font font-more-vertical" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="chat-time">{enquiryDetail.date}</div>
                                                </div>
                                            </div>
                                        </li>
                                    }
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="chat-controls">
                    <div className="wrapper">
                        <div className="attachment">
                            <div className="attachment-wrapper">
                                <button className='option-btn'>
                                    <i className="admin-font font-dots-three-horizontal" />
                                </button>
                                <button onClick={toggleEmojiPicker} className='option-btn'>
                                    <i className="admin-font font-smile-o" />
                                </button>
                                {showEmojiPicker && (
                                    <div className='emoji-picker-container'>
                                        <EmojiPicker
                                            onEmojiClick={onEmojiClick}
                                            autoFocusSearch={false}
                                            Theme={'auto'}
                                            skinTonesDisabled={true}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="typing-section">
                            <textarea name="reply_msg" id="reply_msg" value={message}
                                onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <div className="send">
                            <button className="message-send-btn" id="send_msg" onClick={handleSendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
            {showProfile && <Profile showProfile={showProfile} handleProfile={handleProfile} enquiry={enquiry} />}
        </>
    );
}

export default EnquiryDetails;