
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const buildPath = path.resolve(__dirname, "build/scritps");

module.exports = {
  
  webpack: function override(config, env) {
    const isDevelopment = env === "development";
    const isProuction = env === "production";
    // path.appHtml = path.resolve(__dirname, 'application/index.html');
    // path.appBuild = path.resolve(`${ __dirname }/build/${ folder }`);
    console.log("Environment is " + env);
    (config.output = {
      ...config.output,
      //filename: 'main.js',
      path: path.resolve(__dirname, 'build')
    }),
      (config.optimization = {
        minimize: false,
      });

    return config;
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new HtmlWebpackPlugin(),
    ],
      (config.module = {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
      });
  },
};
