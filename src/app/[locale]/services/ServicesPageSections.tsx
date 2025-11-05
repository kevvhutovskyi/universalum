"use client";

import { Image } from "@/components";
import {
  AccordionItem,
  AnimatedAccordion,
} from "@/components/organisms/Accordion";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const ServicesPageSections = () => {
  const t = useTranslations();

  return (
    <>
      <HeaderSection t={t} />
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
        src="/photo/Hero2.png"
        alt="About Us"
        className="object-cover object-top w-full h-50 md:h-75 lg:h-96"
      />
      <section className="container mx-auto mt-10 mb-10 md:mb-15 flex flex-col gap-5 md:gap-10 px-4 md:px-8 text-grayscale-black">
        <h1 className="text-headline-3 md:text-headline-1">
          {t("pages.services.title")}
        </h1>
        <h3 className="text-headline-5 md:text-headline-3 lg:max-w-[50rem]">
          {t("pages.services.subtitle")}
        </h3>
      </section>
    </>
  );
};

const DescriptionSection = ({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) => {
  const advantages: {
    title: string;
    description?: string;
    imageFirst: boolean;
    image: string;
    data: AccordionItem[] | string[];
  }[] = [
    {
      data: [
        {
          title: t("pages.services.design.architectural.title"),
          content: [
            t("pages.services.design.architectural.solutions"),
            t("pages.services.design.architectural.calculation"),
            t("pages.services.design.architectural.reconstruction"),
            t("pages.services.design.architectural.visualization"),
          ],
        },
        {
          title: t("pages.services.design.engineering.title"),
          content: [
            t("pages.services.design.engineering.networks"),
            t("pages.services.design.engineering.fireProtection"),
          ],
        },
        {
          title: t("pages.services.design.survey.title"),
          content: [
            t("pages.services.design.survey.geodetic"),
            t("pages.services.design.survey.geological"),
            t("pages.services.design.survey.inspection"),
          ],
        },
        {
          title: t("pages.services.design.ecology.title"),
          content: [
            t("pages.services.design.ecology.assessment"),
            t("pages.services.design.ecology.expertise"),
            t("pages.services.design.ecology.consulting"),
          ],
        },
      ],
      title: t("services.design.title"),
      image: "/advantages/adv-1.png",
      imageFirst: true,
    },
    {
      title: t("services.construction.title"),
      data: [
        {
          title: t("pages.services.construction.foundation.title"),
          content: [
            t("pages.services.construction.foundation.geodesy"),
            t("pages.services.construction.foundation.earthworks"),
            t("pages.services.construction.foundation.foundations"),
            t("pages.services.construction.foundation.waterproofing"),
          ],
        },
        {
          title: t("pages.services.construction.structures.title"),
          content: [
            t("pages.services.construction.structures.reinforced"),
            t("pages.services.construction.structures.metal"),
            t("pages.services.construction.structures.floors"),
          ],
        },
        {
          title: t("pages.services.construction.roofing.title"),
          content: [
            t("pages.services.construction.roofing.roofs"),
            t("pages.services.construction.roofing.facades"),
            t("pages.services.construction.roofing.glass"),
            t("pages.services.construction.roofing.aluminum"),
          ],
        },
        {
          title: t("pages.services.construction.landscaping.title"),
          content: [
            t("pages.services.construction.landscaping.paving"),
            t("pages.services.construction.landscaping.greenery"),
            t("pages.services.construction.landscaping.lighting"),
            t("pages.services.construction.landscaping.drainage"),
          ],
        },
      ],
      image: "/advantages/adv-2.png",
      imageFirst: false,
    },
    {
      title: t("services.engineering.title"),
      data: [
        t("pages.services.engineering.ventilation"),
        t("pages.services.engineering.heating"),
        t("pages.services.engineering.waterSupply"),
        t("pages.services.engineering.electrical"),
        t("pages.services.engineering.fireSafety"),
        t("pages.services.engineering.automation"),
      ],
      image: "/advantages/adv-3.jpg",
      imageFirst: true,
    },
    {
      title: t("services.energy.title"),
      description: t("services.energy.description"),
      data: [
        t("pages.services.energy.windgeneration"),
        t("pages.services.energy.sunstations"),
        t("pages.services.energy.windsunstations")
      ],
      image: '/advantages/adv-5.jpg',
      imageFirst: false,
    }
  ];

  const isDataAccordion = (
    data: AccordionItem[] | string[]
  ): data is AccordionItem[] => {
    return (data as AccordionItem[]).every(
      (item) => (item as AccordionItem).title !== undefined
    );
  };

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
              alt={advantage.image}
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
            {advantage.description && <div>
              {advantage.description}
            </div>}
            {isDataAccordion(advantage.data) ? (
              <AnimatedAccordion accordionData={advantage.data} />
            ) : (
              <div className="flex flex-col">
                {advantage.data.map((item, index) => (
                  <p
                    className="text-subtitle-1 border-t-2 last:border-b-2 border-b-grayscale-gray1 border-t-grayscale-gray1 py-3"
                    key={index}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
