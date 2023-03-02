module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        rule: {
          test: /\.(scss|sass)$/i,
        },
      },
    },
  ],
  "framework": "@storybook/html"
}