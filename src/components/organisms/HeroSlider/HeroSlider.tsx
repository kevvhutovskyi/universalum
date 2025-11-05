"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Image, Text } from "@/components/atoms";
import { SliderControls } from "@/components/molecules";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

export interface HeroSlide {
  image: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonAction?: () => void;
}

export interface HeroSliderProps {
  slides?: HeroSlide[];
  autoplayInterval?: number;
  className?: string;
}

// Default slides if none provided
const defaultSlides: HeroSlide[] = [
  { image: "/photo/Hero1.png" },
  { image: "/photo/Hero2.png" },
];

// Slide component for rendering each background image
const SlideImage = React.memo(
  ({ image, isActive }: { image: string; isActive: boolean }) => (
    <div
      className={cn(
        "absolute inset-0 transition-all duration-1000",
        isActive
          ? "opacity-100 scale-100"
          : "opacity-0 scale-[1.03] pointer-events-none"
      )}
    >
      <Image
        src={image}
        alt="Hero slide background"
        fill
        priority={isActive}
        sizes="100vw"
        fit="cover"
        className="z-0"
      />
      {/* Dark overlay for better text visibility */}
    <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0.18)_0%,_rgba(0,0,0,0.08)_35%,_transparent_75%)]" />
  </div>
  )
);

SlideImage.displayName = "SlideImage";

// Static content component
const HeroContent = React.memo(
  ({ onButtonClick }: { onButtonClick: () => void }) => {
    const t = useTranslations();

    return (
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-6xl flex flex-col items-center gap-6">
          <h1 className="text-headline-3 md:text-headline-1 text-grayscale-white">
            {t("hero.title")}
          </h1>
          <Text
            variant="body1"
            color="white"
            className="max-w-3xl md:text-headline-5"
          >
            {t("hero.subtitle")}
          </Text>
          <Button className="mt-4" onClick={onButtonClick}>
            {t("hero.cta")}
          </Button>
        </div>
      </div>
    );
  }
);

HeroContent.displayName = "HeroContent";

export const HeroSlider = React.forwardRef<HTMLDivElement, HeroSliderProps>(
  (
    { slides = defaultSlides, autoplayInterval = 6000, className, ...props },
    ref
  ) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);
    const router = useRouter();

    const nextSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsAutoplay(false);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsAutoplay(false);
    }, [slides.length]);

    // Autoplay functionality
    useEffect(() => {
      if (!isAutoplay || slides.length <= 1) return;

      const interval = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(interval);
    }, [isAutoplay, nextSlide, autoplayInterval, slides.length]);

    // Resume autoplay after 10 seconds of inactivity
    useEffect(() => {
      if (isAutoplay) return;

      const timeout = setTimeout(() => {
        setIsAutoplay(true);
      }, 10000);

      return () => clearTimeout(timeout);
    }, [isAutoplay]);

    // Handle button click with smooth scroll to contacts section
    const handleButtonClick = () => {
      const contactsSection = document.getElementById("contacts");
      if (contactsSection) {
        contactsSection.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push({ pathname: "/#contacts" });
      }
    };

    return (
      <div
        ref={ref}
        className={cn("relative w-full h-screen overflow-hidden", className)}
        {...props}
      >
        {/* Render all slides */}
        {slides.map((slide, index) => (
          <SlideImage
            key={index}
            image={slide.image}
            isActive={index === currentSlide}
          />
        ))}

        {/* Static content */}
        <HeroContent onButtonClick={handleButtonClick} />

        {/* Navigation controls - only show if more than one slide */}
        {slides.length > 1 && (
          <SliderControls
            onPrevious={prevSlide}
            onNext={nextSlide}
            variant="centered"
          />
        )}
      </div>
    );
  }
);

HeroSlider.displayName = "HeroSlider";
