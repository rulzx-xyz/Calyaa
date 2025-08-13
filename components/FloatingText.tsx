
import React from 'react';

interface FloatingTextProps {
  name: string;
}

export const FloatingText: React.FC<FloatingTextProps> = ({ name }) => {
  const textCount = 80;
  const animationDuration = 20000;
  const delayStep = 300;

  return (
    <div
      id="ui"
      className="absolute top-1/2 left-1/2 w-[450px] h-[450px] -mt-[225px] -ml-[300px] pointer-events-none z-10"
    >
      {Array.from({ length: textCount }).map((_, i) => (
        <div
          key={i}
          className="love absolute top-1/2 left-1/2"
          style={{
            margin: '-225px 0 0 -225px',
          }}
        >
          <div
            className="love_horizontal"
            style={{
              animation: `horizontal 10000ms infinite alternate ease-in-out`,
              animationDelay: `-${i * delayStep}ms`,
            }}
          >
            <div
              className="love_vertical"
              style={{
                animation: `vertical ${animationDuration}ms infinite linear`,
                animationDelay: `-${i * delayStep}ms`,
              }}
            >
              <div
                className="love_word text-[#ea80b0] whitespace-nowrap text-[1.4rem] rotate-[-30deg] origin-center tracking-[2px] drop-shadow-[0_0_10px_#fff]"
                style={{
                    transform: `translateY(-100%) rotateZ(-30deg)`,
                    textShadow: `0 0 10px #fff`,
                    ...(i === textCount - 1 && { 
                        color: '#fff', 
                        fontSize: '2rem', 
                        textShadow: '0 0 10px #ea80b0' 
                    }),
                }}
              >
                I Love {name}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};