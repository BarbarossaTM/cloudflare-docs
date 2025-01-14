const productIconKey = "cloudflare-one"; // TODO: change to "cloudflare-one"

module.exports = {
  product: "Cloudflare for Teams", // TODO: change to "Cloudflare One"
  pathPrefix: "/cloudflare-one",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/cloudflare-one",
  logoSVGContent: '<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.375 5.25C13.6115 5.25 9.75 9.11154 9.75 13.875C9.75 18.6385 13.6115 22.5 18.375 22.5C23.1385 22.5 27 18.6385 27 13.875C27 9.11154 23.1385 5.25 18.375 5.25ZM12.75 13.875C12.75 10.7684 15.2684 8.25 18.375 8.25C21.4816 8.25 24 10.7684 24 13.875C24 16.9816 21.4816 19.5 18.375 19.5C15.2684 19.5 12.75 16.9816 12.75 13.875Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9273 24C13.0635 23.9998 11.2183 24.3705 9.4971 25.0906C7.77593 25.8106 6.21301 26.8657 4.89719 28.1948C3.58141 29.5239 2.53846 31.101 1.82718 32.8356C1.4338 33.7949 1.17293 35.1158 1.00743 36.3261C0.838184 37.5638 0.75 38.8304 0.75 39.75L2.25 41.25H45L46.5 39.75C46.5 38.299 46.2193 36.5321 45.7039 34.884C45.1966 33.2619 44.4054 31.5721 43.2659 30.4209C41.1928 28.3267 38.3779 27.1474 35.4396 27.1474H30.6116C30.4762 27.1474 30.3406 27.1499 30.2055 27.1549C27.7012 25.1214 24.5773 24 21.3288 24H14.9273ZM14.9271 27C13.4615 26.9998 12.0099 27.2913 10.6549 27.8582C9.29994 28.425 8.06777 29.2564 7.02916 30.3055C5.99051 31.3546 5.16581 32.601 4.60288 33.9738C4.35915 34.5682 4.1375 35.5791 3.97977 36.7326C3.90905 37.2497 3.85483 37.7674 3.81687 38.25H28.6875V35.232H12.7995L11.25 32.625H28.6875V29.8005C26.6544 27.9971 24.0461 27 21.3288 27H14.9271ZM31.3125 35.232H38.1608L36.6113 32.625H31.3125V30.1474H35.4396C37.5724 30.1474 39.621 31.0031 41.1338 32.5314C41.7871 33.1914 42.396 34.3578 42.8406 35.7795C43.0998 36.6082 43.2837 37.4612 43.3903 38.25H31.3125V35.232Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M29.25 19.125C29.25 15.6042 32.1042 12.75 35.625 12.75C39.1458 12.75 42 15.6042 42 19.125C42 22.6458 39.1458 25.5 35.625 25.5C32.1042 25.5 29.25 22.6458 29.25 19.125ZM35.625 15.75C33.761 15.75 32.25 17.261 32.25 19.125C32.25 20.989 33.761 22.5 35.625 22.5C37.489 22.5 39 20.989 39 19.125C39 17.261 37.489 15.75 35.625 15.75Z" /></svg>',
  externalLinks: [
    {
      title: "Blog: Introducing Cloudflare One",
      url: "https://blog.cloudflare.com/introducing-cloudflare-one/",
    },
    {
      title: "Cloudflare for Teams pricing",
      url: "https://www.cloudflare.com/teams-pricing/",
    },
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:cloudflare-one"]' },
  },
  siteMetadata: {
    title: "Cloudflare for Teams docs",
    description: "Cloudflare One™ is the culmination of engineering and technical development guided by conversations with thousands of customers about the future of the corporate network. It provides secure, fast, reliable, cost-effective network services, integrated with leading identity management and endpoint security providers. These docs contain step-by-step, use case driven, tutorials to use Cloudflare One products.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/cloudflare-one",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
