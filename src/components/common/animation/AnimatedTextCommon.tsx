import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface AnimatedTextCommonProps {
  children?: ReactNode;
  animKey: string;
}

export const AnimatedTextCommon: FC<AnimatedTextCommonProps> = ({
  children,
  animKey,
}) => {
  return (
      <AnimatePresence mode="wait">
        <motion.div style={{originY: 0}}
          key={animKey}
          initial={{ opacity: 0, scaleY: 0.7 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{
            type: "keyframe",
            duration: 0.2,
            ease: "easeIn"
          }}
        >
            {children}
        </motion.div>
      </AnimatePresence>
  );
};

export default AnimatedTextCommon;