import { __ } from '@wordpress/i18n';

export default {
    id: 'enquiry_button_management',
    priority: 50,
    name: __("Button Management", "woocommerce-catalog-enquiry"),
    desc: __("Button Management", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        // {
        //     type: "button_customizer",
        //     label: __("Custom Button Element", "woocommerce-catalog-enquiry"),
        // },
        // {
        //     key: "button_text",
        //     type: "text",
        //     desc: __("", "woocommerce-catalog-enquiry"),
        //     label: __("Enquiry Button Text", "woocommerce-catalog-enquiry"),
        // },
        // {
        //     key: "enquiry_cart_button_text",
        //     type: "text",
        //     desc: __("", "woocommerce-catalog-enquiry"),
        //     label: __("Multiple Enquiry Cart Button Text", "woocommerce-catalog-enquiry"),
        // },
        // {
        //     key: "view_enquiry_cart_button_text",
        //     type: "text",
        //     desc: __("", "woocommerce-catalog-enquiry"),
        //     label: __("Multiple View Enquiry Cart Message Text", "woocommerce-catalog-enquiry"),
        // },
        {
            key: "custom_css_product_page",
            type: "textarea",
            desc: __("Put your custom css here, to customize the enquiry form.", "woocommerce-catalog-enquiry"),
            label: __("Addional CSS", "woocommerce-catalog-enquiry"),
        },
    ]
};
