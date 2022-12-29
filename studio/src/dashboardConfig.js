export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63ad61db71f88e0456739b7f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-rmkd8rb4",
                  apiId: "f8a642b5-008a-401e-bc00-d934e8fdc103",
                },
                {
                  buildHookId: "63ad61dad06ca403483734c9",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-q95bs8bh",
                  apiId: "9af230de-4cc8-44ce-986a-0653bec3c1f9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Raraking/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-q95bs8bh.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
