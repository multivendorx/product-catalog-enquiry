<?php 
namespace CatalogEnquiry\enquiry;
class Module {
    public function __construct() {
        add_action('init', [$this, 'main' ], 10);
    }

    function main() {
        // echo "hiii enquiry";

    }
}
?>