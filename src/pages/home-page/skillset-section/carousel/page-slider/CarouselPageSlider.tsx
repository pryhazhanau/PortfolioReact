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
  const elements = Array.from({ length: totalNumber - cardsInView + 1 }, (_, index) => index);

  return (
    <FlexBox
      className="carousel-page-slider-wrapper"
      gap={10}
      margin={{ top: 6 }}
      padding={{ top: 8, bottom: 8, leading: 8, trailing: 8 }}
    >
      {elements.map((index) => (
        <div key={index}>
          <Dot
            active={isDotActive(index, currentIndex)}
          />
        </div>
      ))}
    </FlexBox>
  );
};

function isDotActive(
  dotIndex: number,
  currentIndex: number
) {
  return dotIndex == currentIndex
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
