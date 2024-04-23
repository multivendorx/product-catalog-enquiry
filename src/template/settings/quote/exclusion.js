import { __ } from '@wordpress/i18n';

export default {
    id: 'quote_exclusion',
    priority: 55,
    name: __("Exclusion", "woocommerce-catalog-enquiry"),
    desc: __("Exclusion Management", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        {
            key: "woocommerce_userroles_list",
            type: "multi-select",
            label: __("User Role Specific Exclusion", "woocommerce-catalog-enquiry"),
            desc: __("Select the user roles, who won’t be able to send enquiry.", "woocommerce-catalog-enquiry"),
            options: appLocalizer.role_array
        },
        {
            key: "woocommerce_user_list",
            type: "multi-select",
            label: __("User Name Specific Exclusion", "woocommerce-catalog-enquiry"),
            desc: __("Select the users, who won’t be able to send enquiry.", "woocommerce-catalog-enquiry"),
            options: appLocalizer.all_users
        },
        {
            key: "woocommerce_product_list",
            type: "multi-select",
            label: __("Product Specific Exclusion", "woocommerce-catalog-enquiry"),
            desc: __("Select the products that should have the Add to cart button, instead of enquiry button.", "woocommerce-catalog-enquiry"),
            options: appLocalizer.all_products
        },  
        {
            key: "woocommerce_category_list",
            type: "multi-select",
            label: __("Category Specific Exclusion", "woocommerce-catalog-enquiry"),
            desc: __("Select the Category, where should have the Add to cart button, instead of enquiry button.", "woocommerce-catalog-enquiry"),
            options: appLocalizer.all_product_cat
        },
        {
            key: "woocommerce_tag_list",
            type: "multi-select",
            label: __("Tag Specific Exclusion", "woocommerce-catalog-enquiry"),
            desc: __("Select the Tag, where should have the Add to cart button, instead of enquiry button.", "woocommerce-catalog-enquiry"),
            options: appLocalizer.all_product_cat
        }
    ]
};
