"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImagesList() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("https://picsum.photos/v2/list");
      const result = await res.json();
      setImages(result.slice(0, 4));
    };
    fetchImages();
  }, []);

  if (images.length === 0) return <div>Loading Images…</div>;

  const max = images.length;
  const safeIndex = currentIndex % max;
  const currentImage = images[safeIndex];

  const nextSlide = () => setCurrentIndex((i) => (i + 1) % max);

  const prevSlide = () => setCurrentIndex((i) => (i - 1 + max) % max);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-2xl">
        <Image
          src={currentImage.download_url}
          alt={currentImage.author}
          width={800}
          height={400}
          className="rounded-md border-2 border-gray-200"
        />

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded"
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
              index === safeIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
