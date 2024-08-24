const path = require('path');
module.exports = {
  webpack: {
    alias: {
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@helpers": path.resolve(__dirname, "src/helpers/"),
      "@_types": path.resolve(__dirname, "src/types/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
    },
  },
};