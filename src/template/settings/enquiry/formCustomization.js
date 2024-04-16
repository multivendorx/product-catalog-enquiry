import { __ } from '@wordpress/i18n';

export default {
    id: 'enquiry_form_customization',
    priority: 55,
    name: __("Form Customization", "woocommerce-catalog-enquiry"),
    desc: __("Form Customization", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
    ]
};
