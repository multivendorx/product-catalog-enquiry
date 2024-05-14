jQuery( document ).ready( function ( $ ) {
    $( '#responsive' ).hide();
    $('#woocommerce-catalog .catalog-modal .close, #woocommerce-catalog .catalog-modal .btn-default').on( 'click', function () {
		$( '#responsive' ).slideToggle( 500 );
	} );

	$( '#woocommerce-catalog .woocommerce-catalog-enquiry-btn' ).on('click', function () {
			$( '#woocommerce-catalog #responsive' ).slideToggle( 1000 );
		}
	);

    $( '#catalog-enquiry-form' ).on( 'submit', function (e) {
        e.preventDefault();
		var formData = $(this).serializeArray();
        console.log(formData)
        // AJAX request
        $.ajax({
            url: catalog_enquiry_frontend.ajaxurl,
            method: 'POST',
            data: {
                action: 'save_enquiry_send_mail',
                formData: formData
            },
            success: function(response) {
                console.log(response);
                
            },
        });
    });

    $( '#woocommerce-submit-enquiry' ).on( 'click', function (e) {
       
        // if (typeof catalog_enquiry_frontend.settings != 'undefined' && catalog_enquiry_frontend.settings !== null) {
        //     window.location.href = catalog_enquiry_frontend.redirect_link;
        // }
    });

});