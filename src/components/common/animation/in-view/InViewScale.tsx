import { FC, ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import { CSSProperties } from "styled-components";

interface InViewScaleProps {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  initialScale?: number;
}

export const InViewScale: FC<InViewScaleProps> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const componentStyle = {
    transform: `scale(${isInView ? 1 : props.initialScale})`,
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
