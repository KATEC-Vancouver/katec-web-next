// NewsCardDefault.tsx
import React, { FC } from "react";

interface NewsCardProps {
  title: string;
  desc: string;
  date: string;
  author: string;
}

const NewsCardDefault: FC<NewsCardProps> = ({ title, desc, date, author }) => {
  return (
    <div className="w-full bg-gray-100 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
      <div className="mt-4 text-sm text-gray-500">
        <p>{date}</p>
        <p>By {author}</p>
      </div>
    </div>
  );
};

export default NewsCardDefault; // 반드시 default로 export
