module.exports = {
  lintOnSave: false,
  devServer: {
    port: "8080",
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      "/api": {
        target: process.env.VUE_APP_API_BASE_URL+process.env.VUE_APP_API_CONTEXT
      }
    }
  }
};
