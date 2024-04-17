jQuery( document ).ready( function ( $ ) {
    $( '#responsive' ).hide();
    $('#woocommerce-catalog .catalog-modal .close, #woocommerce-catalog .catalog-modal .btn-default').on( 'click', function () {
		$( '#responsive' ).slideToggle( 500 );
	} );

	$( '#woocommerce-catalog .woocommerce-catalog-enquiry-btn' ).on('click', function () {
			$( '#woocommerce-catalog #responsive' ).slideToggle( 1000 );
		}
	);

    $( '#woocommerce-submit-enquiry' ).on( 'click', function () {
        if (typeof catalog_enquiry_frontend.settings != 'undefined' && catalog_enquiry_frontend.settings !== null) {
            window.location.href = catalog_enquiry_frontend.redirect_link;
        }
    });

});