import { useEffect, useState } from "react";
import { connect, loadable, styled } from "frontity";
import Switch from "@frontity/components/switch";
import Loader from "../common/loader";
const Contact = loadable(() => import("./contact"));
const About = loadable(() => import("./about"));
const CloudPhone = loadable(() => import("./cloudphone"));
const Faq = loadable(() => import("./faq"));
const Pricing = loadable(() => import("./pricing"));
const VirtualPhone = loadable(() => import("./virtualphonenumber"));
const ClickWidget = loadable(() => import("./clicktocallwidget"));
const Download = loadable(() => import("./download"));
const Page = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const page = state.source[data.type][data.id];
  // const routePath =  state.router.link;
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const routePath =  state.router.link;
  // const [isLoading, setLoading] = useState(true)
  /**
   * prefetch once the post has loaded in the DOM
   */
   function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  //  useEffect(() => {
  //   actions.source.fetch("/");
  //   // List.preload();
  //   if(!data){

  //   }
  //   const scrollTop = async () => {
  //     await timeout(60);
  //     if(window.pageYOffset>200){
  //       window.scrollTo({ top: 0, behavior: "smooth" });
  //     }
  //   };
  //   scrollTop();
  //   // console.log('routePath', routePath)
  // }, [routePath]);


  // Load the post, but only if the data is ready.
  return (
    <Switch>
      {/* <Loader /> */}

      {/* <LoadComponent when={page} /> */}
     
      <CloudPhone when={state.router.link=='/cloud-phone/' } />
      <About when={state.router.link=='/about/' } />
      <VirtualPhone when={state.router.link=='/virtual-phone-number/' } />
      <Faq when={state.router.link=='/faqs/' } />
      <Pricing when={state.router.link=='/pricing/' } />
      <Contact when={state.router.link=='/contact-us/' } />
      <ClickWidget when={state.router.link=='/click-to-call-widget/' } />
      <Download when={state.router.link=='/download/' } />
      <ALterComponent when={page}/>
    </Switch>
  );
};
export default connect(Page);
const LoadComponent =  styled.div`
  display:block;
  height: 100vh;
  width: 100vw;
  background: green;
`
const ALterComponent =  styled.div`
  display:block;
  height: 100vh;
  width: 100vw;
  background: red;
`

