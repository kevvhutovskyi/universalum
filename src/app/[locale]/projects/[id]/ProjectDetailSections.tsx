/* eslint-disable @next/next/no-img-element */
"use client";

import { ProjectGallery } from "@/components/organisms/ProjectsGallery";
import { getProject } from "@/data/getProject";
import { ProjectItem } from "@/types";
import { p } from "framer-motion/client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export const ProjectDetailSections = () => {
  const { id } = useParams();
  const t = useTranslations();

  const project = getProject(Number(id), t);

  return (
    <>
      <HeaderSection project={project} t={t} />
    </>
  );
};

const HeaderSection = ({ project, t }: { project: ProjectItem, t: ReturnType<typeof useTranslations> }) => {
  return (
    <>
      <img
        src={project.img}
        alt="Projects"
        className="object-cover object-center w-full h-[23rem] md:h-[35rem] lg:h-[40rem]"
      />
      <section className="container mx-auto mt-10 mb-10 md:mb-15 flex flex-col gap-6 md:gap-10 px-4 md:px-0 text-grayscale-black">
        <h1 className="text-headline-5 md:text-headline-3">
          {project.title}
        </h1>
        <div className="flex flex-col gap-3">
          <h6 className="text-body-1 md:text-headline-6">
            {project.description}
          </h6>
        </div>
        {project.location && <div className="flex gap-2">
          <img src="/icons/MapPin.svg" alt="Pin" className="h-8 w-8" />
          <p className="text-subtitle-1 md:text-headline-5">
            {project.location}
          </p>
        </div>}
      </section>
      {project.images.length && <ProjectGallery images={project.images} />}
    </>
  );
};
