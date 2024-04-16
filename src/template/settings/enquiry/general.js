import { __ } from '@wordpress/i18n';

export default {
    id: 'enquiry_general',
    priority: 35,
    name: __("General", "woocommerce-catalog-enquiry"),
    desc: __("General", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        {
            key: 'display_enquiry_button_user_type',
            type: 'select',
            label: __("Display Enquiry Button for", "woocommerce-catalog-enquiry"),
            desc: __("Select the type users where this enquiry button is applicable", "woocommerce-catalog-enquiry"),
            options: [
                {
                    key: "logged_out",
                    label: __('Only Logged out Users', 'woocommerce-catalog-enquiry'),
                    value: "logged_out"
                },
                {
                    key: "logged_in",
                    label: __('Only Logged in Users', 'woocommerce-catalog-enquiry'),
                    value: "logged_in"
                },
                {
                    key: "all_users",
                    label: __('All Users', 'woocommerce-catalog-enquiry'),
                    value: "all_users"
                }
            ]
        },
        {
            key: 'is_page_redirect',
            type: 'checkbox',
            label: __( "Redirect after Enquiry form Submission", 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "is_page_redirect",
                    label: __('Enable this to redirect user to another page after successful enquiry submission.', 'woocommerce-catalog-enquiry'),
                    value: "is_page_redirect"
                }
            ]
        },
        {
            key: 'redirect_page_id',
            depend_checkbox:  'is_page_redirect',
            type: 'select',
            label:  __( 'Set Redirect Page', 'woocommerce-catalog-enquiry' ),
            desc: __( 'Select page where user will be redirected after successful enquiry.', 'woocommerce-catalog-enquiry' ),
            options: [appLocalizer.pages_array],
        },
        {
            key: 'is_disable_popup',
            type: 'checkbox',
            label: __( "Display Enquiry form via popup", 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "is_disable_popup",
                    label: __('By default the form will be displayed via popup. Enable this, if you want to display the form below the product description.', 'woocommerce-catalog-enquiry'),
                    value: "is_disable_popup"
                }
            ]
        },
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
            ]
        }
    ]
};
