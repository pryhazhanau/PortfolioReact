import { useEffect, useRef, MouseEvent, FC } from "react";
import "./PixelHeart.css";

interface PixelHeartProps {
    beatIntervalS: number;
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

interface IPixel {
  position: Origin;
  increasingAlpha: boolean;
  draw: (ctx: CanvasRenderingContext2D) => void;
  hash: string;
  rgb: RGB;
  alpha: number;
  expandDirection?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "none";
  lastUpdatedDirection?: number;
  isInitialPixel?: boolean;
  currentRange: number;
}

const PIXEL_SIZE = 10;
const CANVAS_WIDTH = PIXEL_SIZE * 17;
const CANVAS_HEIGHT = PIXEL_SIZE * 15;
const CANVAS_FPS = 1 / 30;
let MOUSE_HOVER_REPEAT_DURATION = 6 * 1000;

const HEART_RGB: RGB = { r: 48, g: 255, b: 175 };
const GLARE_RGB: RGB = { r: 255, g: 30, b: 155 };
const GLARE_ALPHA = 0.7;

const pixelsDict: { [key: string]: IPixel } = {};
const glarePixelsDict: { [key: string]: IPixel | null } = {};

const PixelHeart: FC<PixelHeartProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  let currentMousePos: Point | null;
  let isMouseHover = false;
  MOUSE_HOVER_REPEAT_DURATION = props.beatIntervalS * 1000
    moveMouseOverHeart(() => {
        return isMouseHover
    }, () => {
        currentMousePos = {x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2}
    }, () => {
        currentMousePos = null
    });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var allPixels: IPixel[] = [];
      const column1 = getColumnPixels(0, 2, 5, []);
      const column2 = getColumnPixels(1, 1, 7, []);
      const column3 = getColumnPixels(2, 0, 8, [3, 4]);
      const column4 = getColumnPixels(3, 0, 9, [2, 3]);
      const column5 = getColumnPixels(4, 0, 10, [2]);
      const column6 = getColumnPixels(5, 0, 11, []);
      const column7 = getColumnPixels(6, 1, 12, []);
      const column8 = getColumnPixels(7, 2, 13, []);
      const column9 = getColumnPixels(8, 3, 14, []);
      const column10 = getColumnPixels(9, 2, 13, []);
      const column11 = getColumnPixels(10, 1, 12, []);
      const column12 = getColumnPixels(11, 0, 11, []);
      const column13 = getColumnPixels(12, 0, 10, []);
      const column14 = getColumnPixels(13, 0, 9, []);
      const column15 = getColumnPixels(14, 0, 8, []);
      const column16 = getColumnPixels(15, 1, 7, []);
      const column17 = getColumnPixels(16, 2, 5, []);

      allPixels = allPixels
        .concat(column1)
        .concat(column2)
        .concat(column3)
        .concat(column4)
        .concat(column5)
        .concat(column6)
        .concat(column7)
        .concat(column8)
        .concat(column9)
        .concat(column10)
        .concat(column11)
        .concat(column12)
        .concat(column13)
        .concat(column14)
        .concat(column15)
        .concat(column16)
        .concat(column17);

      allPixels.forEach((pixel) => {
        pixel.draw(ctx);
      });

