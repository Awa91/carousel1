import React from "react";

export default function  TypographyAnimation  () {
    const firstWord = 'Develop';
    const secondWord = 'Design';
  
    const renderWordAnimation = (word: string, startingDelay: number) => {
      return word.split('').map((letter, index) => (
        <span
          key={index}
          className={`animate-fall animation-delay-[${
            startingDelay + index * 150
          }ms] translate-y-[-150%]`}
        >
          {letter}
        </span>
      ));
    };
  
    return (
      <span className='relative inline-flex ml-2 overflow-hidden p-0'>
        <div className='flex flex-row font-extrabold p-4' >
          {renderWordAnimation(firstWord, 0)}
        </div>
  
        <span className='absolute top-0 bottom-0 '>
          <div className='flex flex-row font-extrabold '>
            {renderWordAnimation(secondWord, 1500)}
          </div>
        </span>
      </span>
    );
  };