const svgFiles = require.context('.', true, /\.svg$/);
const requireSvg = context => context.keys().map(context);
requireSvg(svgFiles);
