import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import SolutionSlot from "./solutionSlot";
import Loading from "../../loading";
const Solution = ({ state }) => {
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
      await timeout(200);
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
  return (
    <>
      {pageItem && <Loading/>}
      {!pageItem && <SolutionSlot page={item}/>}
    </>
  ); 
};
export default connect(Solution);

