import React, {useState, useEffect, useRef} from 'react';
import './FormCustomizer.scss'

const FormCustomizer = (props) => {
    const { values, proSetting, onChange } = props;
    const settingChange = useRef( false );
    const [formFieldsData, setFromFieldsData] = useState(values || []);
    useEffect(() => {
        if ( settingChange.current ) {
            onChange(formFieldsData);
            settingChange.current = false;
        }
    }, [formFieldsData]);
    const getFields = (fieldKey) => {
        return formFieldsData.find(({ key }) => { return key === fieldKey });
    }
    const activeDeactiveFields = (fieldKey, activeStatus) => {
        settingChange.current = true;
        if ( getFields(fieldKey) ) {
            setFromFieldsData((prevData) => {
                return prevData.map((data) => {
                    if (data.key === fieldKey) {
                        return { ... data, active: activeStatus }
                    }
                    return data;
                })
            });
        } else {
            setFromFieldsData((prevData) => {
                return [...prevData, { key: fieldKey, label: '', active: activeStatus }]
            });
        }
    }
    const updateFieldLabel = (fieldKey, labelValue) => {
        settingChange.current = true;
        if ( getFields(fieldKey) ) {
            setFromFieldsData((prevData) => {
                return prevData.map((data) => {
                    if (data.key === fieldKey) {
                        return { ... data, label: labelValue }
                    }
                    return data;
                })
            });
        } else {
            setFromFieldsData((prevData) => {
                return [...prevData, { key: fieldKey, label: labelValue, active: false }]
            });
        }
    }
    const formFields = [
        {
            key: 'name',
            desc: 'Name'
        },
        {
            key: 'email',
            desc: 'Email'
        },
        {
            key: 'phone',
            desc: 'Phone'
        },
        {
            key: 'address',
            desc: 'Address'
        },
        {
            key: 'subject',
            desc: 'Enquiry about'
        },
        {
            key: 'comment',
            desc: 'Enquiry details'
        },
        {
            key: 'fileupload',
            desc: 'File upload',
        },
        {
            key: 'filesize-limit',
            desc: 'File upload size limit (in MB)',
        },
        {
            key: 'captcha',
            desc: 'Captcha',
        }
    ]
    return (
        <>
            <div className='enquery-form-fields'>
                <div className='fields-header'>
                    <h3>Field Name</h3>
                    <h3>Enable / Disable</h3>
                    <h3>Set new field name</h3>
                </div>
                <div className='fields-body'>
                    {
                        formFields.map((fields, index) => {
                            return (
                                <div className='fields-row' key={index}>
                                    <div className='fields-row-name'>{ fields.desc }</div>
                                    <div>
                                        <div className='toggle-checkbox-content'>
                                        <input
                                            id={index}
                                            type='checkbox'
                                            onChange={(e) => {
                                                activeDeactiveFields(fields.key, e.target.checked);
                                            }}
                                            checked={getFields(fields.key) ? getFields(fields.key).active : false }
                                        />
                                        <label htmlFor={index}></label>
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type='text'
                                            onChange={(e) => {
                                                updateFieldLabel(fields.key, e.target.value);
                                            }}
                                            value={getFields(fields.key) ? getFields(fields.key).label : ''}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}
export default FormCustomizer;