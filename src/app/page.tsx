import Border from "@/components/Border/Border";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Border size={2} height={18} width={49} className="m-[1vw]">
        <div className="w-full h-full"></div>
      </Border>
      <Wall className="translate-y-[0.4vw] absolute bottom-0 right-0">
        <div className="w-full h-full"></div>
      </Wall>
    </div>
  );
}

const Wall = ({
  className = "",
  children = <></>,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`h-fit ${className}`}>
      <div className="flex w-full h-fit items-end justify-end relative">
        <Image
          src="/Sprite/Demo/Demo_Image/Image_Wall.png"
          alt="wall"
          width={800}
          height={800}
          className="w-1/3"
        />
        <Image
          src="/Sprite/Demo/Demo_Image/Image_Wall.png"
          alt="wall"
          width={800}
          height={800}
          className="w-1/3"
        />
        <Image
          src="/Sprite/Demo/Demo_Image/Image_Wall.png"
          alt="wall"
          width={800}
          height={800}
          className="w-1/3"
        />
        <div className="w-full h-[60%] absolute bottom-0 right-0">
          {children}
        </div>
      </div>
    </div>
  );
};
