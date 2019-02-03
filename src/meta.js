const { registerBlockType } = wp.blocks
const { createElement } = wp.element
const { __ } = wp.i18n
const { TextControl } = wp.components

registerBlockType("wordcamp-blocks/movie-release", {
  title: __("Movie Release Date"),
  icon: "smiley",
  category: "common",

  attributes: {
    release_date: {
      type: "string",
      source: "meta",
      meta: "release_date"
    }
  },

  edit: function({ attributes: { release_date }, setAttributes }) {
    return (
      <div>
        <TextControl
          label="Release Date"
          value={release_date}
          onChange={release_date => {
            setAttributes({ release_date })
          }}
        />
      </div>
    )
  },

  // No information saved to the block
  // Data is saved to post meta via attributes
  save: function() {
    return null
  }
})
