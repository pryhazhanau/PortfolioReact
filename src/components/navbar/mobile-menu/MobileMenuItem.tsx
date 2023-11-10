import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimationConstants from "../../common/animation/AnimationConstants";
import "./MobileMenuItem.css";

interface MobileMenuItemProps {
  text: string;
  link: string;
  isSelected: boolean;
  delayAnimation?: number;
}

const MobileMenuItem: FC<MobileMenuItemProps> = ({
  text,
  link,
  isSelected,
  delayAnimation,
}) => {
  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: {
          ease: AnimationConstants.cubic.easeEase,
          duration: 1,
          delay: delayAnimation,
        },
        opacity: {
          duration: 1,
          delay: delayAnimation,
        },
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        y: {
          ease: AnimationConstants.cubic.easeEase,
          duration: 1,
          delay: delayAnimation,
        },
        opacity: {
          duration: 1,
        },
      },
    },
  };

  return (
    <AnimatePresence mode="sync">
      <motion.div
        className="menu-mobile-item-container"
        key={`mobileItem-${text}`}
        exit={variants.hidden}
        initial={variants.hidden}
        animate={variants.visible}
        variants={variants}
      >
        <a href={link}>
          <p className="subtitle-primary-aluminor">{text}</p>
        </a>
        {isSelected && (
          <div className="menu-mobile-item-horizontal-separator" />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileMenuItem;
