import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface FadeProps {
  children?: ReactNode;
  visible: boolean;
}

export const FadeInOutBox: FC<FadeProps> = ({ children, visible }) => {
  return (
    <AnimatePresence mode="popLayout" presenceAffectsLayout={false}>
        {visible ? 
      <motion.div
        key={"fadeInOut"}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "ease" }}
      >
        {children}
      </motion.div> : null}
    </AnimatePresence>
  );
};

export default FadeInOutBox;
