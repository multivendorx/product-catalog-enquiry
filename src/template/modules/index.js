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
        desc: __("Allows customers to request an estimate for a list of desired products by adding items to a quote list, and requesting a custom price.", "woocommerce-catalog-enquiry"),
        icon: 'font-mail',
        doc_link: '',
        settings_link: '',
        pro_module: true
    },
    {
        id: 'wholesale',
        name: __("Wholesale Pricing", "woocommerce-catalog-enquiry"),
        desc: __("Facilitates the provision of customized wholesale pricing to designated users by allowing the setup of individual wholesale prices for each product."),
        icon: 'font-mail',
        doc_link: '',
        settings_link: '',
        pro_module: true
    },
    {
        id: 'roleBased',
        name: __("Role-based Pricing", "woocommerce-catalog-enquiry"),
        desc: __("Customize pricing for customers according to their specific role or account type."),
        icon: 'font-mail',
        doc_link: '',
        settings_link: '',
        pro_module: true
    },
]