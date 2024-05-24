import { __ } from '@wordpress/i18n';

export default {
    id: 'enquiry_catalog_customization',
    priority: 65,
    name: __("Catalog Customization", "woocommerce-catalog-enquiry"),
    desc: __("Catalog Customization", "woocommerce-catalog-enquiry"),
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
