import { useEffect, useRef, MouseEvent } from "react";
import "./PixelHeart.css";

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
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "none";
  lastUpdatedDirection?: number;
}

const PIXEL_SIZE = 10;
const CANVAS_WIDTH = PIXEL_SIZE * 17;
const CANVAS_HEIGHT = PIXEL_SIZE * 15;
const PIXEL_RANGE = 2;
const CANVAS_FPS = 1 / 60;

const pixelsDict: { [key: string]: IPixel } = {};
const glarePixelsDict: { [key: string]: IPixel | null } = {};

const PixelHeart = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  let currentMousePos: Point | null;
  let isMouseHover = false;

  moveMouseOverHeart(() => {
    currentMousePos = autoMouseCoordinates;
    return isMouseHover;
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

        const rgb = { r: 100, g: 255, b: 255 };
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
          alpha: 1,
        });

        glarePixels.push(pixel);

        for (let i = x - PIXEL_RANGE; i <= x + PIXEL_RANGE; i++) {
          for (let j = y - PIXEL_RANGE; j <= y + PIXEL_RANGE; j++) {
            if (i == x && y == j) {
              continue;
            }

            let alpha = 0.9;
            if (
              Math.abs(Math.abs(i) - x) >= 2 ||
              Math.abs(Math.abs(j) - y) >= 2
            ) {
              alpha = 0.7;
            }

            const hash = calculateHash(i, j);
            const rgb = { r: 100, g: 255, b: 255 };
            const prevPixel = glarePixelsDict[hash];
            const prevPosition = glarePixelsDict[hash]?.position ?? {
              x: i,
              y: j,
            };

            const dx = i - x;
            const dy = j - y;

            let expandDirection: IPixel["expandDirection"] = "none";
            if (dx === 0 && dy < 0) {
              expandDirection = "top";
            } else if (dx === 0 && dy > 0) {
              expandDirection = "bottom";
            } else if (dx < 0 && dy === 0) {
              expandDirection = "left";
            } else if (dx > 0 && dy === 0) {
              expandDirection = "right";
            } else if (dx < 0 && dy < 0) {
              expandDirection = "top-left";
            } else if (dx > 0 && dy < 0) {
              expandDirection = "top-right";
            } else if (dx < 0 && dy > 0) {
              expandDirection = "bottom-left";
            } else if (dx > 0 && dy > 0) {
              expandDirection = "bottom-right";
            }

            const pixel = prevPixel
              ? prevPixel
              : Pixel({
                  position: prevPosition,
                  increasingAlpha: false,
                  draw: (ctx) => {
                    ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
                    ctx.fillRect(
                      i * PIXEL_SIZE,
                      j * PIXEL_SIZE,
                      PIXEL_SIZE,
                      PIXEL_SIZE
                    );
                  },
                  hash: `${hash}`,
                  alpha: alpha,
                  rgb: rgb,
                  expandDirection: expandDirection,
                });

            glarePixels.push(pixel);
          }
        }

        glarePixels.forEach((pixel) => {
          glarePixelsDict[pixel.hash] = pixel;
        });
      }

      for (let key in glarePixelsDict) {
        let pixel = glarePixelsDict[key];

        if (!pixel) {
          continue;
        }

        const lastUpdate = pixel.lastUpdatedDirection;
        if (pixel.expandDirection) {
          if (!lastUpdate) {
            pixel.lastUpdatedDirection = Date.now() - 100;
          }
          const pixelMovingStep = 1;
          let pixelCopy = Pixel(pixel);
          if (
            pixel.lastUpdatedDirection &&
            Date.now() - pixel.lastUpdatedDirection > 100
          ) {
            let position: Point;
            switch (pixel.expandDirection) {
              case "top":
                position = {
                  x: pixel.position.x,
                  y: pixel.position.y - pixelMovingStep,
                };
                break;
              case "bottom":
                position = {
                  x: pixel.position.x,
                  y: pixel.position.y + pixelMovingStep,
                };
                break;
              case "right":
                position = {
                  x: pixel.position.x + pixelMovingStep,
                  y: pixel.position.y,
                };
                break;
              case "left":
                position = {
                  x: pixel.position.x - pixelMovingStep,
                  y: pixel.position.y,
                };
                break;
              case "top-left":
                position = {
                  x: pixel.position.x - pixelMovingStep,
                  y: pixel.position.y - pixelMovingStep,
                };
                break;
              case "bottom-left":
                position = {
                  x: pixel.position.x - pixelMovingStep,
                  y: pixel.position.y + pixelMovingStep,
                };
                break;
              case "top-right":
                position = {
                  x: pixel.position.x + pixelMovingStep,
                  y: pixel.position.y - pixelMovingStep,
                };
                break;
              case "bottom-right":
                position = {
                  x: pixel.position.x + pixelMovingStep,
                  y: pixel.position.y + pixelMovingStep,
                };
                break;
              case "none":
                position = pixel.position;
            }

            pixelCopy.position = position;
            pixelCopy.hash = calculateHash(position.x, position.y);
            pixelCopy.lastUpdatedDirection = Date.now();
            const rgb = pixelCopy.rgb;
            pixelCopy.draw = (ctx) => {
              ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${newAlpha})`;
              ctx.fillRect(
                position.x * PIXEL_SIZE,
                position.y * PIXEL_SIZE,
                PIXEL_SIZE,
                PIXEL_SIZE
              );
            };
            glarePixelsDict[pixelCopy.hash] = pixelCopy;
          }
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

        if (pixel.alpha <= 0.011) {
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
  const rgb = { r: 48, g: 255, b: 175 };
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
  });

  pixelsDict[hash] = pixel;
  return pixel;
};

const calculateHash = (x: number, y: number) => {
  const maxX = Math.max(0, x);
  const maxY = Math.max(0, y);

  return `${(maxX * 25 - 10) * (maxY * 10 - 3)}`;
};

let autoMouseCoordinates: Point | null;
const moveMouseOverHeart = (f: () => boolean) => {
    const calculateParabolicY = (x: number) => {
        let y;
        if (x <= 150) {
            y = Math.floor(x) // Adjust the coefficient for desired shape
        } else {
            y = Math.pow(x, 2)  // Adjust the coefficient for desired shape
        }
    
        return y;
      };

   let timer: any;
  setInterval(() => {
    autoMouseCoordinates = { x: 0, y: 0 };
    clearInterval(timer)
    timer = setInterval(() => {
      if (!autoMouseCoordinates) {
        return;
      }

      autoMouseCoordinates = {
        x: autoMouseCoordinates.x + 1,
        y: calculateParabolicY(autoMouseCoordinates.x + 1),
      };
      const isMouseHover = f();

      if (
        autoMouseCoordinates.x > 300 ||
        autoMouseCoordinates.y > 300 ||
        isMouseHover
      ) {
        autoMouseCoordinates = null;
        f();
        clearInterval(timer);
      }
    }, 10);
  }, 10000);
};

export default PixelHeart;
