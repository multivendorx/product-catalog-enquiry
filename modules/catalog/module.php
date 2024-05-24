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

		add_action('woocommerce_single_product_summary', [$this, 'display_description_box'], 35);
		add_action('woocommerce_single_product_summary', [$this, 'display_button'], 35);
        add_action('woocommerce_single_product_summary', [$this, 'add_variation_product'], 29);

        // $display_desc = Catalog()->setting->get_setting( 'display_description' );
        // $display_button = Catalog()->setting->get_setting( 'display_position' );

        // if ($display_desc == 'above') {
		//     add_action('woocommerce_single_product_summary', [$this, 'display_description_box']);
        // } elseif ($display_desc == 'below') {
		//     add_action('woocommerce_single_product_summary', [$this, 'display_description_box'], 35);
        // }

        // if ($display_button == 'below_desc') {
		//     add_action('woocommerce_single_product_summary', [$this, 'display_button'], 35);
        // } elseif ($display_button == 'above_add_to_cart') {
		//     add_action('woocommerce_before_add_to_cart_button', [$this, 'display_button']);
        // } elseif ($display_button == 'below_add_to_cart') {
		//     add_action('woocommerce_after_add_to_cart_button', [$this, 'display_button']);
        // } elseif ($display_button == 'place_add_to_cart') {
		//     add_action('woocommerce_single_product_summary', [$this, 'display_button'], 30);
        // }
    }

    function add_variation_product() {

        global $product;
        if ($product->is_type('variable')) {
            $variable_product = new \WC_Product_Variable($product);
            // Enqueue variation scripts
            wp_enqueue_script('wc-add-to-cart-variation');
            $available_variations = $variable_product->get_available_variations();
            $args = [
                'available_variations' => $available_variations
            ];
            //attributes
            Catalog()->util->get_template('woocommerce-catalog-enquiry-variable-product.php', $args);

        } elseif ($product->is_type('simple')) {
            echo wc_get_stock_html($product);
        }
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

    function display_description_box() {
        $desc_box = Catalog()->setting->get_setting( 'description_box' );
        ?>
        <div class="desc-box">
            <input type="text" id="desc-box" name="desc_box" value= "<?php echo $desc_box; ?>" readonly>
        </div>
        <?php
    }

    function display_button() {
        $settings_array = Utill::get_form_settings_array();
        $button_css = $button_href = "";
        $border_size = ( !empty( $settings_array[ 'button_border_size' ] ) ) ? esc_html( $settings_array[ 'button_border_size' ] ).'px' : '1px';
        if ( !empty( $settings_array[ 'button_background_color' ] ) )
            $button_css .= "background:" . esc_html( $settings_array[ 'button_background_color' ] ) . ";";
        if ( !empty( $settings_array[ 'button_text_color' ] ) )
            $button_css .= "color:" . esc_html( $settings_array[ 'button_text_color' ] ) . ";";
        if ( !empty( $settings_array[ 'button_border_color' ] ) )
            $button_css .= "border: " . $border_size . " solid " . esc_html( $settings_array[ 'button_border_color' ] ) . ";";
        if ( !empty( $settings_array[ 'button_font_size' ] ) )
            $button_css .= "font-size:" . esc_html( $settings_array[ 'button_font_size' ] ) . "px;";
        if ( !empty( $settings_array[ 'button_border_radious' ] ) )
            $button_css .= "border-radius:" . esc_html( $settings_array[ 'button_border_radious' ] ) . "px;";
        if ($settings_array[ 'button_link' ]) {
            $button_href = $settings_array[ 'button_link' ] ;
        }
        // '. $button_href.'
        $button_html = '<button style="' . $button_css .'" class="" name="customize_button" onclick="window.location.href=\'' . esc_url($button_href) . '\'">' . esc_html( $settings_array[ 'button_text' ] ) . '</button>';
        echo $button_html;
    }
}

?>