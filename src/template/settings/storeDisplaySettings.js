import { __ } from '@wordpress/i18n';

export default {
    id: 'store_display',
    priority: 10,
    name: __("Store Display Settings", "woocommerce-catalog-enquiry"),
    desc: __("Store Display Settings", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        {
            key: 'product_galary_page',
            type: 'checkbox',
            label: __("Product Gallery Page (Shop, Categoty etc)", "woocommerce-catalog-enquiry"),
            desc: __("", "woocommerce-catalog-enquiry"),
            select_deselect: true,
            options: [
                {
                    key: "product_price",
                    label: __('Product Price', 'woocommerce-catalog-enquiry'),
                    value: "product_price"
                },
                {
                    key: "add_to_cart",
                    label: __('Add-To-Cart', 'woocommerce-catalog-enquiry'),
                    value: "add_to_cart"
                },
                {
                    key: "enquiry_button",
                    label: __('Enquiry Button', 'woocommerce-catalog-enquiry'),
                    value: "enquiry_button"
                },
                {
                    key: "ask_a_quote",
                    label: __('Ask a Quote', 'woocommerce-catalog-enquiry'),
                    value: "ask_a_quote"
                }
            ]
        },
        {
            key: 'product_page',
            type: 'multi-select',
            label: __("Product Page", "woocommerce-catalog-enquiry"),
            desc: __("", "woocommerce-catalog-enquiry"),
            options: [
                {
                    key: "product_price",
                    label: __('Product Price', 'woocommerce-catalog-enquiry'),
                    value: "product_price"
                },
                {
                    key: "add_to_cart",
                    label: __('Add-To-Cart', 'woocommerce-catalog-enquiry'),
                    value: "add_to_cart"
                },
                {
                    key: "enquiry_button",
                    label: __('Enquiry Button', 'woocommerce-catalog-enquiry'),
                    value: "enquiry_button"
                },
                {
                    key: "ask_a_quote",
                    label: __('Ask a Quote', 'woocommerce-catalog-enquiry'),
                    value: "ask_a_quote"
                }
            ]
        }
    ]
};
