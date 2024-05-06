import { __ } from '@wordpress/i18n';

export default {
    id: 'enquiry_out_of_stock',
    priority: 45,
    name: __("Out-of-Stock Products", "woocommerce-catalog-enquiry"),
    desc: __("Out-of-Stock Products", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        {
            key: 'is_enable_out_of_stock',
            type: 'checkbox',
            label: __( "Enquiry Button for Out-of-Stock Products", 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "is_enable_out_of_stock",
                    label: __("Enable this to add the Enquiry button for the products which is out of stock. Use Exclusion settings to exclude specific product or category from enquiry.", 'woocommerce-catalog-enquiry'),
                    value: "is_enable_out_of_stock"
                }
            ]
        },
        {
            key: 'notify_me_button',
            type: 'checkbox',
            dependent: {
                key: "is_enable_out_of_stock",
                set: true
            },
            label: __("Notify Me Button", "woocommerce-catalog-enquiry"),
            desc: __("", "woocommerce-catalog-enquiry"),
            options: [
                {
                    key: "notify_me_button",
                    label: __("", 'woocommerce-catalog-enquiry'),
                    value: "notify_me_button"
                }
            ]
        }
    ]
};
