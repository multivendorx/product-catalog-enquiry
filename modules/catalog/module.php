<?php 
namespace CatalogEnquiry\catalog;
use CatalogEnquiry\Utill;
class Module {
    public function __construct() {
        $catalog_mode_user_type = Catalog()->setting->get_setting( 'for_user_type' );

        if ($catalog_mode_user_type == 'all_users') {
            add_action('init', [$this, 'main' ], 10);
        } else if ($catalog_mode_user_type == 'logged_out' && !is_user_logged_in()) {
            add_action('init', [$this, 'main' ], 10);
        } else if ($catalog_mode_user_type == 'logged_in' && is_user_logged_in()) {
            add_action('init', [$this, 'main' ], 10);
        }
    }

    function main() {
        remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10);
		remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30);
		remove_action('woocommerce_single_variation', 'woocommerce_single_variation_add_to_cart_button', 20);
        add_action('template_redirect', [$this, 'redirect_cart_checkout_page' ], 10);
    }

    function redirect_cart_checkout_page() {
        $disable_cart_checkout = Catalog()->setting->get_setting( 'is_hide_cart_checkout' );
        if ($disable_cart_checkout) {
            $cart_page_id = wc_get_page_id('cart');
            $checkout_page_id = wc_get_page_id('checkout');
            $home_url_link = apply_filters( 'woocommerce_redirect_to_home_url', home_url() );
            if (is_page($cart_page_id) || is_page($checkout_page_id)) {
                wp_redirect($home_url_link);
                exit;
            }
        }
    }
}

?>