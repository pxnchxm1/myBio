import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { GrProjects } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const updateActiveSection = () => {
      setActiveSection(window.location.hash.replace("#", "")); // Extracts id (e.g., 'home' from '#home')
    };

    // Set initial section on page load
    updateActiveSection();

    // Listen for hash changes
    window.addEventListener("hashchange", updateActiveSection);

    return () => window.removeEventListener("hashchange", updateActiveSection);
  }, []);

  console.log(activeSection);
  return (
    <div className="min-h-screen   shadow-lg shadow-gray-400 flex flex-col gap-5 fixed justify-between items-center py-24 select-none">
      {theme == "dark" ? (
        <img src="/p1.png" alt="logo" className="w-16 h-16" />
      ) : (
        <img src="/p.png" alt="logo" className="w-16 h-16" />
      )}
      <div className="  w-full flex flex-col items-center justify-center ">
        <a
          href="#about"
          className={`py-5 hover:bg-bioblack/30 dark:hover:bg-biowhite/5 ${
            activeSection == "about" ? "bg-bioblack dark:bg-biowhite" : ""
          } w-full flex items-center justify-center `}
        >
           <ImProfile className={` ${activeSection=='about' ? 'text-biowhite dark:text-bioblack':'text-bioblack dark:text-biowhite'}`} />
        </a>
        <a
          href="#skills"
          className={`py-5 hover:bg-bioblack/30 dark:hover:bg-biowhite/5 ${
            activeSection == "skills" ? "bg-bioblack dark:bg-biowhite" : ""
          } w-full flex items-center justify-center `}
        >
           <FaRegLightbulb  className={`${activeSection=='skills' ? 'text-biowhite dark:text-bioblack':'text-bioblack dark:text-biowhite'}`} />
        </a>
       
        <a
          href="#projects"
          className={`py-5 hover:bg-bioblack/30 dark:hover:bg-biowhite/5 ${
            activeSection == "projects" ? "bg-bioblack dark:bg-biowhite" : ""
          } w-full flex items-center justify-center `}
        >
           <GrProjects  className={`${activeSection=='projects' ? 'text-biowhite dark:text-bioblack':'text-bioblack dark:text-biowhite'}`} />
        </a>
        <a
          href="#projects"
          className={`py-5 hover:bg-bioblack/30 dark:hover:bg-biowhite/5 ${
            activeSection == "projects" ? "bg-bioblack dark:bg-biowhite" : ""
          } w-full flex items-center justify-center `}
        >
           <GrProjects  className={`${activeSection=='projects' ? 'text-biowhite dark:text-bioblack':'text-bioblack dark:text-biowhite'}`} />
        </a>
        <a
          href="#projects"
          className={`py-5 hover:bg-bioblack/30 dark:hover:bg-biowhite/5 ${
            activeSection == "projects" ? "bg-bioblack dark:bg-biowhite" : ""
          } w-full flex items-center justify-center `}
        >
           <GrProjects  className={`${activeSection=='projects' ? 'text-biowhite dark:text-bioblack':'text-bioblack dark:text-biowhite'}`} />
        </a>
        <a
          href="#projects"
          className={`py-5 hover:bg-bioblack/30 dark:hover:bg-biowhite/5 ${
            activeSection == "projects" ? "bg-bioblack dark:bg-biowhite" : ""
          } w-full flex items-center justify-center `}
        >
           <GrProjects  className={`${activeSection=='projects' ? 'text-biowhite dark:text-bioblack':'text-bioblack dark:text-biowhite'}`} />
        </a>
        <a
          href="#projects"
          className={`py-5 hover:bg-bioblack/30 dark:hover:bg-biowhite/5 ${
            activeSection == "projects" ? "bg-bioblack dark:bg-biowhite" : ""
          } w-full flex items-center justify-center `}
        >
           <GrProjects  className={`${activeSection=='projects' ? 'text-biowhite dark:text-bioblack':'text-bioblack dark:text-biowhite'}`} />
        </a>
       
       
      </div>
      {theme == 'dark' ? (
        <BsFillMoonStarsFill onClick={() => setTheme('light')} />
      ) : (
        <MdOutlineLightMode onClick={() => setTheme('dark')} />
      )}
    </div>
  );
};

export default Navbar;
