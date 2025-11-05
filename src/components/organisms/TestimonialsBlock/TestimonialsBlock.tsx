"use client";

import { useState, useEffect, useCallback } from "react";
import { SliderControls } from "@/components/molecules";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
}

export const TestimonialsBlock = () => {
  const t = useTranslations();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: t("testimonials.testimonial1.content"),
      author: t("testimonials.testimonial1.author"),
      position: t("testimonials.testimonial1.position"),
    },
    {
      id: 2,
      content: t("testimonials.testimonial2.content"),
      author: t("testimonials.testimonial2.author"),
      position: t("testimonials.testimonial2.position"),
    },
    {
      id: 3,
      content: t("testimonials.testimonial3.content"),
      author: t("testimonials.testimonial3.author"),
      position: t("testimonials.testimonial3.position"),
    },
  ];

  const TestimonialSlide = ({
    testimonial,
    isActive,
  }: {
    testimonial: Testimonial;
    isActive: boolean;
  }) => (
    <div
      className={cn(
        "absolute inset-0 transition-all duration-1000 flex flex-col justify-between",
        isActive
          ? "opacity-100 scale-100"
          : "opacity-0 scale-[1.03] pointer-events-none"
      )}
    >
      <h4 className="text-headline-4 text-grayscale-white">
        &ldquo;{testimonial.content}&ldquo;
      </h4>
      <div className="flex w-full justify-between">
        <div className="flex flex-col text-grayscale-white">
          <span className="text-subtitle-1">{testimonial.author}</span>
          <span className="text-body-1">{testimonial.position}</span>
        </div>
      </div>
    </div>
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayInterval = 6000;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setIsAutoplay(false);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoplay(false);
  }, [testimonials.length]);

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [isAutoplay, nextSlide]);

  useEffect(() => {
    if (isAutoplay) return;
    const timeout = setTimeout(() => {
      setIsAutoplay(true);
    }, 10000);
    return () => clearTimeout(timeout);
  }, [isAutoplay]);

  const activeTestimonial = testimonials[currentSlide];

  return (
    <div className="py-15 w-full px-3 md:px-0">
      <div className="container mx-auto bg-primary-dark rounded-3xl md:min-h-[30rem] w-full py-15 px-10 grid grid-cols-11">
        <div className="flex flex-col col-span-full md:col-span-5 justify-between md:min-h-auto min-h-[20rem]">
          <div className="flex flex-col gap-2 md:gap-6">
            <div className="flex gap-2 items-center">
              <div className="h-3 w-3 rounded-full bg-accent-orange" />
            </div>
            <h2 className="text-headline-4 md:text-headline-2 text-grayscale-white max-w-[34rem]">
              {t("common.whatOurClientsSay")}
            </h2>
            <p className="text-body-1 text-grayscale-white mt-6 block md:hidden">
              &ldquo;{activeTestimonial.content}&ldquo;
            </p>
          </div>

          <div className="flex justify-between md:hidden">
            <div className="flex w-full justify-between">
              <div className="flex flex-col text-grayscale-white">
                <span className="text-subtitle-1">
                  {activeTestimonial.author}
                </span>
                <span className="text-body-1">
                  {activeTestimonial.position}
                </span>
              </div>
            </div>

            <SliderControls
              onPrevious={prevSlide}
              onNext={nextSlide}
              className="bg-primary-medium text-grayscale-white hover:bg-primary-light hover:text-grayscale-white hover:border-primary-medium border-primary-medium"
            />
          </div>
        </div>
        <div className="col-span-full md:col-span-6 h-full relative hidden md:flex">
          {testimonials.map((testimonial, index) => (
            <TestimonialSlide
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === currentSlide}
            />
          ))}
          <div className="absolute bottom-0 right-0">
            <SliderControls
              onPrevious={prevSlide}
              onNext={nextSlide}
              className="bg-primary-medium text-grayscale-white hover:bg-primary-light hover:text-grayscale-white hover:border-primary-medium border-primary-medium"
            />
          </div>
        </div>
        <div className="flex md:hidden"></div>
      </div>
    </div>
  );
};
