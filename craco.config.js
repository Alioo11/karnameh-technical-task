const path = require('path');
module.exports = {
  webpack: {
    alias: {
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@helpers": path.resolve(__dirname, "src/helpers/"),
      "@_types": path.resolve(__dirname, "src/types/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
      "@services": path.resolve(__dirname, "src/services/"),
    },
  },
};