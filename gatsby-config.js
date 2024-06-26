/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `lucas-andrade`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-sass",
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Roboto:400", "Open Sans:400"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {},
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/locales`,
        name: "locale",
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale", // name given to `gatsby-source-filesystem` plugin.
        languages: ["en", "pt"],
        defaultLanguage: "pt",
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};
