import React from "react";
import { CORE_SKILLS } from "../data";
import { CoreSkill } from "./CoreSkill";

export const Skills = () => {
  return (
    <div name="skills" className="w-full bg-white text-black p-10">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex flex-col justify-center items-center pt-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            /// These are the technologies I've worked with
          </p>
        </div>

        <div className="mx-auto">
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8">
            {CORE_SKILLS.map((conceptItem) => (
              <CoreSkill key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
