# TTAC Challenges

A website made for a youth group game, built in Gatsby. Available at <https://ttac-challenges.surge.sh>, and a demonstration at <https://youtu.be/EY0WKX2QBnQ>.

## Setup

With either [npm](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/en/docs/install/) installed, run `gatsby develop` to create a development version of the site, or `gatsby build` to create a production build.

## Sourcing

`ttac-challenges` uses the [gatsby-source-google-sheets](https://www.gatsbyjs.com/plugins/gatsby-source-google-sheets/) plugin to source challenge information. Currently supported challenge formats are shown in the following table:

| type                              | number             | name             | points       | is-multi-image | image-url                                                               | instructions                                      |
| --------------------------------- | ------------------ | ---------------- | ------------ | -------------- | ----------------------------------------------------------------------- | ------------------------------------------------- |
| "group", "individual", or "party" | (for ordering)     | Newspaper Hockey | 1pt per goal | (boolean)      | (one URL if not multi-image, multiple space-separated URLs if multiple) | --                                                |
| "spade", "heart", or "club"       | 1-9 (for ordering) | Daylight Saving  | --           | --             | --                                                                      | Everyone except you must move one seat backwards. |

The `is-multi-image` option creates a navigable series of images that can be scrolled through one at a time.
