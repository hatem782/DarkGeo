import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Wall />
    </div>
  );
}

const Wall = () => {
  return (
    <div className="flex w-full h-fit items-end justify-end absolute bottom-0 right-0">
      <Image
        src="/Sprite/Demo/Demo_Image/Image_Wall.png"
        alt="wall"
        width={1000}
        height={1000}
        className="w-1/3"
      />
      <Image
        src="/Sprite/Demo/Demo_Image/Image_Wall.png"
        alt="wall"
        width={1000}
        height={1000}
        className="w-1/3"
      />
      <Image
        src="/Sprite/Demo/Demo_Image/Image_Wall.png"
        alt="wall"
        width={1000}
        height={1000}
        className="w-1/3"
      />
    </div>
  );
};
