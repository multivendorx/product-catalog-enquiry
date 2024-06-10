import { __ } from '@wordpress/i18n';

export default {
    id: 'enquiry_general',
    priority: 35,
    name: __("General", "woocommerce-catalog-enquiry"),
    desc: __("General", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        // {
        //     key: 'display_enquiry_button_user_type',
        //     type: 'radio',
        //     label: __("Display enquiry button for", "woocommerce-catalog-enquiry"),
        //     desc: __("Select the type users where this enquiry button is applicable", "woocommerce-catalog-enquiry"),
        //     options: [
        //         {
        //             key: "logged_out",
        //             label: __('Only Logged out Users', 'woocommerce-catalog-enquiry'),
        //             value: "logged_out"
        //         },
        //         {
        //             key: "logged_in",
        //             label: __('Only Logged in Users', 'woocommerce-catalog-enquiry'),
        //             value: "logged_in"
        //         },
        //         {
        //             key: "all_users",
        //             label: __('All Users', 'woocommerce-catalog-enquiry'),
        //             value: "all_users"
        //         }
        //     ]
        // },
        
        // {
        //     key: 'redirect_page_id',
        //     dependent: {
        //         key: "is_page_redirect",
        //         set: true
        //     },
        //     type: 'select',
        //     label:  __( 'Set Redirect Page', 'woocommerce-catalog-enquiry' ),
        //     desc: __( 'Select page where user will be redirected after successful enquiry.', 'woocommerce-catalog-enquiry' ),
        //     options: appLocalizer.pages_array,
        // },

        // {
        //     key: 'is_disable_popup',
        //     type: 'checkbox',
        //     label: __( "Display Enquiry form via popup", 'woocommerce-catalog-enquiry' ),
        //     options: [
        //         {
        //             key: "is_disable_popup",
        //             label: __('By default the form will be displayed via popup. Enable this, if you want to display the form below the product description.', 'woocommerce-catalog-enquiry'),
        //             value: "is_disable_popup"
        //         }
        //     ]
        // },
        {
            key: 'is_enable_add_to_cart',
            type: 'checkbox',
            label:  __( 'Enable Add-to-Cart', 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "is_enable_add_to_cart",
                    label: __('Enable this if you want add to cart button along with enquiry button throughout the shop.', 'woocommerce-catalog-enquiry'),
                    value: "is_enable_add_to_cart"
                }
            ],
            proSetting: true,
        },
        // {
        //     key: 'is_enable_multiple_product_enquiry',
        //     type: 'checkbox',
        //     label: __( "Enable Multiple Enquiry Cart", 'woocommerce-catalog-enquiry' ),
        //     options: [
        //         {
        //             key: "is_enable_multiple_product_enquiry",
        //             label: __(`Enable this checkbox to allow multiple product enquiry via enquiry cart. Also multiple enquiry product displays on the cart ${ appLocalizer.widget_url }`, 'woocommerce-catalog-enquiry'),
        //             value: "is_enable_multiple_product_enquiry"
        //         }
        //     ],
        //     proSetting: true,
        // },
        
        // {
        //     key: 'redirect_page',
        //     type: 'select',
        //     label:  __( 'Set Redirect Page', 'woocommerce-catalog-enquiry' ),
        //     desc: __( 'Select page where user will be redirected.', 'woocommerce-catalog-enquiry' ),
        //     options: appLocalizer.pages_array,
        //     proSetting: true,
        // },
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
        },
    ]
};
