const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const config = {
  plugins: [
    tailwindcss("src/lib/tailwind.config.cjs"),
    autoprefixer,
  ],
};

module.exports = config;
