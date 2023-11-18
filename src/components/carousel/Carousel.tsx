import { FC, useState, useEffect, CSSProperties } from "react";
import "./Carousel.css";
import { ReactSVG } from "react-svg";

import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";

const cardMaxWidth = 320;
const arrowBlockWidth = 50;

interface CarouselProps {
  children: JSX.Element[];
}

const Carousel: FC<CarouselProps> = ({ children }) => {
  const [cardsInView, setCardsInView] = useState(
    getCardsInView(window.screen.width)
  );
  const [cardWidth, setCardWidth] = useState(cardMaxWidth);
  const [currentWidth, setCurrentWidth] = useState(window.screen.width);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleResize = () => {
    setCardsInView(getCardsInView(window.screen.width));
    setCardWidth(
      window.screen.width < cardMaxWidth + arrowBlockWidth * 2
        ? window.screen.width - arrowBlockWidth * 2
        : cardMaxWidth
    );
    setCurrentWidth(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardsGap = 24;
  const containerPaddings = 16;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % children.length;
      return nextIndex + cardsInView > children.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const lastIndex = children.length - 1;
      return prevIndex === 0
        ? lastIndex - cardsInView + 1
        : (prevIndex - 1 + children.length) % children.length;
    });
  };

  const cards = () => {
    return children.map((child, index) => (
      <div
        key={index}
        style={{
          flex: `0 0 ${cardWidth}px`,
          width: cardWidth,
        }}
      >
        {child}
      </div>
    ));
  };

  return (
    <div
      className="carousel-wrapper"
      style={{ flexDirection: currentWidth > 600 ? "row" : "column" }}
    >
      {currentWidth > 600 && <Arrow direction="left" onClick={prevSlide} />}
      <div
        style={{
          width: `${
            cardWidth * cardsInView +
            (cardsInView - 1) * cardsGap +
            containerPaddings * 2
          }px`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: containerPaddings,
            gap: cardsGap,
            transform: `translateX(-${
              currentIndex * (cardWidth + cardsGap)
            }px)`,
            transition: "transform 0.2s ease-in",
          }}
        >
          {cards()}
        </div>
      </div>
      {currentWidth > 600 ? (
        <Arrow direction="right" onClick={nextSlide} />
      ) : (
        <div className="corousel-mobile-arrow-container ">
          <Arrow direction="left" onClick={prevSlide} />
          <Arrow direction="right" onClick={nextSlide} />
        </div>
      )}
    </div>
  );
};

// Carousel Arrows
interface ArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

const Arrow: FC<ArrowProps> = ({ direction, onClick }) => {
  var style: CSSProperties;
  if (direction === "right") {
    style = {
      paddingLeft: 2,
    };
  } else {
    style = {
      paddingRight: 2,
    };
  }
  return (
    <div className="carousel-arrow-container">
      <div className="carousel-arrow" onClick={onClick}>
        <ReactSVG
          style={style}
          src={direction == "right" ? ArrowRight : ArrowLeft}
        />
      </div>
    </div>
  );
};

const getCardsInView = (width: number) => {
  if (width > 1200) {
    return 3;
  }
  if (width < 900) {
    return 1;
  }
  if (width < 1200) {
    return 2;
  }
  return 3;
};

export default Carousel;
