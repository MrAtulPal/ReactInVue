const { dependencies } = require("./package.json");
const path = require("path");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = function override(config, env) {
  config.entry = {
    main: path.resolve("./src/index.js"),
  };

  config.output = {
    publicPath: "http://localhost:5599/",
    clean:true
  };

  config.plugins.push(
    new ModuleFederationPlugin({
      name: "remoteComponents",
      exposes: {
        "./App": "./src/App",
      },
      filename: "remoteEntry.js",
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    })
  );

  return config;
};
