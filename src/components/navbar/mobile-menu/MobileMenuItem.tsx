import { FC, useState } from "react";
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
          duration: 5,
          delay: 5,
        },
      },
    },
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        y: {
          ease: AnimationConstants.cubic.easeEase,
          duration: 5,
          delay: 5,
        },
      },
    },
  };

  return (
    <AnimatePresence mode="sync">
      <motion.div
        className="menu-mobile-item-container"
        key={`mobileItem-${text}`}
        exit={{ opacity: 0, translateY: -200 }}
        initial={variants.hidden}
        animate={variants.visible}
        variants={variants}
      >
        <a href={link}>
          <p className="subtitle-primary-aluminor">{text}</p>
        </a>
        { isSelected && (
        <div className="menu-mobile-item-horizontal-separator"/>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileMenuItem;
