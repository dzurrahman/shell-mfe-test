const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "shell",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        remotes: {
            "angular12": "angular13@http://localhost:4201/remoteEntry.js",
            // "angular13": "http://localhost:4202/remoteEntry.js",
            "angular13": "https://dzurrahman.github.io/mfe-roki-test/remoteEntry.js",
        },

        // shared: ["@angular/core", "@angular/common", "@angular/common/http", "@angular/router"]

        shared: share({
          "@angular/core": { singleton: true, strictVersion: false, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: false, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: false, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
