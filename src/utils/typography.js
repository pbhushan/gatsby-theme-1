import Typography from 'typography'

import funston from 'typography-theme-funston'
import alton from 'typography-theme-alton'
import young from 'typography-theme-de-young'
import doelger from 'typography-theme-doelger'
import elkGlen from 'typography-theme-elk-glen'
import fairyGates from 'typography-theme-fairy-gates'

fairyGates.baseFontSize = '16px'
fairyGates.bodyGrey = 25
/* fairyGates.headerFontFamily = ['Open Sans', 'sans-serif']
fairyGates.bodyFontFamily = ['Open Sans', 'sans-serif']
fairyGates.googleFonts = [
  {
    name: 'Open Sans',
    styles: ['300', '400', '500', '600', '700'],
  },
] */

fairyGates.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6,p': {
    marginTop: rhythm(1 / 3),
    marginBottom: rhythm(1 / 3),
  },
})

const typography = new Typography(fairyGates)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
