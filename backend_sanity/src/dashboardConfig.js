export default {
  widgets: [
    {
      name: "netlify",
      options: {
        title: "My Netlify deploys",
        sites: [
          {
            title: "Sanity Studio",
            apiId: process.env.API_ID,
            buildHookId: process.env.BUILD_HOOK_ID,
            name: "sanity-gatsby-blog-20-studio",
          },
          {
            title: "Jeff Deutsch Portfolio",
            apiId: process.env.API_ID,
            buildHookId: process.env.BUILD_HOOK_ID,
            name: "sanity-gatsby-blog-20-web",
            url: "https://jeffdeutsch.netlify.app",
            branch: "main",
          },
        ],
      },
    },
  ],
};
