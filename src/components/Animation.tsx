import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
// import { Slide } from 'react-awesome-reveal';
import styles from "../styles/components/MiddleBlock.module.scss";
// import { Button } from './Button';

interface AnimationProps {
  loop: boolean;
  autoplay: boolean;
  file: string;
}

export default function Animation({ loop, autoplay, file }: AnimationProps) {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: loop,
      autoplay: autoplay,
      animationData: require(`../content/Animations/${file}`),
    });
  }, []);
  return <div className="container" ref={container}></div>;
}
