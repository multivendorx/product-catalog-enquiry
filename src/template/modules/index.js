import { __ } from '@wordpress/i18n';

export default [
    {
        id: 'catalog',
        name: __("Catalog", "woocommerce-catalog-enquiry"),
        desc: __("Convert your e-commerce site into a catalog, enabling product browsing without direct online purchasing, ideal for showcasing and inquiries.", "woocommerce-catalog-enquiry"),
        icon: 'font-mail',
        doc_link: '',
        settings_link: '',
        pro_module: false
    },
    {
        id: 'enquiry',
        name: __("Enquiry", "woocommerce-catalog-enquiry"),
        desc: __("Integrate an enquiry button, connecting customers directly for enhanced engagement and streamlined communication.", "woocommerce-catalog-enquiry"),
        icon: 'font-mail',
        doc_link: '',
        settings_link: '',
        pro_module: false
    },
    {
        id: 'quote',
        name: __("Quote", "woocommerce-catalog-enquiry"),
        desc: __("Enable quote module", "woocommerce-catalog-enquiry"),
        icon: 'font-mail',
        doc_link: '',
        settings_link: '',
        pro_module: true
    }
]