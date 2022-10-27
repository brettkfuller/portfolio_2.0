import Link from 'next/link';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey there, my name's Brett.",
      "Welcome to my portfolio.",
      "Metallica Rules.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />

      {/* YOU SHOULD USE REACTJS IMAGE COMPONENT FOR IMAGE, WHITELIST URL TO OPTIMIZE LOAD-IN. GO TO HIS OTHER REACT VIDEO*/}

      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://media-exp1.licdn.com/dms/image/C4E03AQHo1oRSaCAhpg/profile-displayphoto-shrink_800_800/0/1663785490750?e=1672272000&v=beta&t=WIWLyJd4--tRu_wug4jqr13JcS1TZTLVeInblaAN20g"
        alt=""
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
