module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = webpackConfig.ignoreWarnings || [];
      webpackConfig.ignoreWarnings.push(
        (warning) =>
          // Suppress vis-network/vis-data source-map loader warnings
          (warning.module && warning.module.resource && /node_modules\/(vis-network|vis-data)\//.test(warning.module.resource) &&
            /Failed to parse source map/.test(String(warning.message)))
      );
      return webpackConfig;
    },
  },
};
