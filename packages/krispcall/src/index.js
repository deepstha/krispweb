import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import mHandler from "./components/handlers/mhandler";
import tHandler from "./components/handlers/thandler";
import fHandler from "./components/handlers/fhandler";
// import bHandler from "./components/handlers/bhandler";


const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      routeLinks: [
        '/menu/nav-menu',
        '/menu/foot-menu',
        '/menu/policy-menu',
        '/menu/social-menu',
        '/menu/intl-menu',
        '/menu/social-menu',
        '/components/testimonial',
        '/footer/cta',
        '/brand/slider'
      ],
      featured: {
        showOnList: false,
        showOnPost: false
      }
    }
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        // console.log("log before use setTimeout function");
        // setTimeout(()=>{
        //     console.log("running page");
        // },1000);
        const promises = state.theme.routeLinks.map(async routes => {
          await actions.source.fetch(routes);
        });
        await Promise.all(promises);
      },
    }
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link]
    },
    source: {
      handlers: [mHandler, tHandler, fHandler],
    },
  }
};

export default marsTheme;
