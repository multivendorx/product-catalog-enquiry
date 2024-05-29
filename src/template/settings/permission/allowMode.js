import { __ } from '@wordpress/i18n';

export default {
    id: 'mode',
    priority: 60,
    name: __("Role-Based Permission", "woocommerce-catalog-enquiry"),
    desc: __("Role-Based Permission", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        {
            key: 'grid_table',
            type: 'grid_table',
            label: __("Grid Table", "woocommerce-catalog-enquiry"),
            desc: __("Grid Table", "woocommerce-catalog-enquiry"),
            classes: 'gridTable',
            rows: [
                {
                    key: "logged_out",
                    label: __('Logged out users', 'woocommerce-catalog-enquiry'),
                },
                {
                    key: "logged_in",
                    label: __('Logged in users', 'woocommerce-catalog-enquiry'),
                },
                {
                    key: "all_users",
                    label: __('All users', 'woocommerce-catalog-enquiry'),
                }
            ],
            columns: [
                {
                    key: "catalog",
                    label: __("Catalog", "woocommerce-catalog-enquiry")
                },
                {
                    key: "enquiry",
                    label: __("Enquiry", "woocommerce-catalog-enquiry")
                },
                {
                    key: "quote",
                    label: __("Quote", "woocommerce-catalog-enquiry")
                }
            ],
        }
    ]
};