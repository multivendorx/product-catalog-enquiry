import { __ } from '@wordpress/i18n';

export default {
    id: 'tools',
    priority: 60,
    name: __("Tools", "woocommerce-catalog-enquiry"),
    desc: __("Tools", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal : [
        {
            key: "custom_css_product_page",
            type: "textarea",
            desc: __("Put your custom css here, to customize the enquiry form.", "woocommerce-catalog-enquiry"),
            label: __("Addional CSS", "woocommerce-catalog-enquiry"),
        },
    ]
}