import { FC } from "react";
import "./CarouselPageSlider.css";
import FlexBox from "../../../../../components/common/box/FlexBox";

interface CarouselPageSliderProps {
  cardsInView: number;
  currentIndex: number;
  totalNumber: number;
}

const CarouselPageSlider: FC<CarouselPageSliderProps> = ({
  cardsInView,
  currentIndex,
  totalNumber,
}) => {
  return (
    <FlexBox
      className="carousel-page-slider-wrapper"
      gap={10}
      margin={{ top: 6 }}
      padding={{ top: 8, bottom: 8, leading: 8, trailing: 8 }}
    >
      <Dot active={isDotActive(0, currentIndex, cardsInView, totalNumber)} />
      <Dot active={isDotActive(1, currentIndex, cardsInView, totalNumber)} />
      <Dot active={isDotActive(2, currentIndex, cardsInView, totalNumber)} />
      <Dot active={isDotActive(3, currentIndex, cardsInView, totalNumber)} />
      <Dot active={isDotActive(4, currentIndex, cardsInView, totalNumber)} />
    </FlexBox>
  );
};

function isDotActive(
  dotIndex: number,
  currentIndex: number,
  cardsInView: number,
  totalNumber: number
) {
  let lastActiveIndex = Math.min(
    currentIndex + cardsInView - 1,
    totalNumber - 1
  );
  return dotIndex >= currentIndex && dotIndex <= lastActiveIndex;
}

interface DotProps {
  active?: boolean;
}

const Dot: FC<DotProps> = ({ active }) => {
  return (
    <div
      className="carousel-slider-dot"
      style={{
        backgroundColor: `${
          active ? "var(--velaro--text)" : "var(--spacero--gray)"
        }`,
      }}
    />
  );
};

export default CarouselPageSlider;
