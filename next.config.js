const { remarkCodeHike } = require("@code-hike/mdx");
const theme = require("./theme/codestackr.json");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme, lineNumbers: true }]],
  },
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: false,
  swcMinify: false,
  webpack: function (config, options) {
    config.mode = 'development'
    console.log(config.mode);
    
    return config;
  }
});
