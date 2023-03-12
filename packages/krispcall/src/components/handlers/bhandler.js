const bHandler = {
  name: "bHandler", priority: 10,pattern: "/brand/:slug", func: async ({ link, params, state, libraries }) => {
    const { slug } = params;
     // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get({
      endpoint: `/wp/v2/pages/4345`,
    });
    // Parse the JSON to get the object
    const resJson = await response.json();
    // Add the menu items to source.data
    const dataId = state.source.data[link];
    // console.log('brand data is', resJson);
    // console.log('brand link is', dataId);
    // console.log('footer slug is', slug);
    Object.assign(dataId, {
      items: resJson,
      isBrand: true,
    });
  },
};
export default bHandler;
