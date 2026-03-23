import { useEffect, useState } from "react";
import foto2 from "~/images/foto10.jpg";
import foto3 from "~/images/foto11.jpg";
import foto4 from "~/images/foto12.jpg";
import foto5 from "~/images/foto13.jpg";
import foto6 from "~/images/foto18.jpg";
import foto8 from "~/images/foto16.jpg";
import Gallery from "./Gallery";
import type { IPhoto } from "./Gallery";

const photos: IPhoto[] = [
  {
    src: foto3,
    width: 6,
    height: 5,
    alt: "pic 2",
  },
  {
    src: foto2,
    width: 3,
    height: 2,
    alt: "pic 3",
  },
  {
    src: foto6,
    width: 1,
    height: 1,
    alt: "pic 4",
  },
  {
    src: foto5,
    width: 3,
    height: 2,
    alt: "pic 5",
  },
  {
    src: foto4,
    width: 4,
    height: 5,
    alt: "pic 6",
  },
  {
    src: foto8,
    width: 3,
    height: 2,
    alt: "pic 8",
  },
];

let isHydrating = true;

const GalleryPhotos = () => {
  let [isHydrated, setIsHydrated] = useState(!isHydrating);

  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="text-3xl font-head font-bold text-center mb-14 pt-10 text-gray-700">
        Gallery
      </h4>
      {isHydrated ? (
        <div className="w-full overflow-auto">
          <Gallery photos={photos} />
        </div>
      ) : null}
    </div>
  );
};

export default GalleryPhotos;
