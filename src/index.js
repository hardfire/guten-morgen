const { registerBlockType } = wp.blocks
const { createElement } = wp.element

registerBlockType(
    'wordcamp-blocks/fancy',
    {
        title: 'Fancy Wordcamp Block',
        icon: 'smiley',
        category: 'common',

        // reacty
        edit() {
            return <h1> Hello Captain </h1>
        },

        // not reacty
        save()  {
            return <h1> Hello Captain </h1>
        }
    }
)
