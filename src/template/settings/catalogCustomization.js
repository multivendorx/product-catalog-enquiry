import { __ } from '@wordpress/i18n';

export default {
    id: 'enquiry_catalog_customization',
    priority: 10,
    name: __("Shop Page Builder", "woocommerce-catalog-enquiry"),
    desc: __("Manage shop page settings for enquiries, quotes, and add-to-cart.", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        {
            key: 'catalog_customizer',
            type: 'catalog_customizer',
            label: __("Catalog Customizer", "woocommerce-catalog-enquiry"),
            desc: __("Catalog Customizer", "woocommerce-catalog-enquiry"),
            classes: 'catalog-customizer-wrapper',
        }
    ]
};
