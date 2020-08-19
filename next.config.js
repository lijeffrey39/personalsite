const withFonts = require('next-fonts');
module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
}

const withOptimizedImages = require('next-optimized-images');
const path = require("path");

module.exports = withOptimizedImages({
  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, "images");
    return config;
  },
});