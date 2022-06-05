import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Professional Profile - Henrique Uzêda`,
    siteUrl: `https://hruzeda.github.io/`
  },
  plugins: ["gatsby-plugin-pnpm", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sass", "gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};

export default config;
