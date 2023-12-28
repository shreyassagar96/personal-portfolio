"use client";
import React, { useState } from "react";
import ProjectsCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

import img1 from "../../public/images/projects/weather.png";
import img2 from "../../public/images/projects/expense.png";
import img3 from "../../public/images/projects/notes.png";
import img4 from "../../public/images/projects/todo.png";
import img5 from "../../public/images/projects/airport.png";
import img6 from "../../public/images/projects/weareprogrammer.png";
import img7 from "../../public/images/projects/drum.png";

const projectData = [
  {
    id: 1,
    title: "Weather App",
    description:
      "In this project you will see the all weather details for your locations.",
    images: img1,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shreyassagar96/weather-forecast-nextjs",
    prevUrl: "https://weather-forecast-nextjs-inky.vercel.app/",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "In this project you can save your expenses and you will see the on year expenses you bougth.",
    images: img2,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shreyassagar96/Expenses-Project",
    prevUrl: "https://expenses-project-by-shreyas-sagar.vercel.app/",
  },
  {
    id: 3,
    title: "Daily Notes",
    description:
      "In this project you can write your daily notes and save it basically the project based on CRUD operations.",
    images: img3,
    tag: ["All", "MERN"],
    gitUrl: "https://github.com/shreyassagar96/daily-notes-app-nextjs",
    prevUrl: "https://daily-notes-app-nextjs.vercel.app/",
  },
  {
    id: 4,
    title: "Advance ToDo App",
    description: "In this project you can save your daily task.",
    images: img4,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shreyassagar96/todo-app-redux",
    prevUrl: "https://todo-app-redux-pi.vercel.app/",
  },
  {
    id: 5,
    title: "Airpot Info",
    description:
      "User can enter the airport code and see the all airport details with loactions and address.",
    images: img5,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shreyassagar96/AirportInfo",
    prevUrl: "https://shreyassagar96.github.io/AirportInfo/",
  },
  {
    id: 6,
    title: "We Are Programmer",
    description: "Only UI",
    images: img6,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shreyassagar96/WeAreProgrammer",
    prevUrl: "https://shreyassagar96.github.io/WeAreProgrammer/",
  },
  {
    id: 7,
    title: "Drum",
    description: "User can play a drun with keys.",
    images: img7,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shreyassagar96/Play-Drum",
    prevUrl: "https://shreyassagar96.github.io/Play-Drum/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div id="projects">
      <h2
        data-aos="slide-right"
        data-aos-delay="100"
        className="text-primary-400 text-4xl mb-6 font-extrabold"
      >
        My Projects
      </h2>
      <div className="text-secondary flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={"All"}
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"MERN"}
          isSelected={tag === "MERN"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project, i) => (
          <div key={i} data-aos="fade-down" data-aos-delay={i * 200}>
            <ProjectsCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.images}
              gitUrl={project.gitUrl}
              prevUrl={project.prevUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
