import { useState, MouseEvent } from "react";
import BubbleButton from "../../../../components/common/controls/bubble-button/BubbleButton";
import ModalPopup from "../modal-popup/ModalFrameworkPopup";
import FrameworksList from "./FrameworksList";
import "./FrameworksBlock.css";
import Text from "../../../../components/common/style/Text";
import { Typography } from "../../../../components/common/style/interface/Typography";
import { Colors } from "../../../../components/common/style/interface/Colors";
import { FrameworkObj } from "./FrameworkObj";

function FrameworksBlock() {
  const [selectedFramework, setSelectedFramework] = useState<
    FrameworkObj | undefined
  >(undefined);
  const [activeButtonId, setButtonId] = useState<number | undefined>(undefined);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [targetSize, setTargetSize] = useState<{
    height: number;
    width: number;
  }>({ height: 0, width: 0 });

  const handleButtonClick = (e: MouseEvent<HTMLDivElement>) => {
    const buttonRect = e.currentTarget.getBoundingClientRect();

    const modalPosition = {
      top: buttonRect.bottom,
      left: buttonRect.left,
    };

    const buttonSize = {
      height: buttonRect.height,
      width: buttonRect.width,
    };

    setPosition(modalPosition);
    setTargetSize(buttonSize);
  };

  const closeModal = () => {
    setSelectedFramework(undefined);
    setButtonId(undefined);
  };

  return (
    <>
      <div className="frameworks-block-wrapper">
        <div className="frameworks-block-inner">
          <Text
            className="frameworks-title"
            text=" Frameworks and libraries I know well and frequenlty use in my daily work."
            typography={Typography.BodyText}
            color={Colors.TitaniumGray}
          />
          <p className="body-text-spacero"></p>
          <div className="framework-flex-box">
            {FrameworksList.map((item) => (
              <div key={item.id}>
                <BubbleButton
                  label={item.name}
                  active={item.id === activeButtonId}
                  onClick={(e) => {
                    setSelectedFramework(item);
                    setButtonId(item.id);
                    handleButtonClick(e);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <ModalPopup
          visible={selectedFramework != undefined}
          framework={selectedFramework}
          position={position}
          targetSize={targetSize}
          onClose={closeModal}
        />
      </div>
    </>
  );
}

export default FrameworksBlock;
