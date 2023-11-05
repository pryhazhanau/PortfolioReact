import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface FadeProps {
  children?: ReactNode;
  visible: boolean;
  className?: string;
}

export const FadeInOutBox: FC<FadeProps> = ({
  children,
  visible,
  className,
}) => {
  return (
      <AnimatePresence mode="popLayout">
        {visible ? (
          <motion.div
          className={className}
            key={"fadeInOut"}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
  );
};

export default FadeInOutBox;
