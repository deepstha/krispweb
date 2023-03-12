import React, { useState, useEffect } from "react";
import { connect, styled } from "frontity";
import Loader from "../common/loader";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
// import Lottie from 'lottie-react-web';

const LottiePlayer = ({ lottieItem }) => {
  const [animationData, setAnimationData] = useState();

  useEffect(() => {
    setAnimationData(lottieItem);
    console.log('rendered useEffect animationData here', animationData);
  }, []);

    // const dataOption = {
    //     loop: true,
    //     autoplay: true,
    //     path: lottieItem,
    //     rendererSettings: {
    //       preserveAspectRatio: "xMidYMid slice"
    //     }
    //   };
      // const loadAnim = () => {
      //   return (
      //     // console.log('function loaded'),
      //     <div>function loaded here</div>
      //   )

      // }
      // useEffect(() => {
      //   loadAnim() 
        
      //   console.log('lottie loadd');
      //   return () => {
      //     dataOption.destroy();
      //     // console.log('lottie destroyed');
      //   };
      // }, []);
      // if (!animationData) return <div c>Loading...</div>;
    return (
      console.log('rendered animationData here', animationData),
      <>
        {/* <Lottie options={dataOption} /> */}
        {!animationData && <Loader addClass="preloader-sm"/>}
        {animationData && <Player autoplay loop lazyLoad src={animationData}></Player>}
      </>

      
    )
}
export default connect(LottiePlayer);
