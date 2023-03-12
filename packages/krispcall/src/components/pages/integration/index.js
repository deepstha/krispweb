import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import Loading from "../../loading";
import IntegrationSlot from "./integrationSlot";
const Integration = ({ state }) => {
  const data = state.source.get(state.router.link);
  const item = state.source[data.type][data.id];
  const title = item.title.rendered;
  const [pageItem, setPageItem ] = useState(false)
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  useEffect(() => {
    let isUpdated = false;
    const cleanUp = async () => {
      await timeout(100);
      if(!isUpdated) {
        setPageItem(false);
      }
    };
    cleanUp();
    return () => {
      isUpdated = true;
      setPageItem(true);  
    };
  }, [title])
  const integrationBanner = {
    loop: true,
    autoplay: true,
    path: item.acf.banner.lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };0
  const integrationLottie = {
      loop: true,
      autoplay: true,
      path: item.acf.feature.lottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
  };
  return (
    <>
    {pageItem && <Loading/>}
    {!pageItem && <IntegrationSlot page={item}/>}
  </>
    );
};
export default connect(Integration);
