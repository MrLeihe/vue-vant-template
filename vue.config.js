const AliOssPlugin = require("upload-ali-oss-plugin");

process.env.VUE_APP_VERSION = require("./package.json").version;
const { OSS } = require("./oss");

module.exports = {
  outputDir: "./dist",
  productionSourceMap: false,
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      // new AliOssPlugin({
      //   debug: false,
      //   region: OSS.REGION,
      //   accessKeyId: OSS.ACCESS_KEY_ID,
      //   accessKeySecret: OSS.ACCESS_KEY_SECRET,
      //   bucket: OSS.BUCKET,
      //   ossPath: OSS.PREFIX,
      // }),
    ]
  },
  devServer: {
    port: 8666,
    writeToDisk: true
  }
};
