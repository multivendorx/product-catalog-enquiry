jQuery( document ).ready( function ( $ ) {
    $( '#responsive' ).hide();
    var $enquiryBtn = $('.woocommerce-catalog-enquiry-btn');
    if($('form.variations_form').length > 0){
        $enquiryBtn.hide();
    }
    $('form.variations_form').on('show_variation', function(event, variation) {
        $enquiryBtn.show();
    });

    $('form.variations_form').on('hide_variation', function(event) {
        $enquiryBtn.hide();
    });

    $('#woocommerce-catalog .catalog-modal .close, #woocommerce-catalog .catalog-modal .btn-default').on( 'click', function () {
		$( '#responsive' ).slideToggle( 500 );
	} );

	$( '#woocommerce-catalog .woocommerce-catalog-enquiry-btn' ).on('click', function () {
			$( '#woocommerce-catalog #responsive' ).slideToggle( 1000 );
		}
	);

    $( '#catalog-enquiry-form' ).on( 'submit', function (e) {
        e.preventDefault();
        var quantity =  $('.quantity .qty').val();
		var formData = $(this).serializeArray();
        if (typeof quantity == 'undefined') {
            quantity = 1;
        }
        console.log(quantity)
        // AJAX request
        $.ajax({
            url: catalog_enquiry_frontend.ajaxurl,
            method: 'POST',
            data: {
                action: 'save_enquiry_send_mail',
                formData: formData,
                quantity: quantity
            },
            success: function(response) {
                window.location.href = catalog_enquiry_frontend.redirect_link;
                
            },
        });
    });

    $( '#woocommerce-submit-enquiry' ).on( 'click', function (e) {
       
        // if (typeof catalog_enquiry_frontend.settings != 'undefined' && catalog_enquiry_frontend.settings !== null) {
        //     window.location.href = catalog_enquiry_frontend.redirect_link;
        // }
    });

});