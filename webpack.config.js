const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "@nayojs/react-datetime-picker",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  mode: "production",
  devtool: "source-map",
  plugins: [new CleanWebpackPlugin()],
};
