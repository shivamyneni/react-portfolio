const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@/": "src/",
    "@components": "src/components",
    "@containers": "src/containers",
    "@images": "src/assets/Images",
    "@styles": "src/styles",
    "@models":"src/assets/Models"
    // Add more aliases as needed
  })(config);

  return config;
};
