import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./enquiryMessages.scss";
import EnquiryNavbar from './enquiryNavbar.jsx';
import EmojiPicker from 'emoji-picker-react';

const EnquiryDetails = (props) => {
    const { enquiry, onDelete } = props;
    const [enquiryDetails, setEnquiryDetails] = useState([]);

    const scrollDiv = useRef(null);
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [SelectEmoji, setSelectEmoji] = useState(null);
    const [reactionOpen, setReactionOpen] = useState(null);
    const [chatTextBtnOpen, setChatTextBtnOpen] = useState(null);
    const [file, setFile] = useState(null);
    const [reply, setReply] = useState(null);

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
            setReply(null)
        });
    };

    // console.log(file)
    // console.log(enquiry)
    console.log(enquiryDetails)
    // useEffect(() => {
    //     console.log("hit");
    //     scrollDiv.current.scrollIntoView({ behavior: "smooth", block: "end" })
    //     console.log("hit again");
    // }, [enquiry])

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setMessage(file.name)
    };

    const handleDeleteFile = () => {
        setFile(null);
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     if (!file) {
    //         alert("No file selected!");
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('file', file);

    //     try {
    //         const response = await fetch('/upload', {
    //             method: 'POST',
    //             body: formData
    //         });
    //         const data = await response.json();
    //         console.log('File uploaded successfully:', data);
    //     } catch (error) {
    //         console.error('Error uploading file:', error);
    //     }
    // };

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

    const handleReplyOnThis = (id, msg) => {
        if (msg) {
            setReply(msg);
        }
        console.log(id)
        console.log(msg)
    };

    const [chosenEmoji, setChosenEmoji] = useState(null);

    // const onEmojiClick = (event, emojiObject) => {
    //     setChosenEmoji(emojiObject);
    //     // You can handle the chosen emoji here, e.g., add it to the message input
    // };
    const onReactionClick = (id, emojiObject, event) => {
        axios({
            method: "post",
            url: `${appLocalizer.apiUrl}/catalog/v1/save-reaction`,
            data: {
                msgId: id,
                emoji: emojiObject.emoji,
            },
        }).then((response) => {
            fetchData();
            setSelectEmoji(emojiObject.emoji);
            setReactionOpen(null);
        });
        // console.log(emojiObject.names)
        console.log(emojiObject.emoji)
        console.log(id)

    }

    

    // const buttonRef = useRef();
    // useEffect(() => {
    //     document.body.addEventListener("click", (event) => {
    //     if (!buttonRef?.current.contains(event.target)) {
    //         setChatTextBtnOpen(null);
    //     }
    //     })
    // },[])

    return (
        <>
            <div className="chatting-container">
                <div className="chat-wrapper">
                    <EnquiryNavbar enquiry={enquiry} />
                    <div className="chatting-main-container" ref={scrollDiv} >
                        <ul className="wrapper" >
                            {enquiryDetails.map((enquiryDetail, index) => (
                                <>
                                {enquiryDetail.admin_msg ? (
                                    <li key={index} className="send message-box">
                                        <div className="message-box-wrapper">
                                            <div className="sender-img">
                                                <img src="https://shorturl.at/gGILQ" alt="" />
                                            </div>
                                            <div className="chat-content-wrapper">
                                                <div className="chat-content">
                                                    <div className="content">
                                                        <div dangerouslySetInnerHTML={{ __html: enquiryDetail.msg }} />
                                                        <div className="status">
                                                            <i className="admin-font font-check" />
                                                        </div>
                                                        <div className='reaction-view'>
                                                            😆
                                                        </div>
                                                    </div>
                                                    <div className={`${(reactionOpen === index || chatTextBtnOpen === index) ? 'active' : ''} section-reaction`}>
                                                        {reactionOpen === index &&
                                                            <div className='reaction-wrapper'>
                                                                <EmojiPicker allowExpandReactions={false} reactionsDefaultOpen={true}  onEmojiClick={(event, emojiObject) => onReactionClick(enquiryDetail.id, event, emojiObject)}/>
                                                            </div>
                                                        }
                                                        {chatTextBtnOpen === index &&
                                                            <div className='chat-text-control-wrapper'>
                                                                <button onClick={() => handleReplyOnThis(enquiryDetail.id, enquiryDetail.msg)}>Reply on this</button>
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
                                ) : (
                                    <li key={index} className="receive message-box">
                                        <div className="message-box-wrapper">
                                            <div className="chat-content-wrapper">
                                                <div className="chat-content">
                                                    <div className="content">
                                                        <div dangerouslySetInnerHTML={{ __html: enquiryDetail.msg }} />
                                                        <div className="status">
                                                            <i className="admin-font font-check" />
                                                        </div>
                                                        <div className='reaction-view'>
                                                            {enquiryDetail.reaction !== null ? enquiryDetail.reaction : '😆'}
                                                        </div>

                                                    </div>
                                                    <div className={`${(reactionOpen === index || chatTextBtnOpen === index) ? 'active' : ''} section-reaction`}>
                                                        {reactionOpen === index &&
                                                            <div className='reaction-wrapper'>
                                                                <EmojiPicker allowExpandReactions={false} reactionsDefaultOpen={true} onEmojiClick={(event, emojiObject) => onReactionClick(enquiryDetail.id, event, emojiObject)} />
                                                            </div>
                                                        }
                                                        {chatTextBtnOpen === index &&
                                                            <div className='chat-text-control-wrapper'>
                                                                <button onClick={() => handleReplyOnThis(enquiryDetail.id, enquiryDetail.msg)}>Reply on this</button>
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
                                )}
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
                                    {/* <i className="admin-font font-dots-three-horizontal" /> */}
                                    <label htmlFor="file">upload</label>
                                    <input type="file" name="" id="file" onChange={handleFileChange} />
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
                        { reply && (
                            <div dangerouslySetInnerHTML={{ __html: reply }}
                            /> 
                        )}
                        <div className="typing-section">
                            <textarea name="reply_msg" id="reply_msg" value={message}
                                onChange={(e) => setMessage(e.target.value)} />
                            {file && (
                                <div>
                                    <p>File selected: {file.name}</p>
                                    <button onClick={handleDeleteFile}>Delete</button>
                                </div>
                            )}
                        </div>
                        <div className="send">
                            <button className="message-send-btn" id="send_msg" onClick={handleSendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default EnquiryDetails;