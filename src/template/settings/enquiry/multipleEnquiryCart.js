import { __ } from '@wordpress/i18n';

export default {
    id: 'enquiry_multiple_cart',
    priority: 40,
    name: __("Multiple Enquiry Cart", "woocommerce-catalog-enquiry"),
    desc: __("Multiple Enquiry Cart", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        {
            key: 'is_enable_multiple_product_enquiry',
            type: 'checkbox',
            label: __( "Enable Multiple Enquiry Cart", 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "is_enable_multiple_product_enquiry",
                    label: __(`Enable this checkbox to allow multiple product enquiry via enquiry cart. Also multiple enquiry product displays on the cart ${ appLocalizer.widget_url }`, 'woocommerce-catalog-enquiry'),
                    value: "is_enable_multiple_product_enquiry"
                }
            ]
        },
        {
            key: "button_text",
            type: "text",
            desc: __("", "woocommerce-catalog-enquiry"),
            label: __("Multiple Enquiry Button Text", "woocommerce-catalog-enquiry"),
        },
        {
            type: "button_customizer",
            label: __("Custom Button Element", "woocommerce-catalog-enquiry"),
        },
        {
            key: 'set_enquiry_cart_page',
            type: 'select',
            label: __("Set Enquiry Cart Page", "woocommerce-catalog-enquiry"),
            desc: __("Select the enquiry cart page", "woocommerce-catalog-enquiry"),
            options: []
        },
        {
            key: 'return_shop_button',
            type: 'checkbox',
            label: __( "Display 'Return to Shop' Button", 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "return_shop_button",
                    label: __('', 'woocommerce-catalog-enquiry'),
                    value: "return_shop_button"
                }
            ]
        },
        {
            key: 'redirect_page',
            type: 'select',
            label:  __( 'Set Redirect Page', 'woocommerce-catalog-enquiry' ),
            desc: __( 'Select page where user will be redirected.', 'woocommerce-catalog-enquiry' ),
            options: appLocalizer.pages_array,
        },
        {
            key: 'return_shop_label',
            type: 'text',
            label:  __( '"Return to Shop" label', 'woocommerce-catalog-enquiry' ),
        }
    ]
};
