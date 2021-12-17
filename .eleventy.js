module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/CSS");
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
    },
  };
};
