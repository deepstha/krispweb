const tesHandler = {
    name: "tes", pattern: "/components/:slug", func: async ({link, params, state, libraries }) => {
        const { slug } = params;
        //Fetch data from the endpoint
        const  response =  await libraries.source.api.get({
            endpoint: `/wp/v2/pages/460`,
        })
        //Parse the JSON to get the object
        // const menuData  = await response.json();
        const tesresp  = await response.json();
        //Add the items to source.data
        const tLink = state.source.data[link];
        // console.log('respondiong here', tesresp)
        // const obj = Object.assign(menu, {
        //     items: menuData.items,
        //     isMenu: true,
        // });
        Object.assign(tLink, {
            items: tesresp,
            isTestimonial: true,
        });
    },
};
export default tesHandler