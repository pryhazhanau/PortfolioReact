import TechObject from "./tech-block/TechObject"
import Xcode from "../../../assets/technology/Xcode.svg"
import TestFlight from "../../../assets/technology/TestFlight.svg"
import Figma from "../../../assets/technology/Figma.svg"
import Github from "../../../assets/technology/GitHub.svg"
import Bitrise from "../../../assets/technology/Bitrise.svg"
import Fastlane from "../../../assets/technology/Fastlane.svg"
import Swift from "../../../assets/technology/Swift.svg"
import Firebase from "../../../assets/technology/Firebase.svg"
import Jira from "../../../assets/technology/Jira.svg"

export const TechList: TechObject[] = [
  {
    id: 0,
    name: "Swift",
    url: "https://developer.apple.com/swift",
    img: Swift,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#eb633e` }}>
        Swift
      </p>
    ),
  },
  {
    id: 1,
    name: "Test Flight",
    url: "https://developer.apple.com/testflight",
    img: TestFlight,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#3977cf` }}>
        Test Flight
      </p>
    ),
  },
  {
    id: 2,
    name: "Xcode",
    url: "https://developer.apple.com/xcode",
    img: Xcode,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#3977cf` }}>
        Xcode
      </p>
    ),
  },
  {
    id: 3,
    name: "Figma",
    url: "https://www.figma.com",
    img: Figma,
    jsxElement: (
      <>
        <p className="subtitle-primary figma-red">F</p>
        <p className="subtitle-primary figma-light-red">i</p>
        <p className="subtitle-primary figma-purple">g</p>
        <p className="subtitle-primary figma-blue">m</p>
        <p className="subtitle-primary figma-green">a</p>
      </>
    ),
  },
  {
    id: 4,
    name: "Github",
    url: "https://github.com",
    img: Github,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#5b686e` }}>
        Github
      </p>
    ),
  },
  {
    id: 5,
    name: "Bitrise",
    url: "https://bitrise.io",
    img: Bitrise,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#54227d` }}>
        Bitrise
      </p>
    ),
  },
  {
    id: 6,
    name: "Fastlane",
    url: "https://fastlane.tools",
    img: Fastlane,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#F6F6F6` }}>
        Fastlane
      </p>
    ),
  },
  {
    id: 7,
    name: "Firebase",
    url: "https://firebase.google.com",
    img: Firebase,
    jsxElement: (
      <p className="subtitle-primary" style={{ color: `#f7cf56` }}>
        Firebase
      </p>
    ),
  },
  {
    id: 8,
    name: "Jira Software",
    url: "https://www.atlassian.com/software/jira",
    img: Jira,
    jsxElement: (
      <>
        <p className="subtitle-primary" style={{ color: `#417eef` }}>
          Jira <span className="subtitle-primary-aluminor">Software</span>
        </p>
      </>
    ),
  },
]