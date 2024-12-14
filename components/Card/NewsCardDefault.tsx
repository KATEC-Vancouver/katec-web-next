import React, { FC } from "react";
import Image from "next/image";

interface NewsCardProps {
  title: string;
  desc: string;
  date: string;
  author: string;
  img: string;
  width?: string; // 가로폭 지정
  height?: string; // 세로폭 지정
}

const NewsCardDefault: FC<NewsCardProps> = ({
  title,
  desc,
  date,
  author,
  img,
  width = "100%", // 기본값 설정
  height = "auto", // 기본값 설정
}) => {
  return (
    <div
      className="bg-[#f7f6fb] p-3  shadow-lg flex gap-4 items-center hover:scale-105 transition-transform mx-auto"
      style={{
        width: width, // 가로폭
        height: height, // 세로폭
        maxWidth: "85%", // 부모 요소를 넘지 않도록 설정
      }}
    >
      {/* 텍스트 */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{desc}</p>
        <div className="mt-4 text-xs text-gray-500">
          <p>{date}</p>
          <p>By {author}</p>
        </div>
      </div>

      {/* 이미지 */}
      <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
        <Image
          src={img}
          alt={title}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default NewsCardDefault;
