<?php
namespace CatalogEnquiry;
class Frontend {

    public function __construct() {
        $price_hide_product_page = Catalog()->setting->get_setting( 'product_page' );
        if ( $price_hide_product_page == 'product_price') {
            remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
        }
    }

}