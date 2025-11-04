"use client";

import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../atoms"; // <--- ВІДНОВЛЕНО
import { Button } from "../ui/button"; // <--- ВІДНОВЛЕНО

// --- Тимчасові заглушки видалено ---

interface ProjectGalleryProps {
  images: string[];
}

// Використовуємо React.FC та деструктуруємо пропси
export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Запобіжник на випадок відсутності зображень
  if (!images || images.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-grayscale-gray3">
        Немає зображень для відображення.
      </div>
    );
  }

  // --- Функції навігації ---
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Поточне зображення для зручності
  const currentImage = images[currentIndex];

  return (
    <div className="container mx-auto flex flex-col gap-4 px-4 md:px-0">
      {/* --- Головний переглядач (Desktop) --- */}
      <div className="h-[1312px] bg-grayscale-gray3 hidden md:flex items-center justify-between px-4 rounded-lg overflow-hidden">
        <Button
          onClick={goToPrevious} // <--- ДОДАНО onClick
          className="z-10 bg-primary-light text-grayscale-white hover:bg-primary-medium hover:text-grayscale-white hover:border-primary-medium"
          variant="icon"
          size="icon"
          aria-label="Previous slide"
        >
          <ArrowLeftIcon className="w-6 h-6 font-light" />
        </Button>

        {/* --- Основне Зображення (Desktop) --- */}
        <div
          className="w-full h-full bg-contain bg-no-repeat bg-center transition-all duration-500 ease-in-out rounded-lg" // <--- ЗМІНЕНО: bg-cover на bg-contain та додано bg-no-repeat
          key={currentIndex} // Додано key для анімації переходу
          style={{ backgroundImage: `url(${currentImage})` }} // <--- ВІДОБРАЖЕННЯ КАРТИНКИ
        >
          {/* Використовуємо bg-contain, щоб показати все зображення */}
        </div>

        <Button
          onClick={goToNext} // <--- ДОДАНО onClick
          className="z-10 bg-primary-light text-grayscale-white hover:bg-primary-medium hover:text-grayscale-white hover:border-primary-medium"
          variant="icon"
          size="icon"
          aria-label="Next slide"
        >
          <ArrowRightIcon className="w-6 h-6 font-light" />
        </Button>
      </div>

      {/* --- Головний переглядач (Mobile) --- */}
      <div
        className="h-[25rem] bg-cover bg-center rounded-lg md:hidden flex w-full transition-all duration-500 ease-in-out"
        // Примітка: я прибрав md:h-[1312px], оскільки цей блок має md:hidden
        key={currentIndex + "-mobile"} // Унікальний key для мобільної версії
        style={{ backgroundImage: `url(${currentImage})` }} // <--- ВІДОБРАЖЕННЯ КАРТИНКИ
      ></div>

      {/* --- Мініатюри (Thumbnails) --- */}
      <div className="grid gap-4 grid-cols-10 w-full">
        {/* Замінюємо захардкоджені div-и на динамічний рендерінг */}
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)} // <--- ДОДАНО onClick
            aria-label={`View image ${index + 1}`}
            className={`
              h-30 col-span-2 rounded-lg bg-cover bg-center cursor-pointer 
              transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-4 focus:ring-primary-medium focus:ring-offset-2
              ${
                currentIndex === index
                  ? "ring-4 ring-primary-medium" // Активний стан
                  : "opacity-60 hover:opacity-100" // Неактивний стан
              }
            `}
            style={{ backgroundImage: `url(${image})` }} // <--- ВІДОБРАЖЕННЯ МІНІАТЮРИ
          />
        ))}
      </div>
    </div>
  );
};

