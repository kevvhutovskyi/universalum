"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

function ServiceCard({
  title,
  description,
  icon,
  className,
}: ServiceCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-12 mb-2">
        {/* Icon */}
        <Image
          width={64}
          height={64}
          src={icon}
          alt={title}
          className="object-contain w-12 md:w-16 h-12 md:h-16"
        />

        {/* Title */}
        <h3 className="text-headline-5 md:text-headline-3 text-grayscale-black">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-body-1 text-grayscale-black leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export interface ServicesBlockProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function ServicesBlock() {
  const t = useTranslations();
  const router = useRouter();

  // Service data
  const services = [
    {
      title: t("services.design.title"),
      description: t("services.design.description"),
      icon: "/icons/Projecting.svg",
    },
    {
      title: t("services.construction.title"),
      description: t("services.construction.description"),
      icon: "/icons/Building.svg",
    },
    {
      title: t("services.engineering.title"),
      description: t("services.engineering.description"),
      icon: "/icons/EngineeringSolutions.svg",
    },
  ];

  return (
    <section className="mt-20 lg:px-8 px-3">
      <div className="container mx-auto border-y border-grayscale-gray2">
        {/* Section header */}

        <div className="flex flex-col my-10 gap-8">
          <div className="flex gap-2 items-center">
            <div className="h-3 w-3 rounded-full bg-accent-orange" />

            <p className="text-body-1">{t("common.ourServices")}</p>
          </div>

          <div className="grid grid-cols-3 gap-y-4">
            <h2 className="col-span-3 md:col-span-2 md:text-headline-2 text-headline-4 font-bold text-grayscale-black">
              {t("services.title")}
            </h2>
            <div className="col-span-3 md:col-span-1 hidden md:flex justify-end">
              <Button onClick={() => router.push({ pathname: "/services" })}>
                {t("common.viewAllServices")}
              </Button>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-grayscale-white h-full not-last:border-b md:not-last:border-b-0 md:not-last:border-r border-grayscale-gray2 py-8 md:py-24 px-4"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
        <Button
          className="w-full md:hidden mb-8"
          onClick={() => router.push({ pathname: "/services" })}
        >
          {t("common.viewAllServices")}
        </Button>
      </div>
    </section>
  );
}
