import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";
import AnimConstants from "../../common/animation/AnimationConstants"

interface AnimatedTextCommonProps {
  className?: string;
  children?: ReactNode;
  animKey: string;
}

export const AnimatedTextCommon: FC<AnimatedTextCommonProps> = ({
  children,
  animKey,
  className
}) => {
  return (
      <AnimatePresence mode="wait">
        <motion.div className={className} style={{originY: 0}}
          key={animKey}
          initial={{ opacity: 0, scaleY: 0.7 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{
            type: "keyframe",
            duration: 0.7,
            ease: AnimConstants.cubic.easeEase
          }}
        >
            {children}
        </motion.div>
      </AnimatePresence>
  );
};

export default AnimatedTextCommon;