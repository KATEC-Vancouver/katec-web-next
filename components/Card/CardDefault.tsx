import React, { FC } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  desc: string;
  img: string;
  date: string;
}

const CardDefault: FC<CardProps> = ({ title, desc, img, date }) => {
  return (
    <div className="w-full bg-white  shadow-md overflow-hidden">
      <Image
        src={img}
        alt={title}
        width={870}
        height={500}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="block text-orange-500 text-sm mb-2">{date}</span>
        <h3 className="text-lg text-gray-800 font-semibold mb-2z">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default CardDefault;
