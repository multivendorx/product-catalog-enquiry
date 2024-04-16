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
            type: 'button',
            depend_checkbox:  'is_enable_out_of_stock',
            label: __("Notify Me Button -> Using WooCommerce Stock Alert", "woocommerce-catalog-enquiry"),
            desc: __("", "woocommerce-catalog-enquiry"),
        },
        {
            key: 'display_description_for_out_of_stock',
            depend_checkbox:  'is_enable_out_of_stock',
            type: 'select',
            label:  __( 'Where the description will be displayed', 'woocommerce-catalog-enquiry' ),
            desc:  __( '', 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "above",
                    label: __('Display this above Product Description', 'woocommerce-catalog-enquiry'),
                    value: "above"
                },
                {
                    key: "below",
                    label: __('Below product Description', 'woocommerce-catalog-enquiry'),
                    value: "below"
                },
                {
                    key: "replace",
                    label: __('Replace', 'woocommerce-catalog-enquiry'),
                    value: "replace"
                }
            ]
        },
        {
            key: "description_box_for_out_of_stock",
            depend_checkbox:  'is_enable_out_of_stock',
            type: "text",
            desc: __("", "woocommerce-catalog-enquiry"),
            label: __("Description Box", "woocommerce-catalog-enquiry"),
        },
        {
            key: 'display_position_for_out_of_stock',
            depend_checkbox:  'is_enable_out_of_stock',
            type: 'select',
            label:  __( 'Button Display Position', 'woocommerce-catalog-enquiry' ),
            desc:  __( '', 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "below_desc",
                    label: __('Below Description', 'woocommerce-catalog-enquiry'),
                    value: "below_desc"
                },
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
            key: "button_design_for_out_of_stock",
            depend_checkbox:  'is_enable_out_of_stock',
            type: "button_customizer",
            desc: __("", "woocommerce-catalog-enquiry"),
            label: __("Button Design", "woocommerce-catalog-enquiry"),
        }
    ]
};