      if (currentMousePos) {
        const x = Math.max(Math.floor(currentMousePos.x / PIXEL_SIZE), 0);
        const y = Math.max(Math.floor(currentMousePos.y / PIXEL_SIZE), 0);
        const hash = calculateHash(x, y);
        const glarePixels: IPixel[] = [];

        const rgb = GLARE_RGB;
        const pixel = Pixel({
          position: { x: x, y: y },
          increasingAlpha: false,
          draw: (ctx) => {
            ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1})`;
            ctx.fillRect(
              x * PIXEL_SIZE,
              y * PIXEL_SIZE,
              PIXEL_SIZE,
              PIXEL_SIZE
            );
          },
          hash: `${hash}`,
          rgb: rgb,
          alpha: GLARE_ALPHA,
          isInitialPixel: true,
          currentRange: 0,
        });

        glarePixels.push(pixel);

        glarePixels.forEach((pixel) => {
          glarePixelsDict[pixel.hash] = pixel;
        });
      }

      for (let key in glarePixelsDict) {
        let pixel = glarePixelsDict[key];

        if (!pixel) {
          continue;
        }

        const pixelRangeStep = 1;

        const createNextGlareWave = (pixel: IPixel) => {
          const timeDiff = Date.now() - (pixel.lastUpdatedDirection ?? 0);
          if (timeDiff < 50) {
            return [];
          }

          var newPixels: IPixel[] = [];
          for (let i = pixel.currentRange ?? 0; i < 10; i++) {
            let newPixel = Pixel(pixel);
            if (pixel.expandDirection == "top") {
              newPixel.position.y -= pixelRangeStep
              newPixel.hash = calculateHash(
                newPixel.position.x,
                newPixel.position.y
              );
              newPixel.currentRange += 1;

              if (glarePixelsDict[newPixel.hash] == null) {
                for (let j = 0; j < 3; j++) {
                    let neigborPixel1 = Pixel(newPixel)
                    neigborPixel1.position.x += j
                    neigborPixel1.hash = calculateHash(neigborPixel1.position.x, neigborPixel1.position.y);
                    neigborPixel1.lastUpdatedDirection = Date.now()
                    newPixels.push(neigborPixel1)

                    let neigborPixel2 = Pixel(newPixel)
                    neigborPixel2.position.x -= j
                    neigborPixel2.hash = calculateHash(neigborPixel2.position.x, neigborPixel2.position.y);
                    neigborPixel2.lastUpdatedDirection = Date.now()
                    newPixels.push(neigborPixel2)
                }
                newPixel.lastUpdatedDirection = Date.now()
                newPixels.push(newPixel);
              }
            }

            if (pixel.expandDirection == "right") {
                newPixel.position.x += pixelRangeStep
                newPixel.hash = calculateHash(
                  newPixel.position.x,
                  newPixel.position.y
                );
                newPixel.currentRange += 1;
  
                if (glarePixelsDict[newPixel.hash] == null) {
                    for (let j = 0; j < 3; j++) {
                        let neigborPixel1 = Pixel(newPixel)
                        neigborPixel1.position.y += j
                        neigborPixel1.hash = calculateHash(neigborPixel1.position.x, neigborPixel1.position.y);
                        neigborPixel1.lastUpdatedDirection = Date.now()
                        newPixels.push(neigborPixel1)

                        let neigborPixel2 = Pixel(newPixel)
                        neigborPixel2.position.y -= j
                        neigborPixel2.hash = calculateHash(neigborPixel2.position.x, neigborPixel2.position.y);
                        neigborPixel2.lastUpdatedDirection = Date.now()
                        newPixels.push(neigborPixel2)
                    }
                  newPixel.lastUpdatedDirection = Date.now()
                  newPixels.push(newPixel);
                }
              }

              if (pixel.expandDirection == "bottom") {
                newPixel.position.y += pixelRangeStep
                newPixel.hash = calculateHash(
                  newPixel.position.x,
                  newPixel.position.y
                );
                newPixel.currentRange += 1;
  
                if (glarePixelsDict[newPixel.hash] == null) {
                    for (let j = 0; j < 3; j++) {
                        let neigborPixel1 = Pixel(newPixel)
                        neigborPixel1.position.x += j
                        neigborPixel1.lastUpdatedDirection = Date.now()
                        neigborPixel1.hash = calculateHash(neigborPixel1.position.x, neigborPixel1.position.y);
                        newPixels.push(neigborPixel1)

                        let neigborPixel2 = Pixel(newPixel)
                        neigborPixel2.position.x -= j
                        neigborPixel2.lastUpdatedDirection = Date.now()
                        neigborPixel2.hash = calculateHash(neigborPixel2.position.x, neigborPixel2.position.y);
                        newPixels.push(neigborPixel2)
                    }
                  newPixel.lastUpdatedDirection = Date.now()
                  newPixels.push(newPixel);
                }
              }

              if (pixel.expandDirection == "left") {
                newPixel.position.x -= pixelRangeStep
                newPixel.hash = calculateHash(
                  newPixel.position.x,
                  newPixel.position.y
                );
                newPixel.currentRange += 1;
  
                if (glarePixelsDict[newPixel.hash] == null) {
                    for (let j = 0; j < 3; j++) {
                        let neigborPixel1 = Pixel(newPixel)
                        neigborPixel1.lastUpdatedDirection = Date.now()
                        neigborPixel1.position.y += j
                        neigborPixel1.hash = calculateHash(neigborPixel1.position.x, neigborPixel1.position.y);
                        newPixels.push(neigborPixel1)

                        let neigborPixel2 = Pixel(newPixel)
                        neigborPixel2.position.y -= j
                        neigborPixel2.lastUpdatedDirection = Date.now()
                        neigborPixel2.hash = calculateHash(neigborPixel2.position.x, neigborPixel2.position.y);
                        newPixels.push(neigborPixel2)
                    }
                  newPixel.lastUpdatedDirection = Date.now()
                  newPixels.push(newPixel);
                }
              }
          }

          return newPixels;
        };



        if (pixel.isInitialPixel) {
          let pixel1 = Pixel(pixel);
          pixel1.position.y -= pixelRangeStep
          pixel1.hash = calculateHash(pixel1.position.x, pixel1.position.y);
          pixel1.expandDirection = "top";
          pixel1.isInitialPixel = false;
          pixel1.currentRange += 1;
          glarePixelsDict[pixel1.hash] = pixel1;

          let pixel2 = Pixel(pixel);
          pixel2.position.x += pixelRangeStep
          pixel2.hash = calculateHash(pixel2.position.x, pixel2.position.y);
          pixel2.expandDirection = "right";
          pixel2.isInitialPixel = false;
          pixel2.currentRange += 1;
          glarePixelsDict[pixel2.hash] = pixel2;

          let pixel3 = Pixel(pixel);
          pixel3.position.y += pixelRangeStep
          pixel3.hash = calculateHash(pixel3.position.x, pixel3.position.y);
          pixel3.expandDirection = "bottom";
          pixel3.isInitialPixel = false;
          pixel3.currentRange += 1;
          glarePixelsDict[pixel3.hash] = pixel3;

          let pixel4 = Pixel(pixel);
          pixel4.position.x -= pixelRangeStep
          pixel4.hash = calculateHash(pixel4.position.x, pixel4.position.y);
          pixel4.expandDirection = "left";
          pixel4.isInitialPixel = false;
          pixel4.currentRange += 1;
          glarePixelsDict[pixel4.hash] = pixel4;

        } else {
          createNextGlareWave(pixel).forEach((item) => {
            glarePixelsDict[item.hash] = item;
          });
        }

        const newAlpha = Math.max((pixel.alpha -= 0.01), 0.0001);
        pixel.alpha = newAlpha;
        const rgb = pixel.rgb;
        pixel.draw = (ctx) => {
          ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${newAlpha})`;
          ctx.fillRect(
            pixel!.position.x * PIXEL_SIZE,
            pixel!.position.y * PIXEL_SIZE,
            PIXEL_SIZE,
            PIXEL_SIZE
          );
        };

        const existedPixel = pixelsDict[pixel.hash];

        if (
          existedPixel &&
          existedPixel.position.y == pixel.position.y &&
          existedPixel.position.x == pixel.position.x
        ) {
          pixel.draw(ctx);
        }

        if (
          pixel.alpha <= 0.001 ||
          pixel.position.x > CANVAS_WIDTH ||
          pixel.position.x < 0 ||
          pixel.position.y < 0 ||
          pixel.position.y > CANVAS_HEIGHT
        ) {
          glarePixelsDict[key] = null;
        }
      }

