import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#f1f5f9]  text-[#0f172a]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-teal-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Hi. I'm Athenkosi, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am an adaptable, innovative and fast learner with a number of
              skills. I am looking to develop my expertise in new concept
              development and validation within a forward thinking company. I am
              also a goal oriented, honest, friendly and a hardworking person
              who prides himself with fixed and uncompromised values. I am
              always open to learning new things and growing as an individual,
              this includes me going the extra mile to the best in every
              challenge that is thrown my way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
