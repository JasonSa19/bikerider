/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby + Vercel`,
    siteUrl: `https://gatsby-template.vercel.app/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: "gatsby-plugin-manifest",
      options: { icon: "src/images/favicon.png" },
    },
  ],
};
