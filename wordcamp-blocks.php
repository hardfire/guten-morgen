<?php
/*
* Plugin Name: Wordcamp Fancy Blocks
* Desccription: Fancy Blocks, because it is wordcamp!!!
*/

function wbl_register_fancy_block() {
    wp_register_script(
        'wordcamp-blocks-fancy',
        plugins_url('/dist/index.build.js', __FILE__),
        ['wp-blocks', 'wp-element']
    );

    register_block_type('wordcamp-blocks/fancy', [
        'editor_script' => 'wordcamp-blocks-fancy'
    ]);
}
add_action('init', 'wbl_register_fancy_block');

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}