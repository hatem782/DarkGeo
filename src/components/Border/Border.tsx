import React from "react";
const TL = "/Sprite/Demo/border/TL.png";
const TR = "/Sprite/Demo/border/TR.png";
const BL = "/Sprite/Demo/border/BL.png";
const BR = "/Sprite/Demo/border/BR.png";
const T = "/Sprite/Demo/border/T.png";
const B = "/Sprite/Demo/border/B.png";
const L = "/Sprite/Demo/border/L.png";
const R = "/Sprite/Demo/border/R.png";

const CornerTL = ({ size = 1 }: { size: number }) => {
  return (
    <div
      style={{
        width: `${size}vw`,
        height: `${size}vw`,
      }}
    >
      <img src={TL} alt="" className="w-full h-full" />
    </div>
  );
};

const CornerTR = ({ size = 1 }: { size: number }) => {
  return (
    <div
      style={{
        width: `${size}vw`,
        height: `${size}vw`,
      }}
    >
      <img src={TR} alt="" className="w-full h-full" />
    </div>
  );
};

const CornerBL = ({ size = 1 }: { size: number }) => {
  return (
    <div
      style={{
        width: `${size}vw`,
        height: `${size}vw`,
      }}
    >
      <img src={BL} alt="" className="w-full h-full" />
    </div>
  );
};

const CornerBR = ({ size = 1 }: { size: number }) => {
  return (
    <div
      style={{
        width: `${size}vw`,
        height: `${size}vw`,
      }}
    >
      <img src={BR} alt="" className="w-full h-full" />
    </div>
  );
};

const Top = ({ size = 1, width = 1 }: { size: number; width: number }) => {
  return (
    <div
      style={{
        height: `${size}vw`,
        width: `${width}vw`,
      }}
    >
      <img src={T} alt="" className="w-full h-full" />
    </div>
  );
};

const Bottom = ({ size = 1, width = 1 }: { size: number; width: number }) => {
  return (
    <div
      style={{
        height: `${size}vw`,
        width: `${width}vw`,
      }}
    >
      <img src={B} alt="" className="w-full h-full" />
    </div>
  );
};

const Left = ({ size = 1, height = 1 }: { size: number; height: number }) => {
  return (
    <div
      style={{
        width: `${size}vw`,
        height: `${height}vw`,
      }}
    >
      <img src={L} alt="" className="w-full h-full" />
    </div>
  );
};

const Right = ({ size = 1, height = 1 }: { size: number; height: number }) => {
  return (
    <div
      style={{
        width: `${size}vw`,
        height: `${height}vw`,
      }}
    >
      <img src={R} alt="" className="w-full h-full" />
    </div>
  );
};

function Border({
  size = 1,
  height = 5,
  width = 5,
  className = "",
  children = <></>,
}: {
  size: number;
  height: number;
  width: number;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`w-fit h-fit relative ${className}`}>
      {/* TOP */}
      <div
        className={"flex"}
        style={{
          width: `${size * width}vw`,
          height: `${size}vw`,
        }}
      >
        <CornerTL size={size} />
        <Top size={size} width={size * (width - 2)} />
        <CornerTR size={size} />
      </div>
      {/* TOP */}

      {/* MIDDLE */}
      <div
        className="flex justify-between"
        style={{
          width: `${size * width}vw`,
          height: `${size * (height - 2)}vw`,
        }}
      >
        <Left size={size} height={size * (height - 2)} />
        <Right size={size} height={size * (height - 2)} />
      </div>
      {/* MIDDLE */}

      {/* BOTTOM */}
      <div
        className={"flex"}
        style={{
          width: `${size * width}vw`,
          height: `${size}vw`,
        }}
      >
        <CornerBL size={size} />
        <Bottom size={size} width={size * (width - 2)} />
        <CornerBR size={size} />
      </div>
      {/* BOTTOM */}

      <div
        className="absolute w-full h-full top-0 right-0"
        style={{
          padding: `${size}vw`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Border;
