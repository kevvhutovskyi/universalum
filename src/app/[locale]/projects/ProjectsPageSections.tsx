"use client";

import { Image } from "@/components";
import { ProjectsBlock } from "@/components/organisms/ProjectsBlock";
import { useTranslations } from "next-intl";

export const ProjectsPageSections = () => {
  const t = useTranslations();

  return (
    <>
      <HeaderSection t={t} />
    </>
  );
};

const HeaderSection = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
  return (
    <>
      <Image
        width={1920}
        height={400}
        src="/nav-pages/image2.png"
        alt="Projects"
        className="object-cover object-top w-full h-50 md:h-75 lg:h-96"
      />
      <section className="container mx-auto mt-10 mb-10 md:mb-15 flex flex-col gap-5 md:gap-10 px-4 md:px-0 text-grayscale-black">
        <h1 className="text-headline-3 md:text-headline-1">
          {t("navigation.projects")}
        </h1>
        <ProjectsBlock />
      </section>
    </>
  );
};