      animationRef.current = setTimeout(
        () => requestAnimationFrame(animate),
        CANVAS_FPS
      );
    };

    animate();

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  const handleMouseMove = (element: MouseEvent<HTMLDivElement>) => {
    const rect = element.currentTarget.getBoundingClientRect();
    const mouseX = element.clientX - rect.left;
    const mouseY = element.clientY - rect.top;
    currentMousePos = { x: mouseX, y: mouseY };
    isMouseHover = true;
  };

  const handleMouseLeave = () => {
    currentMousePos = null;
    isMouseHover = false;
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <canvas ref={canvasRef} />
    </div>
  );
};

function Pixel(pixel: IPixel) {
  return {
    position: { x: pixel.position.x, y: pixel.position.y },
    increasingAlpha: pixel.increasingAlpha,
    draw: pixel.draw,
    hash: pixel.hash,
    rgb: pixel.rgb,
    alpha: pixel.alpha,
    expandDirection: pixel.expandDirection,
    lastUpdatedDirection: pixel.lastUpdatedDirection,
    isInitialPixel: pixel.isInitialPixel,
    currentRange: pixel.currentRange,
  };
}

const changePixelIncreasing = (hash: string, increasing: boolean) => {
  const pixel = pixelsDict[hash];

  if (pixel != undefined) {
    pixel.increasingAlpha = increasing;
    pixelsDict[hash] = pixel;
  }

  return pixel;
};

