"use client";
import { useState } from "react";
import { ProjectsTagPicker } from "../molecules/ProjectsTagPicker";
import { Tags } from "@/types/tags.enum";
import { ProjectCard } from "../molecules";
import { useTranslations } from "next-intl";
import { getProjects } from "@/data/getProjects";

export const ProjectsBlock = () => {
  const t = useTranslations();

  const objects = getProjects(t);

  const [activeTag, setActiveTag] = useState<Tags>(Tags.ALL);

  const activeObjects =
    activeTag === Tags.ALL
      ? objects
      : objects.filter((obj) => obj.tags.includes(activeTag));

  return (
    <div>
      <ProjectsTagPicker activeTag={activeTag} setActiveTag={setActiveTag} />

      <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {activeObjects.map((obj, index) => (
          <ProjectCard
            key={index}
            image={obj.img}
            title={obj.title}
            tags={obj.tags}
            href={`/projects/${obj.id}`}
            className="col-span-1"
          />
        ))}
      </div>
    </div>
  );
};
