"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import artworks from "../../Gallery";

export default function ArtworkDetails(params: { params: { id: string } }) {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const id = parseInt(params.params.id, 10);
  const artwork = artworks.find((art) => art.id === id);

  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
  };

  if (!artwork)
    return (
      <>
        <div className="flex p-4 justify-center">
          <div className="p-12 mb-10 md:m-8 lg:mt-10 shadow shadow-white">
            <Link
              className="bg-golden-gradient text-transparent bg-clip-text px-5 text-xl"
              href="/gallery"
            >
              NOT FOUND
            </Link>
          </div>
        </div>
      </>
    );

  return (
    <>
      <div>
        <div className="flex items-center justify-center my-5 flex-row p-5 m-10">
          <div className="p-5 md:p-5 w-full h-full md:w-4/5 md:h-4/5 lg:p-5 lg:w-3/5 lg:h-3/5 relative">
            <Image
              src={artwork.images[activeImageIndex]}
              alt={`Main artwork or textil design products with a specific technique and the name ${artwork.title}`}
              placeholder="blur"
            />
          </div>
          <div className="columns-4 gap-4 w-[300px]  space-y-5 md:p-5 m-5">
            {artwork.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1} of artwork ${artwork.title}`}
                title={`Artwork ${artwork.title}`}
                placeholder="blur"
                onClick={() => handleThumbnailClick(index)}
                className={`cursor-pointer ${
                  activeImageIndex === index ? "border-2 border-gold" : ""
                }`}
              />
            ))}
          </div>
        </div>
        <div className="p-6 mx-auto mb-10 md:m-8 lg:w-1/2 lg:mx-auto lg:mt-10 shadow shadow-white">
          <h1 className="flex items-center justify-center bg-golden-gradient text-transparent bg-clip-text text-3xl">
            {artwork.title}
          </h1>
          <p className="text-white mt-1 italic text-xl whitespace-pre-line">
            {artwork.description}
          </p>
        </div>
      </div>
    </>
  );
}
