import Artworks from "./interface/Gallery";
import Nature from "./images/nature.jpg";
import Nature2 from "./images/nature2.jpg";
import Nature3 from "./images/nature3.jpg";
import Cat from "./images/cat.jpg";
import Cat2 from "./images/cat2.jpg";
import Cat3 from "./images/cat3.jpg";
import Dog from "./images/dog.jpg";
import Dog2 from "./images/dog2.jpg";
import Dog3 from "./images/dog3.jpg";
import Architecture from "./images/architecture.jpg";
import Architecture2 from "./images/architecture2.jpg";
import Architecture3 from "./images/architecture3.jpg";

let nextArtworkId = 1;

const artworks: Artworks[] = [
  {
    id: nextArtworkId++,
    coverImage: Nature,
    title: "Nature",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "Nature",
    year: "2023",
    images: [Nature2, Nature3],
  },
  {
    id: nextArtworkId++,
    coverImage: Cat,
    title: "Cat",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "Animal",
    year: "2020",
    images: [Cat2, Cat3],
  },
  {
    id: nextArtworkId++,
    coverImage: Dog,
    title: "Dog",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "Animal",
    year: "2019",
    images: [Dog2, Dog3],
  },
  {
    id: nextArtworkId++,
    coverImage: Architecture,
    title: "Architecture",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "Architecture",
    year: "2021",
    images: [Architecture2, Architecture3],
  },
];

export default artworks;
