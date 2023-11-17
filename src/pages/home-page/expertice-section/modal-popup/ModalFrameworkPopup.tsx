import { FC, useState, useEffect } from "react";
import "./ModalFrameworkPopup.css";
import ActionButton from "../../../../components/common/controls/action-button/ActionButton";
import { ReactSVG } from "react-svg";
import { motion, AnimatePresence } from "framer-motion";
import AnimationConstants from "../../../../components/common/animation/AnimationConstants";

import CrossImg from "../../../../assets/icons/icon-close.svg";

interface ModalFrameworkPopupProps {
  visible: boolean;
  framework: FrameworkObj | undefined;
  position: { left: number; top: number };
  targetSize: { height: number; width: number };
  onClose: () => void;
}

const navBarHeight = 70;
const modalMaxWidth = 500;
const modalMaxHeight = 400;

const ModalFrameworkPopup: FC<ModalFrameworkPopupProps> = ({
  visible,
  framework,
  position,
  targetSize,
  onClose,
}) => {
  const [initialScrollY, setInitialScrollY] = useState(0);

  useEffect(() => {
    // Set the initial scrollY value when the component mounts
    setInitialScrollY(window.scrollY);

    // Clean up event listener when the component unmounts
    return () => {
      // Remove any event listeners or perform cleanup here if needed
    };
  }, []);

  function handleScroll() {
    if (Math.abs(initialScrollY - window.scrollY) > 100) {
      onClose();
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);

  const documentWidth = window.screen.width;
  const mobilePaddings = 16;

  console.log(documentWidth);
  var modalSize: Size = { height: 0, width: 0 };
  var modalOrigin: Origin = { x: 0, y: 0 };
  if (documentWidth < modalMaxWidth) {
    modalSize = {
      width: documentWidth - mobilePaddings * 2,
      height: modalMaxHeight,
    };
    var modalOriginY =
      position.top - modalSize.height / 2 - targetSize.height / 2;
    if (modalOriginY < navBarHeight) {
      modalOriginY = navBarHeight + 16;
    }
    modalOrigin = { x: 16, y: modalOriginY };
  } else {
    var modalWidth =
      documentWidth - position.left < modalMaxWidth
        ? documentWidth - mobilePaddings * 2
        : modalMaxWidth;
    const rightSidePositionX = position.left + modalWidth;

    if (rightSidePositionX > documentWidth) {
      modalWidth -= rightSidePositionX - documentWidth;
    }

    modalSize = { height: modalMaxHeight, width: modalWidth };
    const modalOriginX =
      documentWidth < modalMaxWidth
        ? 0
        : position.left - modalWidth / 2 + targetSize.width / 2;
    var modalOriginY =
      position.top - modalSize.height / 2 - targetSize.height / 2;
    if (modalOriginY < navBarHeight) {
      modalOriginY = navBarHeight + mobilePaddings;
    }

    modalOrigin = { x: modalOriginX, y: modalOriginY };
  }

  const variantsBackground = getBackgroundAnimation(targetSize, modalSize);
  return (
    <>
      <div className="modal-background">
        <AnimatePresence>
          {visible && (
            <motion.div
              className="modal-container"
              style={{
                position: "absolute",
                top: `${modalOrigin.y}px`,
                left: `${modalOrigin.x}px`,
                width: modalSize.width,
              }}
              key={"modalOpen"}
              exit={variants.exit}
              initial={variants.initial}
              animate={variants.visible}
              variants={variants}
            >
              <div className="modal-close" onClick={onClose}>
                <ReactSVG src={CrossImg} />
              </div>
              <div className="modal-wrapper">
                <div className="title-container">
                  {framework?.img && <img src={framework?.img} />}
                  <p className="subtitle-primary-aluminor">{framework?.name}</p>
                </div>
                <p className="body-text-titanium">{framework?.description}</p>
                <ActionButton
                  label="More"
                  style="outline"
                  link={framework?.link}
                />
              </div>
            </motion.div>
          )}
          {documentWidth > modalMaxWidth && visible && (
            <motion.div
              className="animated-background"
              style={{
                position: "absolute",
                // top: `${position.top - targetSize.height / 2}px`,
                // left: `${position.left + targetSize.width / 2}px`,
                top: `calc(${modalOrigin.y}px + ${modalSize.height / 2}px)`,
                left: `calc(${modalOrigin.x}px + ${modalSize.width / 2}px)`,
                transform: "translate(-50%, -50%)",
              }}
              key={"modalBackground"}
              exit={variantsBackground.exit}
              initial={variantsBackground.initial}
              animate={variantsBackground.visible}
              variants={variantsBackground}
            >
              <p className="description-black">{framework?.name}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const timing = 0.5;
const exitTiming = 0.2;
const easeing = AnimationConstants.cubic.easeInOut;
const easeingExit = AnimationConstants.cubic.easeIn;
const variants = {
  visible: {
    scaleY: 1,
    scaleX: 1,
    opacity: 1,
    transition: {
      scaleY: {
        ease: easeing,
        duration: timing,
      },

      scaleX: {
        ease: easeing,
        duration: timing,
      },
      opacity: {
        ease: easeing,
        duration: timing,
      },
    },
  },
  initial: {
    scaleY: 0.06,
    scaleX: 0.2,
    opacity: 0,
    transition: {
      scaleY: {
        ease: easeing,
        duration: timing,
      },
      scaleX: {
        ease: easeing,
        duration: timing,
      },
      opacity: {
        ease: easeing,
        duration: timing,
      },
    },
  },
  exit: {
    scaleY: 0.06,
    scaleX: 0.2,
    opacity: 0,
    transition: {
      scaleY: {
        ease: easeingExit,
        duration: exitTiming,
      },
      scaleX: {
        ease: easeingExit,
        duration: exitTiming,
      },
      opacity: {
        ease: easeingExit,
        duration: exitTiming,
      },
    },
  },
};

const getBackgroundAnimation = (targetSize: any, modalSize: any) => {
  return {
    visible: {
      width: modalSize.width,
      height: modalSize.height,
      backgroundColor: "#000000",
      borderRadius: 32,
      opacity: 0,
      transition: {
        height: {
          ease: easeing,
          duration: timing,
        },
        width: {
          ease: easeing,
          duration: timing,
        },
        opacity: {
          ease: easeing,
          duration: timing / 3,
          delay: timing / 3,
        },
        backgroundColor: {
          duration: timing,
        },
        borderRadius: {
          ease: easeing,
          duration: timing,
        },
      },
    },
    initial: {
      width: targetSize.width,
      height: targetSize.height,
      backgroundColor: "#30F6AF",
      borderRadius: 16,
      opacity: 1,
      transition: {
        height: {
          ease: easeing,
          duration: timing,
        },
        width: {
          ease: easeing,
          duration: timing,
        },
        opacity: {
          ease: easeing,
          duration: timing,
        },
        backgroundColor: {
          duration: timing,
        },
        borderRadius: {
          ease: easeing,
          duration: timing,
        },
      },
    },
    exit: {
      width: targetSize.width,
      height: targetSize.height,
      opacity: 0,
      transition: {
        height: {
          ease: easeingExit,
          duration: exitTiming,
        },
        width: {
          ease: easeingExit,
          duration: exitTiming,
        },
        opacity: {
          ease: easeingExit,
          duration: exitTiming,
        },
      },
    },
  };
};

export default ModalFrameworkPopup;
