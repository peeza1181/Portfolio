import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-black text-white rounded-[15px]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Piyaray Napatpongwalee, nice to meet you. Please take a
              look around.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              nihil ducimus sed iusto optio pariatur laborum, commodi nostrum
              molestias tempore quis odio dolorem veritatis unde officia
              perferendis soluta voluptate distinctio eum qui! Laboriosam
              exercitationem atque iure totam amet natus hic. Perspiciatis error
              blanditiis laboriosam fugiat impedit, maiores veniam quo itaque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
