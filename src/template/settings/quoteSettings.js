import { __ } from '@wordpress/i18n';

export default {
    id: 'quote',
    priority: 70,
    name: __("Quote", "woocommerce-catalog-enquiry"),
    desc: __("Quote", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
        {
            key: 'is_expiry_time_for_quote',
            type: 'checkbox',
            label: __( "Set an expiry time for quotes", 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "is_expiry_time_for_quote",
                    label: __('', 'woocommerce-catalog-enquiry'),
                    value: "is_expiry_time_for_quote"
                }
            ],
            proSetting: true,
        },
        {
            key: 'set_expiry_time',
            type: 'number',
            label:  __( 'Set Expiry Time', 'woocommerce-catalog-enquiry' ),
            desc: __( '', 'woocommerce-catalog-enquiry' ),
            dependent: {
                key: "is_expiry_time_for_quote",
                set: true
            },
            proSetting: true,
        },
        {
            key: 'allow_download_pdf',
            type: 'checkbox',
            label: __( "Allow quotes to be downloaded as PDF", 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "allow_download_pdf",
                    label: __('', 'woocommerce-catalog-enquiry'),
                    value: "allow_download_pdf"
                }
            ],
            proSetting: true,
        },
        {
            key: 'attach_pdf_to_email',
            type: 'checkbox',
            label:  __( 'Attach a PDF version to the quote email', 'woocommerce-catalog-enquiry' ),
            desc: __( '', 'woocommerce-catalog-enquiry' ),
            options: [
                {
                    key: "attach_pdf_to_email",
                    label: __('', 'woocommerce-catalog-enquiry'),
                    value: "attach_pdf_to_email"
                }
            ],
            proSetting: true,
        }
    ]
};
