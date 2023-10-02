"use client";
import Image from "next/image";
import { useState } from "react";

export default function Gallery({
  searchParams,
  artworks,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  artworks: Array<any>; // Adjust the type accordingly
}) {
  const [selectedcategory, setSelectedcategory] = useState("");

  // Filter artworks based on the selected category
  const filteredArtworks = artworks.filter(
    (artwork) => !selectedcategory || artwork.category === selectedcategory
  );

  // Handle button click to set the selected category
  const handlecategoryButtonClick = (category: string) => {
    setSelectedcategory(category);
  };

  return (
    <>
      <div>
        {/* Buttons for each category */}
        <button
          className="text-white"
          onClick={() => handlecategoryButtonClick("Animal")}
        >
          Animal
        </button>
        <button
          className="text-white"
          onClick={() => handlecategoryButtonClick("Nature")}
        >
          Nature
        </button>
        {/* Add more buttons for other categorys as needed */}
      </div>

      <div>
        {/* Display filtered artworks */}
        {filteredArtworks.map((artwork) => (
          <></>
        ))}
      </div>
    </>
  );
}
