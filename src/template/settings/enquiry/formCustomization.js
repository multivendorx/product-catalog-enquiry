import { __ } from '@wordpress/i18n';

export default {
    id: 'enquiry_form_customization',
    priority: 55,
    name: __("Form Customization", "woocommerce-catalog-enquiry"),
    desc: __("Form Customization", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        // {
        //     key: 'catalog_customizer',
        //     type: 'catalog_customizer',
        //     label: __("Catalog Customizer", "woocommerce-catalog-enquiry"),
        //     desc: __("Catalog Customizer", "woocommerce-catalog-enquiry"),
        // },
        {
            key: 'form_customizer',
            type: 'form_customizer',
            label: __("Form Customizer", "woocommerce-catalog-enquiry"),
            desc: __("Form Customizer", "woocommerce-catalog-enquiry"),
        }
    ]
};
