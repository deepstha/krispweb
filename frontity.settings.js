const settings = {
  name: "krispCall",
  state: {
    frontity: {
      url: "https://mars.frontity.org",
      title: "krispCall",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "krispcall",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
          autoPrefetch: "hover",
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://dev-krispcall.pantheonsite.io",
          params:  {
            type: ["page"],
          },
          homepage: "/home",
          postsPage:"/blog",
          postTypes: [
            {
              type: "casestudies",
              endpoint: "casestudies",
              archive: "/casestudies",
            },
            {
              type: "knowledgebase",
              endpoint: "knowledgebase",
              archive: "/knowledgebase",
            },
            {
              type: "solutions",
              endpoint: "solutions",
              archive: "/solutions"
            },
            {
              type: "compare",
              endpoint: "compare",
              archive: "/compare"
            },
            {
              type: "integration",
              endpoint: "integration",
              archive: "/integration"
            },
            {
              type: "testimonials",
              endpoint: "testimonials",
              archive: "/testimonials"
            },
            {
              type: "policies",
              endpoint: "policies",
              archive: "/policies"
            }
          ],
        },
      },
    },
    
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
    
  ], 

};

export default settings;
