"use client";
import Link from "next/link";
import artworks from "../Gallery";
import { Fragment, useState } from "react";
import Image from "next/image";

export default function Gallery({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedImage = Number(searchParams.id);
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "10";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const current = Number(page);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const entries = artworks.slice(start, end);

  const filterByCategory = (category: string | null) => {
    setSelectedCategory(category);
  };

  const isCategorySelected = (category: string) =>
    selectedCategory === category;

  const filteredEntries = selectedCategory
    ? entries.filter((artwork) => artwork.category === selectedCategory)
    : entries;

  return (
    <div className="flex flex-col row-2 gap-2 items-center">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => filterByCategory(null)}
          className={`mr-2 ${
            isCategorySelected("") ? "bg-blue-500 text-white" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => filterByCategory("Nature")}
          className={`mr-2 ${
            isCategorySelected("Nature") ? "bg-green-500 text-white" : ""
          }`}
        >
          Nature
        </button>
        <button
          onClick={() => filterByCategory("Animal")}
          className={`mr-2 ${
            isCategorySelected("Animal") ? "bg-red-500 text-white" : ""
          }`}
        >
          Animal
        </button>
        <button
          onClick={() => filterByCategory("Architecture")}
          className={`mr-2 ${
            isCategorySelected("Architecture") ? "bg-purple-500 text-white" : ""
          }`}
        >
          Architecture
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredEntries.map((artwork) => (
          <Fragment key={artwork.id}>
            <div className="p-10 m-10">
              <Link href={`/${artwork.id}`}>
                <figure className="w-[300px] pb-2 bg-gray rounded-lg drop-shadow-xl group">
                  <h1 className="text-xl font-bold bg-golden-gradient text-transparent bg-clip-text">
                    {artwork.title}
                  </h1>
                  <Image
                    src={artwork.coverImage}
                    title={`Artwork ${artwork.title}`}
                    alt=""
                    placeholder="blur"
                  />
                </figure>
              </Link>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
