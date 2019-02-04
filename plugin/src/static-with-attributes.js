const { registerBlockType } = wp.blocks
const { InspectorControls, BlockControls } = wp.editor
const { createElement, Fragment } = wp.element
const { __ } = wp.i18n
const { PanelBody, PanelRow } = wp.components

registerBlockType("wordcamp-blocks/static-with-attributes", {
  title: __("WCKTM : Static With Attributes"),
  icon: "smiley",
  category: "common",

  attributes: {
    text: {
      type: "string",
      default: "Welcome to WordCamp Kathmandu"
    }
  },

  edit({ attributes }) {
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__("Image Settings")}>
            <PanelRow>
              <label>Set Filter</label>
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <p>{attributes.text}</p>
      </Fragment>
    )
  },

  save() {
    return <p>{attributes.text}</p>
  }
})
