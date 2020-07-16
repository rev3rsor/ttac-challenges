/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          $assets: "src/assets",
          $components: "src/components",
          $helpers: "src/helpers",
          "$styled-components": "src/styled-components",
        },
        extensions: [],
      },
    },
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "1xvCbBQRnx2i67__zkUytN0QlVRnkG8jOFMBhkZlAfJ4",
        worksheetTitle: "Sheet1",
        credentials: require("./client_secret.json"),
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    "gatsby-plugin-use-query-params",
  ],
}
