const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const config = {
  plugins: [
    autoprefixer,
    tailwindcss(),
  ],
};

module.exports = config;
