// react
import { useState } from "react";

// assets

// components
import { Button, Card, Reveal } from "../components";

// data
import { projects } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "uiUx" | "web";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("uiUx");

  const filteredProjects = () => {
    if (activeCategory === "uiUx") {
      return projects.filter((item) => item.category === "uiUx");
    } else {
      return projects.filter((item) => item.category === "web");
    }
  };

  return (
    <div
      id="projects"
      className="min-h-screen relative bg"
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              My recent <span className="text-secondary"> projects</span>
            </h2>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row"
          >
            <Button
              secondary={activeCategory === "uiUx" ? true : false}
              onClick={() => setActiveCategory("uiUx")}
            >
              Page 1
            </Button>
            <Button
              secondary={activeCategory === "web" ? true : false}
              onClick={() => setActiveCategory("web")}
            >
              Page 2
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex gap-12 mt-12 flex-wrap justify-center"
          >
            {filteredProjects().map((item, key) => (
              <a href={item.href}><Card key={key} imgSrc={item.img} title={item.title} /></a>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center gap-4 justify-center flex-col sm:flex-row"
          >
            <a className="mb-5" href="https://github.com/itsmeudhay?tab=repositories"><Button
              secondary={activeCategory === "uiUx" ? true : false}
              onClick={() => setActiveCategory("uiUx")}
            >
              View More
            </Button></a>
          </motion.div>
    </div>
  );
};

export default Projects;
