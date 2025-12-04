"use client";

import { use, useState } from "react";
import Image from "next/image";

export default function ImagesList({ imagesPromise }) {
  const images = use(imagesPromise).slice(0, 4);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-2xl">
        <Image
          src={currentImage.download_url}
          alt={currentImage.author}
          width={800}
          height={400}
          className="rounded-md border-2 border-gray-200"
          loading="eager"
        />
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded"
        >
          ❯
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
