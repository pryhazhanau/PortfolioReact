import { useEffect, useRef, MouseEvent } from "react";
import "./PixelHeart.css";

interface RGB {
    r: number;
    g: number;
    b: number;
}

interface IPixel {
  number: number;
  position: Origin;
  increasingAlpha: boolean;
  draw: (ctx: CanvasRenderingContext2D) => void;
  hash: string;
  rgb: RGB;
  alpha: number;
}

const pixelSize = 10;
const canvasWidth = pixelSize * 17;
const canvasHeight = pixelSize * 15;

const pixelsDict: { [key: string]: IPixel } = {};
const glarePixelsDict: { [key: string]: IPixel | null } = {};

const PixelHeart = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  var currentMousePos: Point | null;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
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
        const pixelRange = 2;
        const x = Math.max(Math.floor(currentMousePos.x / pixelSize), 0);
        const y = Math.max(Math.floor(currentMousePos.y / pixelSize), 0);
        const hash = calculateHash(x, y)
        const glarePixels: IPixel[] = [];
        
        const rgb = {r: 255, g: 255, b: 255}
        const pixel = Pixel({
          number: hash,
          position: {x: x, y: y},
          increasingAlpha: false,
          draw: (ctx) => {
            ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1})`;
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
          },
          hash: `${hash}`,
          rgb: rgb,
          alpha: 1,
        });

        glarePixels.push(pixel)
   

        for (let i = x - pixelRange; i <= x + pixelRange; i++) {
            for (let j = y - pixelRange; j <= y + pixelRange; j++) {
                if (i == x && y == j) {
                    continue
                }

                let alpha = 0.9
                if (Math.abs(Math.abs(i) - x) >= 2 || Math.abs(Math.abs(j) - y) >= 2) {
                    alpha = 0.7
                }

                const hash = calculateHash(i, j)
                const rgb = {r: 200, g: 255, b: 200}
                const pixel = Pixel({
                    number: hash,
                    position: {x: i, y: j},
                    increasingAlpha: false,
                    draw: (ctx) => {
                      ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
                      ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
                    },
                    hash: `${hash}`,
                    alpha: alpha,
                    rgb: rgb
                  });
                  
                glarePixels.push(pixel)
             
            }
        }

        glarePixels.forEach((pixel) => {
          glarePixelsDict[pixel.hash] = pixel
        });

      }

      for (let key in glarePixelsDict) {
        let pixel = glarePixelsDict[key];
    
        if (!pixel) {
            return;
        }

        const newAlpha = Math.max(pixel.alpha -= 0.01, 0.0001);
        pixel.alpha = newAlpha
        const rgb = pixel.rgb
        pixel.draw = (ctx) => {
            ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${newAlpha})`;
            ctx.fillRect(pixel!.position.x * pixelSize, pixel!.position.y* pixelSize, pixelSize, pixelSize);
        }


        const existedPixel = pixelsDict[pixel.hash]
        if (existedPixel) {
            const pixelNotEmpty = pixelsDict[pixel.hash].position.x == pixel.position.x && pixelsDict[pixel.hash].position.y == pixel.position.y
             if (pixelNotEmpty) {
               
                 pixel.draw(ctx)
              }
          }


        if (pixel.alpha <= 0) {
            glarePixelsDict[key] = null;
        }
    }

      animationRef.current = setTimeout(
        () => requestAnimationFrame(animate),
        1 / 60
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
  };

  const handleMouseLeave = () => {
    currentMousePos = null;
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <canvas ref={canvasRef} />
    </div>
  );
};

function Pixel(pixel: IPixel) {
  return {
    number: pixel.number,
    position: {x: pixel.position.x, y: pixel.position.y},
    increasingAlpha: pixel.increasingAlpha,
    draw: pixel.draw,
    hash: pixel.hash,
    rgb: pixel.rgb,
    alpha: pixel.alpha,
  };
}

const changePixelIncreasing = (hash: number, increasing: boolean) => {
  const pixel = pixelsDict[hash];

  if (pixel != undefined) {
    pixel.increasingAlpha = increasing;
    pixelsDict[hash] = pixel;
  }

  return pixel;
};

const calculateNextPixel = (number: number) => {
  const previousPixel = pixelsDict[number];

  if (!previousPixel) {
    return null;
  }
  const prevAlpha = previousPixel.alpha;
  var newPixel = previousPixel;

  if (prevAlpha < 0.8) {
    newPixel = changePixelIncreasing(number, true);
  } else if (prevAlpha >= 1) {
    newPixel = changePixelIncreasing(number, false);
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
  const rgb = {r: 48, g: 255, b: 175 }
  const color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${nextPixel?.alpha})`;
  const pixel = Pixel({
    number: hash,
    position: {x: x, y: y},
    increasingAlpha: nextPixel?.increasingAlpha ?? true,
    draw: (ctx) => {
        ctx.fillStyle = color;
        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    },
    hash: `${hash}`,
    alpha: nextPixel?.alpha ?? 1,
    rgb: rgb
  });

  pixelsDict[pixel.number] = pixel;
  return pixel;
};

const calculateHash = (x: number, y: number) => {
    const maxX = Math.max(0, x)
    const maxY = Math.max(0, y)

    return (maxX * 25 - 10) * (maxY * 10 - 3)
}

export default PixelHeart;
