import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `hruzeda.github.io`,
    siteUrl: `https://hruzeda.github.io/`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-pnpm", "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};

export default config;
