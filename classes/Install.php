<?php 
namespace CatalogEnquiry;
class Install{
    public function __construct() {
        $this->catalog_data_migrate();
    }

    function catalog_data_migrate() {
        $catalog_settings = [ 
            'for_user_type' => "all_users", 
            'button_text' => __( 'Customize', 'woocommerce-catalog-enquiry' ), 
            'alert_text_color' => '', 
            'button_background_color' => '', 
            'button_border_color' => '', 
            'button_text_color' => '', 
            'button_background_color_onhover' => '', 
            'button_text_color_onhover' => '', 
            'button_border_color_onhover' => '', 
            'button_font_size' => '', 
            'button_border_radious' => '', 
            'button_border_size' => ''
        ];

        update_option( 'catalog_catalog_settings', $catalog_settings );
    }
}