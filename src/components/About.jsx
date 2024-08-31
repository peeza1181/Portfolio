import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full py-20 bg-black text-white rounded-[15px]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="tracking-[.05em]">
              Hi. I'm Piyarat Napatpongwalee, nice to meet you.
            </p>
          </div>
          <div>
            <p className="tracking-[.05em]">
            As a Marketing student, I am passionate about web development. I am currently focusing on Front-end development with the goal of becoming a Full-Stack Developer. I have been learning through online platforms like FreeCodeCamp, Udemy, and YouTube, specializing in React and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
