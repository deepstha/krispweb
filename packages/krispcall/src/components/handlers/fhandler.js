const fHandler = {
    name: "cta", pattern: "/footer/:slug", func: async ({link, params, state, libraries }) => {
        const { slug } = params;
        //Fetch data from the endpoint
        const  response =  await libraries.source.api.get({
            endpoint: `/wp/v2/pages/4412`,
        })
        //Parse the JSON to get the object
        // const menuData  = await response.json();
        const resp  = await response.json();
        //Add the items to source.data
        const footerId = state.source.data[link];
        Object.assign(footerId, {
            items: resp,
            isFooter: true,
        });
    },
};
export default fHandler