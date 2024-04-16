<?php
namespace CatalogEnquiry;
class Rest {
    public function __construct() {
        if (current_user_can('manage_options')) {
			add_action( 'rest_api_init', [ $this, 'catalog_rest_routes_react_module' ] );
		}
    }

    function catalog_rest_routes_react_module() {
        register_rest_route( Catalog()->rest_namespace, '/save_enquiry', [
            'methods' => \WP_REST_Server::EDITABLE,
            'callback' => array( $this, 'save_catalog_setting' ),
            'permission_callback' => array( $this, 'catalog_permission' )
        ] );

        register_rest_route( Catalog()->rest_namespace, '/module_manage', [
            'methods' => \WP_REST_Server::EDITABLE,
            'callback' => array( $this, 'module_manage_catalog' ),
            'permission_callback' => array( $this, 'catalog_permission' )
        ] );
	}

    public function module_manage_catalog($request) {
        $moduleId = $request->get_param( 'id' );
        $action = $request->get_param( 'action' );
        if ($action == 'activate' ) {
            Catalog()->modules->activate_modules([$moduleId]);
        } else {
            Catalog()->modules->deactivate_modules([$moduleId]);
        }
        // return rest_ensure_response( 'success' );
    }

	public function save_catalog_setting($request) {
        $all_details = [];
        $get_settings_data = $request->get_param( 'setting' );
        $settingsname = $request->get_param( 'settingName' );
        $settingsname = str_replace( "-", "_", $settingsname );
        $optionname = 'catalog_' . $settingsname . '_settings';

        // save the settings in database
        Catalog()->setting->update_option( $optionname, $get_settings_data );

        do_action( 'catalog_settings_after_save', $settingsname, $get_settings_data );

        $all_details[ 'error' ] = __( 'Settings Saved', 'woocommerce-catalog-enquiry' );

        return rest_ensure_response($all_details);
	}
	
	public function catalog_permission() {
		// return current_user_can('manage_options');
        return true;
	}

}