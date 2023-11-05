import BubbleButton from "../../../common/controls/bubble-button/BubbleButton";
import "./FrameworksBlock.css";

function FrameworksBlock() {
  return (
    <>
      <div className="frameworks-block-wrapper">
        <div className="frameworks-block-inner">
            <p className="subtitle-secondary frameworks-title">Frameworks and libraries I love</p>
            <p className="body-text-spacero"></p>
            <div className="framework-flex-box">
            {frameworksList.map((item) => (
                <div key={item.id}>
                  <BubbleButton label={item.name} active={false}/>
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  );
}

const frameworksList = [
    { id: 0, name: "Realm" },
    { id: 1, name: "WebRTC" },
    { id: 3, name: "Swinject" },
    { id: 4, name: "PureLayout" },
    { id: 5, name: "MapKit" },
    { id: 6, name: "CoreText" },
    { id: 7, name: "CryptoKit" },
    { id: 8, name: "CoreLocation" },
    { id: 9, name: "Moya" },
    { id: 10, name: "Texture" },
    { id: 11, name: "CoreAnimation" },
    { id: 12, name: "Nuke" },
    { id: 13, name: "Crashlytics" },
    { id: 14, name: "CocoaAsyncSocket" },
    { id: 15, name: "FBSnapShotTestCases" },
    { id: 16, name: "Firebase" },
    { id: 17, name: "Tuist" },
]

export default FrameworksBlock;
