module.exports = {
  siteMetadata: {
    title: "Doggoland z.s.",
    description:
      "Dogogland je spolek, který zachraňuje pejsky z nevhodných podmínek, vychovává je a hledá jim ten nejlepší nový domov.",
    siteUrl: `https://doggoland.cz/`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-691JC2FN7B',
          // Setting this parameter is optional
          anonymize: true
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-691JC2FN7B", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Corben\:400,700`,
          `Noto Sans\:400,700`,
          // you can also include other Google Fonts you need
        ],
        display: 'swap'
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
