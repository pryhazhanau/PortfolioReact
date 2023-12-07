import "./GridBackground.css"
import FlexBox from "../../../../components/common/box/FlexBox"
import { motion } from "framer-motion"
import AnimationConstants from "../../../../components/common/animation/AnimationConstants"

const GridBackgroundMobile = () => {
  return (
    <>
      <FlexBox
        className="headline-grid-background"
      >
        <FlexBox
          justifyContent="space-between"
          width={"100%"}
        >
          <GridLine vertical={true} delayAnimation={0.5} />
          <GridLine vertical={true} delayAnimation={0} />
        </FlexBox>
      </FlexBox>
      <FlexBox
        className="headline-grid-background"
        padding={{ bottom: "calc(var(--navbar-height) + 50px)", top: 50, leading: 0, trailing: 0 }}
      >
        <FlexBox
          direction="column"
          justifyContent="space-between"
          width={"100%"}
        >
          <GridLine vertical={false} delayAnimation={0} />
          <GridLine vertical={false} delayAnimation={1} />
          <GridLine vertical={false} delayAnimation={0.5} />
          <GridLine vertical={false} delayAnimation={1} />
        </FlexBox>
      </FlexBox>
    </>
  )
}

const GridLine = ({
  vertical,
  delayAnimation,
}: {
  vertical: boolean;
  delayAnimation: number;
}) => {
  let divVariants

  if (vertical) {
    divVariants = {
      initial: { height: 1 },
      animate: {
        height: "100%",
        transition: {
          duration: 5,
          delay: delayAnimation,
          ease: AnimationConstants.cubic.easeEase,
        },
      },
    }
  } else {
    divVariants = {
      initial: { width: 0 },
      animate: {
        width: "100%",
        transition: {
          duration: 5,
          delay: delayAnimation,
          ease: AnimationConstants.cubic.easeEase,
        },
      },
    }
  }
  return (
    <motion.div initial="initial" animate="animate" variants={divVariants}>
      {" "}
      <FlexBox
        className={`headline-grid-line-${vertical ? "vertical" : "horizontal"}`}
      />
    </motion.div>
  )
}

export default GridBackgroundMobile
