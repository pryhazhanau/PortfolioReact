import { AnimatePresence, motion } from "framer-motion"
import { FC, ReactNode } from "react"

interface AnimatedTextLongFadeProps {
    children?: ReactNode;
    animKey: string;
    delay?: number
  }
  
  export const AnimatedTextLongFade: FC<AnimatedTextLongFadeProps> = ({
    children,
    animKey,
    delay
  }) => {
    return (
        <AnimatePresence mode="wait">
          <motion.div style={{originY: 0}}
            key={animKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "keyframe",
              duration: 1,
              ease: "easeIn",
              delay: delay 
            }}
          >
              {children}
          </motion.div>
        </AnimatePresence>
    )
  }
  
  export default AnimatedTextLongFade
  