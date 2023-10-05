// prettier.config.js
module.exports = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindConfig: "./scr/tailwind.config.cjs",
  tailwindAttributes: ["myClassList"],
  tailwindFunctions: ["clsx"],
  overrides: [
    {
      files: "**/*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
