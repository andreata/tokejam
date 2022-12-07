import plugin_gridsome_plugin_flexsearch_7 from "/Applications/MAMP/htdocs/tokejam/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"
import plugin_gridsome_plugin_gtm_8 from "/Applications/MAMP/htdocs/tokejam/node_modules/gridsome-plugin-gtm/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_flexsearch_7,
    options: {"pathPrefix":"","siteUrl":"https://tokejam.com/","searchFields":["title","excerpt"],"collections":[{"indexName":"Product","query":"{ posts { edges { node { id, title, excerpt, slug, featuredImage { node { altText, mediaItemUrl } } } } } }","path":"posts.edges.node"}],"chunk":false,"compress":false,"autoFetch":true,"autoSetup":true,"flexsearch":{"profile":"default"}}
  },
  {
    run: plugin_gridsome_plugin_gtm_8,
    options: {"id":"GTM-W6W3VJB","enabled":true,"debug":true}
  }
]
