"use client";

import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import { Heading, Text } from "@/components/atoms";
import { ProjectCard, SliderControls } from "@/components/molecules";
import { Button } from "@/components/ui/button";
import ProjectsSlider from "@/components/universal/ProjectsSlider";
import { cn } from "@/lib/utils";
import { Tags } from "@/types/tags.enum";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { ProjectItem } from "@/types";
import { getProjects } from "@/data/getProjects";

export interface Project {
  id: number;
  title: string;
  tags: Tags[];
  image: string;
}

export const ProjectsSectionSlider = React.forwardRef<HTMLElement>(
  ({ ...props }, ref) => {
    const t = useTranslations();
    const router = useRouter();

    const defaultProjects: ProjectItem[] = getProjects(t)

    const projectsToUse = defaultProjects;
    const sectionLabelToUse = t("common.ourProjects");
    const titleToUse = t("projects.description");
    const viewAllButtonTextToUse = t("common.viewAllProjects");
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [swiper, setSwiper] = useState<SwiperType>();

    const numberOfSlides = projectsToUse.length;

    const handleChangeSlide = (slideIndex: number) => {
      const newIndex = (slideIndex + numberOfSlides) % numberOfSlides;
      swiper?.slideToLoop(newIndex);
      setActiveSlide(newIndex);
    };

    const handlePrevious = () => handleChangeSlide(activeSlide - 1);
    const handleNext = () => handleChangeSlide(activeSlide + 1);

    const handleViewAllClick = () => {
      router.push({ pathname: "/projects" });
    };

    useEffect(() => {
      if (swiper && projectsToUse.length > 0) {
        const newIndex = 0;
        swiper.slideToLoop(newIndex);
        setActiveSlide(newIndex);
      }
    }, [swiper, projectsToUse.length]);

    return (
      <section ref={ref} className={cn("w-full py-20 bg-white")} {...props}>
        <div className="container mx-auto px-3 md:px-0">
          {/* Header */}
          <div className="mb-12">
            {/* Section Label */}
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 rounded-full bg-accent-orange mr-2" />
              <Text
                variant="body1"
                color="orange"
                className=" text-grayscale-black"
              >
                {sectionLabelToUse}
              </Text>
            </div>

            {/* Title and Controls */}
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <Heading
                level="h2"
                className="text-headline-4 md:text-headline-3 lg:text-headline-3 max-w-3xl lg:max-w-4xl"
              >
                {titleToUse}
              </Heading>

              <div className="hidden md:flex flex-col items-end gap-4 justify-between h-auto">
                <Button
                  className="whitespace-nowrap w-fit "
                  onClick={handleViewAllClick}
                >
                  {viewAllButtonTextToUse}
                </Button>
                <SliderControls
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  className="bg-primary-light text-grayscale-white hover:bg-primary-medium hover:text-grayscale-white hover:border-primary-medium"
                />
              </div>
            </div>
          </div>

          {/* Projects Slider */}
          <ProjectsSlider
            ssspw={1}
            activeSlide={activeSlide}
            swiper={swiper}
            setSwiper={setSwiper}
            setActiveSlide={setActiveSlide}
          >
            {projectsToUse.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  image={project.img}
                  title={project.title}
                  tags={project.tags}
                  href={`/projects/${project.id}`}
                />
              </SwiperSlide>
            ))}
          </ProjectsSlider>

          {/* Mobile View All Button */}
          <div className="mt-8 md:hidden">
            <Button className="w-full" onClick={handleViewAllClick}>
              {viewAllButtonTextToUse}
            </Button>
          </div>
        </div>
      </section>
    );
  }
);

ProjectsSectionSlider.displayName = "ProjectsSectionSlider";
