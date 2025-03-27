module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
        data: "_data"
    }
  };
};