const calculateNextPixel = (hash: string) => {
  const previousPixel = pixelsDict[hash];

  if (!previousPixel) {
    return null;
  }
  const prevAlpha = previousPixel.alpha;
  var newPixel = previousPixel;

  if (prevAlpha < 0.8) {
    newPixel = changePixelIncreasing(hash, true);
  } else if (prevAlpha >= 1) {
    newPixel = changePixelIncreasing(hash, false);
  }

  const randomStep = Math.random() * (0.005 - 0.001);
  if (newPixel.increasingAlpha) {
    newPixel.alpha = prevAlpha + randomStep;
  } else {
    newPixel.alpha = prevAlpha - randomStep;
  }
  return newPixel;
};

const getColumnPixels = (
  column: number,
  from: number,
  to: number,
  ignoring: number[]
) => {
  var pixels: IPixel[] = [];
  for (let i = from; i <= to; i++) {
    if (!ignoring.includes(i)) {
      const pixel = createPixel(column, i);
      pixels.push(pixel);
    }
  }

  return pixels;
};

const createPixel = (x: number, y: number) => {
  const hash = calculateHash(x, y);
  const nextPixel = calculateNextPixel(hash);
  const rgb = HEART_RGB;
  const color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${nextPixel?.alpha})`;
  const pixel = Pixel({
    position: { x: x, y: y },
    increasingAlpha: nextPixel?.increasingAlpha ?? true,
    draw: (ctx) => {
      ctx.fillStyle = color;
      ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    },
    hash: `${hash}`,
    alpha: nextPixel?.alpha ?? 1,
    rgb: rgb,
    currentRange: 0,
  });

  pixelsDict[hash] = pixel;
  return pixel;
};

const calculateHash = (x: number, y: number) => {
  const maxX = Math.max(0, x);
  const maxY = Math.max(0, y);
  const str = `${maxX}-${maxY}`;
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }

  return hash.toString();
};

const moveMouseOverHeart = (isMouseHover: () => boolean, beat: () => void, remove: () => void) => {
    setTimeout(() => {
        setInterval(() => {
            if (isMouseHover()) {
                return;
            }
            beat();
            setTimeout(() => {
                remove();
            }, 100)
        }, MOUSE_HOVER_REPEAT_DURATION * 3)
    })
};

export default PixelHeart;
