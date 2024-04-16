import { __ } from '@wordpress/i18n';

export default {
    id: 'enquiry_button_management',
    priority: 50,
    name: __("Button Management", "woocommerce-catalog-enquiry"),
    desc: __("Button Management", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        {
            key: 'product_enquiry_position',
            type: 'select',
            label:  __( 'Enquiry Button Postion', 'woocommerce-catalog-enquiry' ),
            desc:  __( '', 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "above_add_to_cart",
                    label: __('Above Add-To-Cart', 'woocommerce-catalog-enquiry'),
                    value: "above_add_to_cart"
                },
                {
                    key: "below_add_to_cart",
                    label: __('Below Add-To-Cart', 'woocommerce-catalog-enquiry'),
                    value: "below_add_to_cart"
                },
                {
                    key: "place_add_to_cart",
                    label: __('At The Place Of Add-To-Cart', 'woocommerce-catalog-enquiry'),
                    value: "place_add_to_cart"
                }
            ]
        },
        {
            key: "custom_button_element",
            type: "button_customizer",
            desc: __("", "woocommerce-catalog-enquiry"),
            label: __("Custom Button Element", "woocommerce-catalog-enquiry"),
        },
        {
            key: "enquiry_button_label",
            type: "text",
            desc: __("", "woocommerce-catalog-enquiry"),
            label: __("Enquiry Button", "woocommerce-catalog-enquiry"),
        },
        {
            key: "enquiry_cart_button_text",
            type: "text",
            desc: __("", "woocommerce-catalog-enquiry"),
            label: __("Multiple Enquiry Cart Button Text", "woocommerce-catalog-enquiry"),
        },
        {
            key: "view_enquiry_cart_button_text",
            type: "text",
            desc: __("", "woocommerce-catalog-enquiry"),
            label: __("Multiple View Enquiry Cart Message Text", "woocommerce-catalog-enquiry"),
        },
        {
            key: "custom_css_product_page",
            type: "textarea",
            desc: __("Put your custom css here, to customize the enquiry form.", "woocommerce-catalog-enquiry"),
            label: __("Addional CSS", "woocommerce-catalog-enquiry"),
        },
    ]
};
