/* eslint-disable @next/next/no-img-element */
"use client";

import { Image } from "@/components";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const AboutPageSections = () => {
  const t = useTranslations();

  return (
    <>
      <HeaderSection t={t} />
      <AdvantagesBlock t={t} />
      <DescriptionSection t={t} />
    </>
  );
};

const HeaderSection = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
  return (
    <>
      <Image
        width={1920}
        height={400}
        src="/nav-pages/image1.png"
        alt="About Us"
        className="object-cover object-top w-full h-50 md:h-75 lg:h-96"
      />
      <section className="container mx-auto mt-10 mb-10 md:mb-15 flex flex-col gap-5 md:gap-10 px-4 md:px-8 text-grayscale-black">
        <h1 className="text-headline-3 md:text-headline-1">
          {t("pages.about.title")}
        </h1>
        <h3 className="text-headline-5 md:text-headline-3 lg:max-w-[50rem]">
          {t("pages.about.subtitle1")}
        </h3>
        <h3 className="text-headline-5 md:text-headline-3 lg:max-w-[50rem]">
          {t("pages.about.subtitle2")}
        </h3>
      </section>
    </>
  );
};

const AdvantagesBlock = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
  return (
    <section className="my-20 container mx-auto px-4 md:px-8 flex flex-col gap-10">
      <div className="flex flex-col my-10 gap-8">
        <div className="flex gap-2 items-center">
          <div className="h-3 w-3 rounded-full bg-accent-orange" />

          <p className="text-body-1">{t("pages.about.advantages.title")}</p>
        </div>

        <h2 className="md:text-headline-2 text-headline-4 font-bold text-grayscale-black max-w-2xl">
          {t("pages.about.advantages.heading")}
        </h2>
      </div>
      <div className="w-full border-t border-grayscale-gray4 flex flex-col gap-4 pt-4 text-grayscale">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-grayscale-gray1 py-6 px-10 min-h-50 md:h-75 flex flex-col justify-between relative">
            <img
              src="/frames/frame-1.svg"
              alt="Frame"
              className="absolute bottom-0 right-0"
            />
            <span className="text-headline-1">50+</span>
            <span className="text-body-1 max-w-50">
              {t("pages.about.advantages.teamMembers")}
            </span>
          </div>
          <div className="flex-1 bg-grayscale-gray1 py-6 px-10 min-h-50 md:h-75 flex flex-col justify-between relative">
            <img
              src="/frames/frame-2.svg"
              alt="Frame"
              className="absolute top-0 right-0"
            />
            <span className="text-headline-1">30+</span>
            <span className="text-body-1 max-w-50">
              {t("pages.about.advantages.completedProjects")}
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-grayscale-gray1 py-6 px-10 min-h-50 md:h-75 flex flex-col justify-between relative">
            <img
              src="/frames/frame-3.svg"
              alt="Frame"
              className="absolute bottom-0 right-0"
            />
            <span className="text-headline-1">35+</span>
            <span className="text-body-1 max-w-50">
              {t("pages.about.advantages.yearsExperience")}
            </span>
          </div>
          <div className="flex-1 bg-grayscale-gray1 py-6 px-10 min-h-50 md:h-75 flex flex-col justify-between relative">
            <img
              src="/frames/frame-4.svg"
              alt="Frame"
              className="absolute top-0 right-0"
            />
            <span className="text-headline-1">5+</span>
            <span className="text-body-1 max-w-50">
              {t("pages.about.advantages.countries")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const DescriptionSection = ({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) => {
  const advantages = [
    {
      title: t("pages.about.features.experiencedTeam.title"),
      description: t("pages.about.features.experiencedTeam.description"),
      image: "/about/about-1.png",
      imageFirst: true,
    },
    {
      title: t("pages.about.features.comprehensiveApproach.title"),
      description: t("pages.about.features.comprehensiveApproach.description"),
      image: "/about/about-2.png",
      imageFirst: false,
    },
    {
      title: t("pages.about.features.ownEquipment.title"),
      description: t("pages.about.features.ownEquipment.description"),
      image: "/about/about-3.png",
      imageFirst: true,
    },
    {
      title: t("pages.about.features.certifiedQuality.title"),
      description: t("pages.about.features.certifiedQuality.description"),
      image: "/about/about-4.png",
      imageFirst: false,
    },
  ];

  return (
    <section className="my-20 container mx-auto px-4 md:px-8 flex flex-col gap-4 text-grayscale-black">
      {advantages.map((advantage, index) => (
        <div key={index} className="flex gap-4 flex-col md:flex-row">
          <div
            className={cn("flex-1", {
              "md:order-2 order-2": advantage.imageFirst,
              "md:order-1 order-2": !advantage.imageFirst,
            })}
          >
            <Image
              width={712}
              height={444}
              src={advantage.image}
              alt={advantage.title}
              className="object-cover w-full lg:h-[444px]"
            />
          </div>
          <div
            className={cn("flex-1 flex flex-col justify-center gap-4", {
              "md:order-1 order-1": advantage.imageFirst,
              "md:order-2 order-1": !advantage.imageFirst,
            })}
          >
            <h2 className="text-headline-4 md:text-headline-2">
              {advantage.title}
            </h2>
            <p className="text-subtitle-1 md:text-headline-5">
              {advantage.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
