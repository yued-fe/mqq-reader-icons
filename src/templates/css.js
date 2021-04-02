const encodeSvg = str =>
  'data:image/svg+xml,' +
  str
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/{/g, '%7B')
    .replace(/}/g, '%7D')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')

const getStr = (iconName, svgCode) => `  --i-${iconName}: url("${encodeSvg(svgCode)}");\n`

module.exports = { getStr }
