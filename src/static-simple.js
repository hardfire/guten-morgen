const { registerBlockType } = wp.blocks
const { createElement } = wp.element
const { __ } = wp.i18n

registerBlockType("wordcamp-blocks/static-simple", {
  title: __("WCKTM : Static Simple"),
  icon: "smiley",
  category: "common",

  // reacty
  edit() {
    return <p> Hello WordCamp Kathmandu </p>
  },

  // not reacty
  save() {
    return <h2> Hello WordCamp Kathmandu </h2>
  },

  deprecated: [
    {
      save() {
        return <p> Hello WordCamp Kathmandu </p>
      }
    }
  ]
})
