import { __ } from '@wordpress/i18n';

export default {
    id: 'quote_pdf',
    priority: 50,
    name: __("Quote PDF", "woocommerce-catalog-enquiry"),
    desc: __("Quote PDF", "woocommerce-catalog-enquiry"),
    icon: 'font-settings',
    submitUrl: 'save_enquiry',
    modal: [
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
