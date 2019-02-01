<?php
/*
 * Plugin Name: Wordcamp Fancy Blocks
 * Desccription: Fancy Blocks, because it is wordcamp!!!
 */

function wbl_register_fancy_block() {
  wp_register_script(
    'wordcamp-blocks',
    plugins_url('/dist/index.build.js', __FILE__),
    ['wp-blocks', 'wp-element', 'wp-components', 'wp-editor']
  );

  register_block_type('wordcamp-blocks/static-simple', [
    'editor_script' => 'wordcamp-blocks'
    ]);

  register_block_type('wordcamp-blocks/static-with-attributes', [
    'editor_script' => 'wordcamp-blocks'
    ]);
}
add_action('init', 'wbl_register_fancy_block');

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
