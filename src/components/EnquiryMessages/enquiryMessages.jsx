import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EnquiryDetails from './enquiryDetails.jsx';
import "./enquiryMessages.scss";

const EnquiryMessages = (props) => {
    const [enquiryLists, setEnquiryLists] = useState([]);
    const [selectedEnquiry, setSelectedEnquiry] = useState(null);

    const handleEnquiryClick = (enquiry) => {
        setSelectedEnquiry(enquiry);
    };
    // console.log(selectedEnquiry)

    useEffect(() => {
        axios({
            method: "get",
            url: `${appLocalizer.apiUrl}/catalog/v1/get-enquiry-list`,
        }).then((response) => {
            setEnquiryLists(response.data);
        });

        // const fetchData = async () => {
        //     try {
        //         const response = await axios.get(`${appLocalizer.apiUrl}/catalog/v1/get-enquiry-list`);
        //         // console.log(response.data)
        //         setEnquiryLists(response.data);
        //     } catch (error) {
        //         console.error('Error fetching enquiry:', error);
        //     }
        // };
        // fetchData(); 
    }, []);
    return (
        <div className="container">
            <div className="chat-list">
                <div className="header">
                    <div className="header-container">
                        <div className="header-heading">
                            <h1>MultivendorX</h1>
                            <span className="total-message">(50)</span>
                        </div>
                        <div className="search-option">
                            <input
                                className="search-input"
                                type="text"
                                placeholder="Search here..."
                            />
                            <button className="search-btn">
                                <i className="admin-font font-search" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="chat-list-container">
                    <h5 className="recent-message">Recent Message</h5>
                    <div className="chat-container-wrapper">
                        <ul>
                            {enquiryLists.map((enquiry, index) => (
                                <li>
                                    <button className="chat-item active" onClick={() => handleEnquiryClick(enquiry)}>
                                        <div className="chat-item-container">
                                            <div className="chat-img">
                                                <img src="https://shorturl.at/gGILQ" alt="" />
                                                <span className="user-status online" />
                                            </div>
                                            <div className="chat-meta">
                                                <p className="enquiry-id">#{enquiry.id}</p>
                                                <p>
                                                    {enquiry.product.map((product, index) => (
                                                        `${product.name} (SKU - ${product.sku})${index !== enquiry.product.length - 1 ? ', ' : ''}`
                                                    ))}
                                                </p>
                                                <p>{enquiry.name}</p>
                                            </div>
                                            <div className="pending-count">
                                                <span>18</span>
                                            </div>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {selectedEnquiry && <EnquiryDetails enquiry={selectedEnquiry} />
            }
        </div>
    );
}

export default EnquiryMessages;