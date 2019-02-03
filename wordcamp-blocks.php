<?php
/*
 * Plugin Name: Wordcamp Fancy Blocks
 * Desccription: Fancy Blocks, because it is wordcamp!!!
 */

function wbl_register_post_type() {
  $args = array(
    'public' => true,
    'label'  => 'Movies',
    'show_in_rest' => true,
    // wordpress black magic https://github.com/WordPress/gutenberg/issues/5622
    'supports' => [
      'title',
      'editor',
      'thumbnail',
      'custom-fields',
    ],
  );
  register_post_type( 'movie', $args );
}
add_action('init', 'wbl_register_post_type');

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

function wbl_register_meta() {
    register_meta( 'post', 'release_date', array(
        'show_in_rest' => true,
        'single' => true,
        'object_subtype' => 'movie',
        'type' => 'number',
    ) );
}
add_action( 'init', 'wbl_register_meta' );

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
