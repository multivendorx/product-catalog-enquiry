import { __ } from '@wordpress/i18n';

export default {
    id: 'quote_general',
    priority: 45,
    name: __("General", "woocommerce-catalog-enquiry"),
    desc: __("General", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        // {
        //     key: 'display_quote_button_user_type',
        //     type: 'radio',
        //     label: __("Show 'Add to quote' button for", "woocommerce-catalog-enquiry"),
        //     desc: __("Select the type users where this quote button is applicable", "woocommerce-catalog-enquiry"),
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
        //     ],
        //     proSetting: true,
        // },
        {
            key: 'is_expiry_time_for_quote',
            type: 'checkbox',
            label: __( "Set an expiry time for quotes", 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "is_expiry_time_for_quote",
                    label: __('', 'woocommerce-catalog-enquiry'),
                    value: "is_expiry_time_for_quote"
                }
            ],
            proSetting: true,
        },
        {
            key: 'set_expiry_time',
            type: 'number',
            label:  __( 'Set Expiry Time', 'woocommerce-catalog-enquiry' ),
            desc: __( '', 'woocommerce-catalog-enquiry' ),
            dependent: {
                key: "is_expiry_time_for_quote",
                set: true
            },
            proSetting: true,
        }
    ]
};
