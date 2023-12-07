import RealmImg from "../../../../assets/icons/frameworks/realm.png"
import WebRTCImg from "../../../../assets/icons/frameworks/webrtc.png"
import SwinjectImg from "../../../../assets/icons/frameworks/swinject.png"
import PureLayoutImg from "../../../../assets/icons/frameworks/pure-layout.png"
import MapKitImg from "../../../../assets/icons/frameworks/mapkit.png"
import CryptoKitImg from "../../../../assets/icons/frameworks/cripto-kit.png"
import CoreLocationImg from "../../../../assets/icons/frameworks/core-location.png"
import MoyaImg from "../../../../assets/icons/frameworks/moya.png"
import TextureImg from "../../../../assets/icons/frameworks/texture.png"
import NukeImg from "../../../../assets/icons/frameworks/nuke.png"
import FirebaseImg from "../../../../assets/icons/frameworks/firebase.png"
import TuistImg from "../../../../assets/icons/frameworks/tuist.png"
import { FrameworkObj } from "./FrameworkObj"

const FrameworksList: FrameworkObj[] = [
  {
    id: 0,
    name: "Realm",
    description:
      "Realm is a fast, scalable alternative to SQLite with mobile to cloud data sync that makes building real-time, reactive mobile apps easy.Realm is a fast, scalable alternative to SQLite with mobile to cloud data sync that makes building real-time, reactive mobile apps easy.",
    link: "https://realm.io",
    img: RealmImg,
  },
  {
    id: 1,
    name: "WebRTC",
    description:
      "WebRTC is an open-source project providing web browsers and mobile applications with real-time communication (RTC). It allows audio and video communication to work inside web pages by allowing direct peer-to-peer communication.",
    link: "https://webrtc.org",
    img: WebRTCImg,
  },
  {
    id: 3,
    name: "Swinject",
    description:
      "Swinject is a lightweight dependency injection framework for Swift. Dependency injection (DI) is a software design pattern that implements Inversion of Control (IoC) for resolving dependencies. In the pattern, Swinject helps your app split into loosely-coupled components, which can be developed, tested and maintained more easily. Swinject is powered by the Swift generic type system and first class functions to define dependencies of your app simply and fluently.",
    link: "https://github.com/Swinject/Swinject",
    img: SwinjectImg,
  },
  {
    id: 4,
    name: "PureLayout",
    description:
      "The ultimate API for iOS & OS X Auto Layout — impressively simple, immensely powerful. PureLayout extends UIView/NSView, NSArray, and NSLayoutConstraint with a comprehensive Auto Layout API that is modeled after Apple's own frameworks. PureLayout is a cross-platform Objective-C library that works (and looks!) great in Swift. It is fully backwards-compatible with all versions of iOS and OS X that support Auto Layout.",
    link: "https://github.com/PureLayout/PureLayout",
    img: PureLayoutImg,
  },
  {
    id: 5,
    name: "MapKit",
    description:
      "MapKit is a powerful API available on iOS devices that makes it easy to display maps, mark locations, enhance with custom data and even draw routes or other shapes on top.",
    link: "https://developer.apple.com/documentation/mapkit",
    img: MapKitImg,
  },
  {
    id: 6,
    name: "CoreText",
    description:
      "Core Text provides a low-level programming interface for laying out text and handling fonts. The Core Text layout engine is designed for high performance, ease of use, and close integration with Core Foundation. The text layout API provides high-quality typesetting, including character-to-glyph conversion, with ligatures, kerning, and so on. The complementary Core Text font technology provides automatic font substitution (cascading), font descriptors and collections, easy access to font metrics and glyph data, and many other features.",
    link: "https://developer.apple.com/documentation/coretext",
    img: undefined,
  },
  {
    id: 7,
    name: "CryptoKit",
    description:
      "Apple CryptoKit is a common cryptographic library. I designed for computing and comparing cryptographically secure digests. Public-key cryptography to create and evaluate digital signatures, and to perform key exchange. In addition to working with keys stored in memory, it can also use private keys stored in and managed by the Secure Enclave. Generate symmetric keys, and use them in operations like message authentication and encryption.",
    link: "https://developer.apple.com/documentation/cryptokit",
    img: CryptoKitImg,
  },
  {
    id: 8,
    name: "CoreLocation",
    description:
      "Core Location provides services that determine a device's geographic location, altitude, and orientation, or its position relative to a nearby iBeacon device. The framework gathers data using all available components on the device, including the Wi-Fi, GPS, Bluetooth, magnetometer, barometer, and cellular hardware.",
    link: "https://developer.apple.com/documentation/corelocation",
    img: CoreLocationImg,
  },
  { id: 9, name: "Moya", description: "Moya is a network abstraction layer written in Swift that is used for building iOS apps. It provides a cleaner and more concise way to interact with web services by abstracting away the details of the network layer. Moya is built on top of Alamofire, a popular networking library in the Swift and iOS development ecosystem.", link: "https://github.com/Moya/Moya", img: MoyaImg },
  {
    id: 10,
    name: "Texture",
    description:
      "Texture is an iOS framework built on top of UIKit that keeps even the most complex user interfaces smooth and responsive. It was originally built to make Facebook's Paper possible, and goes hand-in-hand with pop's physics-based animations — but it's just as powerful with UIKit Dynamics and conventional app designs. More recently, it was used to power Pinterest's app rewrite.",
    link: "https://texturegroup.org",
    img: TextureImg,
  },
  { id: 11, name: "CoreAnimation", description: "Core Animation provides high frame rates and smooth animations without burdening the CPU and slowing down your app. Most of the work required to draw each frame of an animation is done for you. You configure animation parameters such as the start and end points, and Core Animation does the rest, handing off most of the work to dedicated graphics hardware, to accelerate rendering.", link: "https://developer.apple.com/documentation/quartzcore", img: undefined },
  { id: 12, name: "Nuke", description: "Nuke simplifies the process of loading and displaying images in your app while providing advanced features for efficient image caching, pre-fetching, and processing. Please note that the information provided here is based on the state of the Nuke framework as of that time, and there may have been updates or changes since then.", link: "https://github.com/kean/Nuke", img: NukeImg },
  {
    id: 13,
    name: "CocoaAsyncSocket",
    description: "CocoaAsyncSocket provides easy-to-use and powerful asynchronous socket libraries for macOS, iOS, and tvOS. ",
    link: "https://github.com/robbiehanson/CocoaAsyncSocket",
    img: undefined,
  },
  {
    id: 14,
    name: "FBSnapShotTestCases",
    description: "A 'snapshot test case' takes a configured UIView or CALayer and uses the necessary UIKit or Core Animation methods to generate an image snapshot of its contents. It compares this snapshot to a 'reference image' stored in your source code repository and fails the test if the two images don't match.",
    link: "https://github.com/uber/ios-snapshot-test-case/",
    img: undefined,
  },
  { id: 15, name: "Firebase", description: "Firebase is a comprehensive mobile and web development platform provided by Google. It offers a wide range of tools and services that help developers build, improve, and grow their apps. Firebase is platform-agnostic, which means it can be used for both iOS and Android development, as well as web applications. Here, I'll provide an overview of Firebase in the context of iOS development.", link: "https://firebase.google.com", img: FirebaseImg },
  { id: 16, name: "Tuist", description: "Tuist is a command line tool (CLI) that aims to facilitate the generation, maintenance, and interaction with Xcode projects. It's distributed as a binary, which you can easily install and use without having to depend on other tools to manage dependencies.", link: "https://tuist.io", img: TuistImg },
]

export default FrameworksList