const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCSS(
  withSass({
    outputStyle: "compressed",
    onDemandEntries: {
      maxInactiveAge: 25 * 1000,
      pagesBufferLength: 10
    },
    webpack: (config, options) => {
      return config;
    }
  })
);
