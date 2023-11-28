import { FC, ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import { CSSProperties } from "styled-components";

interface InViewSlideProps {
  children?: ReactNode;
  direction: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  transition?: number;
}

export const InViewSlide: FC<InViewSlideProps> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const componentStyle = {
    transform: isInView ? `none` : getTranslate(props.direction, props.transition),
    opacity: isInView ? 1 : 0,
    transition: `all ${
      props.duration ?? 0.6
    }s cubic-bezier(0.17, 0.55, 0.55, 1) ${props.delay ?? 0.2}s`,
  };

  const style = { ...props.style, ...componentStyle };

  return (
    <div ref={ref} style={style}>
      {props.children}
    </div>
  );
};

function getTranslate(direction: string, transition?: number) {
    const defaultTransition = 200

  switch (direction) {
    case "left":
      return `translateX(${transition ?? defaultTransition}px)`;
    case "right":
      return `translateX(-${transition ?? defaultTransition}px)`;
    case "top":
      return `translateY(${transition ?? defaultTransition}px)`;
    case "bottom":
      return `translateY(-${transition ?? defaultTransition}px)`;
    default:
      break;
  }
}
