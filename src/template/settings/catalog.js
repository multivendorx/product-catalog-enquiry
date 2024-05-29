import { __ } from '@wordpress/i18n';

export default {
    id: 'catalog',
    priority: 20,
    name: __("Catalog", "woocommerce-catalog-enquiry"),
    desc: __("Modify settings to control user access, catalog design.", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        // {
        //     key: 'for_user_type',
        //     type: 'radio',
        //     label: __("Catalog mode user access", "woocommerce-catalog-enquiry"),
        //     desc: __("Set catalog mode accessibility based on user status.", "woocommerce-catalog-enquiry"),
        //     options: [
        //         {
        //             key: "logged_out",
        //             label: __('Logged out users', 'woocommerce-catalog-enquiry'),
        //             value: "logged_out"
        //         },
        //         {
        //             key: "logged_in",
        //             label: __('Logged in users', 'woocommerce-catalog-enquiry'),
        //             value: "logged_in"
        //         },
        //         {
        //             key: "all_users",
        //             label: __('All users', 'woocommerce-catalog-enquiry'),
        //             value: "all_users"
        //         }
        //     ]
        // },
        {
            key: 'is_hide_cart_checkout',
            type: 'checkbox',
            label: __( "Deactivate cart and checkout page?", 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "is_hide_cart_checkout",
                    label: __('Enable this option to redirect users to the homepage when they click on the cart or checkout page. To customize the redirection to a different page, consider upgrading to the Pro <a href="https://multivendorx.com/woocommerce-request-a-quote-product-catalog/" target="_blank">WooCommerce Catalog Enquiry Pro</a>.', 'woocommerce-catalog-enquiry'),
                    value: "is_hide_cart_checkout"
                }
            ]
        },
        {
            key: 'disable_cart_page_link',
            type: 'select',
            label:  __( 'Set redirect page', 'woocommerce-catalog-enquiry' ),
            // desc: apply_filters('woocommerce_catalog_redirect_disabled_cart_page', __( 'Select page where user will be redirected for disable cart page. To use this feature kindly upgrade to <a href="https://multivendorx.com/woocommerce-request-a-quote-product-catalog/" target="_blank">WooCommerce Catalog Enquiry Pro</a>.', 'woocommerce-catalog-enquiry' )),
            options: appLocalizer.pages_array,
            dependent: {
                key: "is_hide_cart_checkout",
                set: true
            },
            proSetting: true,
        },
        {
            key: 'is_hide_product_price',
            type: 'checkbox',
            label: __( "Hide Product Price", 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "is_hide_product_price",
                    label: __('Enable this option to hide product price', 'woocommerce-catalog-enquiry'),
                    value: "is_hide_product_price"
                }
            ]
        }
    ]
};
