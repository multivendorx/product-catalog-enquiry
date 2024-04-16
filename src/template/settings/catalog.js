import { __ } from '@wordpress/i18n';

export default {
    id: 'catalog',
    priority: 20,
    name: __("Catalog", "woocommerce-catalog-enquiry"),
    desc: __("Configure basic catalog settings to operate your catalog marketplace.", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        {
            key: 'for_user_type',
            type: 'radio',
            label: __("Catalog Mode Applicable For", "woocommerce-catalog-enquiry"),
            desc: __("Select the type users where this catalog is applicable", "woocommerce-catalog-enquiry"),
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
            key: 'is_hide_cart_checkout',
            type: 'checkbox',
            label: __( "Disable Cart and Checkout Page?", 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "is_hide_cart_checkout",
                    label: __('Enable this to redirect user to home page, if they click on the cart or checkout page. To set the redirection to another page kindly upgrade to <a href="https://multivendorx.com/woocommerce-request-a-quote-product-catalog/" target="_blank">WooCommerce Catalog Enquiry Pro</a>.', 'woocommerce-catalog-enquiry'),
                    value: "is_hide_cart_checkout"
                }
            ]
        },
        {
            key: 'disable_cart_page_link',
            depend_checkbox:  'is_hide_cart_checkout',
            type: 'select',
            label:  __( 'Set Redirect Page', 'woocommerce-catalog-enquiry' ),
            // desc: apply_filters('woocommerce_catalog_redirect_disabled_cart_page', __( 'Select page where user will be redirected for disable cart page. To use this feature kindly upgrade to <a href="https://multivendorx.com/woocommerce-request-a-quote-product-catalog/" target="_blank">WooCommerce Catalog Enquiry Pro</a>.', 'woocommerce-catalog-enquiry' )),
            options: appLocalizer.pages_array,
        },
        {
            key: 'catalog_page_design',
            type: 'checkbox',
            label: __( "Catalog Page Design", 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "catalog_page_design",
                    label: __('Enable Customization for Catalog Page', 'woocommerce-catalog-enquiry'),
                    value: "catalog_page_design"
                }
            ]
        },
        {
            key: 'display_description',
            depend_checkbox:  'catalog_page_design',
            type: 'radio',
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
            key: "description_box",
            depend_checkbox:  'catalog_page_design',
            type: "textarea",
            desc: __("", "woocommerce-catalog-enquiry"),
            label: __("Description Box", "woocommerce-catalog-enquiry"),
        },
        {
            key: 'display_position',
            depend_checkbox:  'catalog_page_design',
            type: 'radio',
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
            key: "button_text",
            type: "text",
            depend_checkbox:  'catalog_page_design',
            label: __("Customize Button", "woocommerce-catalog-enquiry"),
            desc: __("Modify the customize button text. By default we display customize.", "woocommerce-catalog-enquiry"),
            placeholder: __("Customize", "woocommerce-catalog-enquiry"),
        },
        {
            depend_checkbox:  'catalog_page_design',
            type: "button_customizer",
            label: __("Button Design", "woocommerce-catalog-enquiry"),
        },
    ]
};
