import React, { useState, useContext} from "react";
import { connect, styled } from "frontity";
import { Scrollspy } from 'reactstrap-scrollspy';

const Link = ({ state }) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];
    Scrollspy.defaultProps = {
        homeIndex: 0,
        topOffset: '50%',
        bottomOffset: '40%',
        delayMs: 50,
      }
    return(
        <div className="tabs__content">
                <Scrollspy names={data.id}>
                {item.acf.info.map((data,key) => {
                  return(
                    <div className="tabs__content-item" key={key}>
                      <h2 className="text-6" id={data.id}>{data.title}</h2>
                        <div dangerouslySetInnerHTML= {{__html:data.content}}/>
                    </div>
                  );})}
                  </Scrollspy>
                </div>
    )
}

export default connect(Link);