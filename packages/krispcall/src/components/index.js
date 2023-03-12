import { useEffect, useState} from "react";
import { Global, connect, styled, Head, loadable } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./footer";
import Loader from "./common/loader";
import Title from "./title";
import List from "./list";
import MainCss from "../assets/css/main.min.css"

const Post = loadable(() => import("./post"));
const Page = loadable(() => import("./pages"));
const Home = loadable(() => import("./pages/home"));
const Alternative = loadable(() => import("./pages/compare"));
const Integration = loadable(() => import("./pages/integration"));
const Solutions = loadable(() => import("./pages/solutions"));
const Policies = loadable(() => import("./pages/policies"));
const PageError = loadable(() => import("./page-error"));



/**
 * Wrapper is the root React component of our Wrapper. The one we will export
 * in roots.
 */
const Theme = ({ state, actions }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const routePath =  state.router.link;
  const [isLoading, setLoading] = useState(false)
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  useEffect(() => {
    let mounted = true;
    // actions.source.fetch("/");
    // List.preload();
    const scrollTop = async () => {
      await timeout(500);
      // document.querySelector('.hero-panel').classList.add('loadingClass');
      if(window.pageYOffset !==0  && routePath !== '/' ){
        window.scrollTo(0, 0);
        if (mounted) {
          setLoading(false);
        }
      }
    };
    scrollTop();
    return() => {
      mounted = false;
      const asyncLoad = async () => {
        setLoading(true);
        await timeout(500);
        setLoading(false);
      }
      asyncLoad();
    }; 
  }, [routePath]);

  return (
    console.log('checking', data),
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={MainCss} />
      <div className="theme-wrapper">
        <Header />
        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
         <main className="body-margin">
          <Switch 
            className="react-switch"
            onChange={() => { console.log('loading on switch')}}>
            {isLoading && <Loader/>}
            <Loader when={data.isFetching} />
            {/* <LoadComponent when={!page}/> */}
            {/* <List when={data.isArchive} /> */}
            <Home when={data.isHome} /> 
            <Post when={data.isPost} />
            <Page when={data.isPage} />
            <Alternative when={data.isCompare}/>
            <Integration when={data.isIntegration}/>
            <Solutions when={data.isSolutions}/>
            <Policies when={data.isPolicies}/>
            <PageError when={data.isError} />
          </Switch>
        </main>
        {/* <Footer/> */}
        {!isLoading && <Footer/>}
      </div>
    </>
  );
};
export default connect(Theme);
const ThemeWrapper = styled.div(MainCss)

const LoadComponent =  styled.div`
  display:block;
  height: 100vh;
  width: 100vw;
  background: red;
`