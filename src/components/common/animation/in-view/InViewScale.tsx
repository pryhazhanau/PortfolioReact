import { FC, ReactNode, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { CSSProperties } from "styled-components";

interface InViewScaleProps {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  initialScale?: number;
  completion?: () => void;
}

const DEFAULT_DURATION = 0.6
const DEFAULT_DELAY = 0.2

export const InViewScale: FC<InViewScaleProps> = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const componentStyle = {
    transform: `scale(${isInView ? 1 : props.initialScale})`,
    opacity: isInView ? 1 : 0,
    transition: `all ${
      props.duration ?? DEFAULT_DURATION
    }s cubic-bezier(0.17, 0.55, 0.55, 1) ${props.delay ?? DEFAULT_DELAY}s`,
  };

  useEffect(() => {
    if (isInView) {
        setTimeout(() => {
            if (props.completion) {
                props.completion()
            }
        }, (props.duration ?? DEFAULT_DURATION) * 1000 + (props.delay ?? DEFAULT_DELAY) * 1000)
    }
    return () => {};
  }, [isInView]);

  const style = { ...props.style, ...componentStyle };

  return (
    <div ref={ref} style={style}>
      {props.children}
    </div>
  );
};
