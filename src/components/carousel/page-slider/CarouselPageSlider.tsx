import { FC } from "react";
import "./CarouselPageSlider.css"

interface CarouselPageSliderProps {
  cardsInView: number;
  currentIndex: number;
  totalNumber: number
}

const CarouselPageSlider: FC<CarouselPageSliderProps> = ({cardsInView, currentIndex, totalNumber}) => {


  return (
    <div className="carousel-page-slider-wrapper">
      <Dot active={isDotActive(0, currentIndex, cardsInView, totalNumber)}/>
      <Dot active={isDotActive(1, currentIndex, cardsInView, totalNumber)}/>
      <Dot active={isDotActive(2, currentIndex, cardsInView, totalNumber)}/>
      <Dot active={isDotActive(3, currentIndex, cardsInView, totalNumber)}/>
      <Dot active={isDotActive(4, currentIndex, cardsInView, totalNumber)}/>
    </div>
  );
};

function isDotActive(dotIndex: number, currentIndex: number, cardsInView: number, totalNumber: number) {
  let lastActiveIndex = Math.min(currentIndex + cardsInView - 1, totalNumber - 1);
  return dotIndex >= currentIndex && dotIndex <= lastActiveIndex;
}

interface DotProps {
  active?: boolean;
}

const Dot: FC<DotProps> = ({active}) => {
  return (
    <div className="carousel-slider-dot" style={{backgroundColor: `${active ? "var(--velaro--text)" : "var(--spacero--gray)"}`}}/>
  )
}

export default CarouselPageSlider